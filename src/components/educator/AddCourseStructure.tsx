import { useState, type Dispatch, type SetStateAction } from "react"
import useAddCourseContext from "../../hooks/useAddCourseContext"
import { MdDownloadDone } from "react-icons/md"
import { ImCancelCircle } from "react-icons/im"
import AddCourseChapter from "./AddCourseChapter"



type Props = {
    showAddChapterModal: boolean,
    setShowAddChapterModal: Dispatch<SetStateAction<boolean>>
}

const AddCourseStructure = ({ showAddChapterModal, setShowAddChapterModal }: Props) => {

    const [addChapterText, setAddChapterText] = useState<string>('')

    const { courseData, courseDataDispatch } = useAddCourseContext()

    const addChapterModalCloser = () => {

        setAddChapterText('')
        setShowAddChapterModal(false)
    }

    const addNewChapter = async () => {

        if (addChapterText === "") return;

        await courseDataDispatch({ type: 'ADD_Chapter', payload: addChapterText })
        addChapterModalCloser()
    }

    const removeChapter = (chapterID: string) => {

        courseDataDispatch({ type: "REMOVE_Chapter", payload: chapterID })

    }

    const addLecture = (chapterID: string, newLectureTitle: string, newLectureDuration: string, newLectureURL: string, newLectureIsFree: string) => {

        const chapterIndex = courseData.courseContent.findIndex(chpter => chpter.chapterId === chapterID)

        const isFree = newLectureIsFree === 'رایگان' ? true : false


        courseDataDispatch({ type: "ADD_Lecture", payload: { chapterIndex: chapterIndex, newLectureTitle, newLectureDuration, newLectureURL, newLectureIsFree: isFree } })



    }

    const removeLecture = (chapterID: string, lectureID: string) => {

        courseDataDispatch({ type: 'REMOVE_Lecture', payload: { lectureID, chapterID } })

    }

    return (
        <section
            className="bg-gradient-to-b from-cyan-50 via-white to-white rounded-[32px] border border-cyan-100 shadow-sm p-5 md:p-7 ">

            {/* Header */}

            <div
                className=" w-full flex flex-col gap-4 items-center justify-between pb-6 border-b border-cyan-100">

                <div className=" w-full flex gap-4 justify-between items-end">
                    <div>

                        <h2
                            className="text-2xl text-slate-800 font-MTNIrancell-Bold">
                            ساختار دوره
                        </h2>

                        <p
                            className=" mt-1 text-sm text-slate-500">
                            فصل‌ها و جلسات دوره را مدیریت کنید
                        </p>

                    </div>

                    {!showAddChapterModal && (
                        <button
                            onClick={() => setShowAddChapterModal(true)}
                            className=" px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-cyan-500 text-white hover:scale-[1.03] active:scale-100 transition shadow-lg shadow-cyan-300/40">
                            + افزودن فصل
                        </button>
                    )}
                </div>

                {/* Add Chapter Modal */}

                {showAddChapterModal && (
                    <div className="w-full ">

                        <label>
                            عنوان فصل
                        </label>

                        <div className=" w-full mt-2 rounded-2xl border p-4 bg-white flex justify-between items-center">
                            <input
                                value={addChapterText}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddChapterText(e.target.value)}
                                placeholder="عنوان را وارد نمایید"
                                className=" bg-transparent outline-none " />


                            <div className=" flex gap-2">
                                <MdDownloadDone
                                    onClick={addNewChapter}
                                    size={20} className="text-green-600 cursor-pointer" />
                                <ImCancelCircle
                                    onClick={addChapterModalCloser}
                                    size={20} className="text-red-500 cursor-pointer" />
                            </div>

                        </div>

                    </div>
                )}

            </div>

            {/* Chapters */}

            <div className="mt-6 flex flex-col gap-5">

                {courseData.courseContent.map((chapter, index) => (
                    <AddCourseChapter
                        key={chapter.chapterId}
                        chapterData={chapter}
                        index={index}
                        removeChapter={removeChapter}
                        addLecture={addLecture}
                        removeLecture={removeLecture}
                    />
                ))}

            </div>

        </section>
    )
}

export default AddCourseStructure