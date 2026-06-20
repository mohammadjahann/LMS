import { createPortal } from "react-dom";
import type { CourseType } from "../../Types";

import useAddCourseContext from "../../hooks/useAddCourseContext";
import { supabase } from "../../supabase";
import useEducatorAuth from "../../hooks/useEducatorAuth";


type Props = {
    courseData: CourseType
    show: boolean
    closeModal: () => void
}

const CoursePreviewModal = ({ courseData, show, closeModal }: Props) => {

    const { educatorData, setEducatorData } = useEducatorAuth()

    const { validator, addCourseToDatabase, courseDataDispatch, loading } = useAddCourseContext()

    const publishCourse = async () => {

        const isValid = validator()

        if (isValid === "VALID") {

            const courseAdded = await addCourseToDatabase();

            const updatedCourseList = [...educatorData?.courses ?? [], courseData._id]

            await supabase
                .from('educators')
                .update({
                    courses: updatedCourseList
                })
                .eq('id', educatorData?.id)


            setEducatorData(prev => {
                if (!prev) return null
                return {
                    ...prev,
                    courses: updatedCourseList
                }
            })

            if (courseAdded) courseDataDispatch({ type: "CLEANUP" })
        }

        closeModal()


    }



    return createPortal(
        <>
            {/* Overlay */}
            <div
                onClick={closeModal}
                className={`
                    fixed inset-0 z-[100] bg-slate-950/30 backdrop-blur-md transition-all duration-300 font-MTNIrancell-Medium
                    ${show ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
            />

            {/* Modal Positioner */}
            <div
                className={`
                    fixed left-1/2 top-1/2 z-[101] w-[95%] max-w-[1100px]
                    -translate-x-1/2 transition-all duration-300
                    ${show ? "-translate-y-1/2 opacity-100" : "-translate-y-[45%] opacity-0 pointer-events-none"}
                `}
            >
                {/* Modal Container */}
                <div
                    className=" flex flex-col w-full max-h-[90vh] overflow-hidden  rounded-[36px] bg-gradient-to-b from-cyan-50 via-white to-white border border-cyan-100 shadow-[0_40px_120px_rgba(0,0,0,.18)]">

                    {/* Header */}

                    <div
                        className="
                            shrink-0  bg-white/70 backdrop-blur-xl border-b px-6 py-5 flex dir justify-between items-center z-10 ">
                        <div>
                            <h2 className="text-3xl text-slate-800 font-MTNIrancell-Bold">
                                پیش نمایش دوره
                            </h2>
                            <p className="text-slate-500 mt-2">
                                بررسی نهایی قبل از انتشار
                            </p>
                        </div>
                        <button
                            onClick={closeModal}
                            className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-500 transition"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Body  */}

                    <div className="flex-1 overflow-y-auto p-6 md:p-8 dir">
                        <div className="grid xl:grid-cols-[1fr_360px] gap-8">

                            {/* Right */}

                            <div className="flex flex-col gap-6">

                                {/* Cover */}

                                <div className="overflow-hidden rounded-[32px] border">
                                    <img
                                        className="w-full h-[300px] object-cover"
                                        src={courseData.courseThumbnail || "https://placehold.co/1200x600"}
                                    />
                                </div>

                                {/* Title */}

                                <div className="bg-white rounded-[32px] p-7 border">
                                    <div className="flex gap-3 mb-4">
                                        <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700">
                                            {courseData.category}
                                        </span>
                                    </div>
                                    <h1 className="text-3xl text-slate-800 font-MTNIrancell-Bold">
                                        {courseData.courseTitle || "عنوان دوره"}
                                    </h1>
                                    <p className="mt-6 text-slate-600 leading-9">
                                        {courseData.courseDescription || "توضیحات دوره"}
                                    </p>
                                </div>

                                {/* Chapters */}

                                <div className="bg-white rounded-[32px] border p-6">
                                    <h3 className="text-2xl mb-6 font-MTNIrancell-Bold">
                                        ساختار دوره
                                    </h3>
                                    <div className="flex flex-col gap-4">
                                        {courseData.courseContent.map((chapter, index) => (
                                            <div key={chapter.chapterId} className="rounded-2xl bg-slate-50 p-5">
                                                <div className="flex justify-between">
                                                    <h4>فصل {index + 1}</h4>
                                                    <span>{chapter.chapterContent.length} جلسه</span>
                                                </div>
                                                <p className="mt-2 text-slate-700">
                                                    {chapter.chapterTitle}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}

                            <aside className="flex flex-col gap-5">
                                <div className="sticky top-0 bg-white rounded-[32px] p-6 border">
                                    <h3 className="text-xl mb-6 font-MTNIrancell-Bold">خلاصه دوره</h3>
                                    <div className="flex flex-col gap-5">
                                        <div className="flex justify-between">
                                            <span>قیمت</span>
                                            <span>{Number(courseData.coursePrice).toLocaleString('fa-IR')}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>تخفیف</span>
                                            <span>{courseData.discount}%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>فصل</span>
                                            <span>{courseData.courseContent.length}</span>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex flex-col gap-3 items-center">
                                        {loading ? (
                                            <div
                                                className=" w-10 sm:w-10 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin">

                                            </div>
                                        ) : (
                                            <button
                                                onClick={publishCourse}
                                                className="py-4 rounded-2xl bg-cyan-600 text-white w-full">
                                                انتشار دوره
                                            </button>
                                        )}

                                        <button onClick={closeModal} className="py-4 rounded-2xl border w-full">
                                            برگشت
                                        </button>
                                    </div>
                                </div>
                            </aside>

                        </div>
                    </div>
                </div >
            </div >
        </>,
        document.body
    )
}

export default CoursePreviewModal;