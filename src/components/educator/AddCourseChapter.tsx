import { MdDelete } from "react-icons/md";
import { HiOutlinePlay } from "react-icons/hi";
import type { CourseContent } from "../../Types";
import { IoAddCircleOutline } from "react-icons/io5";
import React, { useState } from "react";

type Props = {
    chapterData: CourseContent
    index?: number
    removeChapter: (chapterID: string) => void
    addLecture: (chapterID: string, newLectureTitle: string, newLectureDuration: string, newLectureURL: string, newLectureIsFree: string) => void
    removeLecture: (chapterID: string, lectureID: string) => void
}

const AddCourseChapter = ({ chapterData, index = 0, removeChapter, addLecture, removeLecture }: Props) => {

    const [showADDLectureModal, setShowADDLectureModal] = useState<boolean>(false)
    const [newLectureTitle, setNewLectureTitle] = useState<string>('')
    const [newLectureDuration, setNewLectureDuration] = useState<string>('')
    const [newLectureURL, setNewLectureURL] = useState<string>('')
    const [newLectureIsFree, setNewLectureIsFree] = useState<string>('رایگان')


    const cleanupModal = () => {
        setNewLectureTitle('')
        setNewLectureDuration('')
        setNewLectureURL('')
        setNewLectureIsFree('رایگان')

        setShowADDLectureModal(false)
    }



    const addNewLectureHandler = () => {

        if (newLectureTitle === "" || newLectureDuration === "" || newLectureURL === "") return;

        addLecture(chapterData.chapterId, newLectureTitle, newLectureDuration, newLectureURL, newLectureIsFree)
        cleanupModal()

    }


    return (

        <div
            className="group rounded-xl bg-white border border-cyan-100 overflow-hidden hover:shadow-xl transition">

            {/* Header */}

            <div
                className=" flex justify-between items-center py-2 px-2 md:px-5 md:py-5 bg-gradient-to-r from-cyan-50 to-white border-b">

                <div
                    className=" flex items-center gap-4">

                    <div
                        className=" w-7 h-7 rounded-md md:w-11 md:h-11 md:rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                    </div>

                    <div>

                        <h4 className=" text-sm  md:text-lg  text-slate-800  font-MTNIrancell-Bold ">
                            {chapterData.chapterTitle}
                        </h4>

                        <p className=" text-[10px] md:text-sm text-slate-500 mt-1">
                            {chapterData.chapterContent.length}
                            {" "}
                            جلسه
                        </p>

                    </div>

                </div>

                <button className=" w-8 h-8 md:w-11 md:h-11 rounded-sm bg-red-50 hover:bg-red-100 text-red-500 flex items-center  justify-center transition">
                    <MdDelete
                        onClick={() => removeChapter(chapterData.chapterId)}
                        className="text-[18px] md:text-[20px]" />
                </button>

            </div>

            {/* Lectures */}

            <div className="p-1 md:p-6 flex flex-col gap-3">

                {chapterData.chapterContent.map((lecture) => (

                    <div
                        key={lecture.lectureId}
                        className="flex justify-between items-center rounded-xl border border-slate-100 bg-slate-50/70 px-1 py-1 md:px-4 md:py-3 hover:border-cyan-200 hover:bg-cyan-50 transition">

                        <div
                            className="flex items-center gap-3">

                            <div
                                className=" w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                <HiOutlinePlay
                                    className=" text-cyan-600 "
                                    size={18}
                                />
                            </div>

                            <div>

                                <h5
                                    className=" text-slate-700 font-medium text-[12px] md:text-[16px]">
                                    {lecture.lectureTitle}
                                </h5>

                                <div className=" mt-1 flex gap-3 text-[10px] text-slate-500">

                                    <span>
                                        {lecture.lectureDuration}
                                        {" "}
                                        دقیقه
                                    </span>

                                    {lecture.isPreviewFree && (
                                        <span className=" px-2 py-1 rounded-full bg-green-100 text-green-700">
                                            رایگان
                                        </span>
                                    )}

                                </div>

                            </div>

                        </div>

                        <button
                            onClick={() => removeLecture(chapterData.chapterId, lecture.lectureId)}
                            className=" text-red-500 hover:bg-red-50 p-2 rounded-xl transition">
                            <MdDelete size={20} />
                        </button>

                    </div>

                ))}

                {/* ADD Lecture */}

                <div
                    className="flex flex-col gap-2  rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 hover:border-cyan-200 hover:bg-cyan-50 transition">

                    {!showADDLectureModal && (
                        <div className="flex gap-2 items-center">
                            <div
                                onClick={() => setShowADDLectureModal(true)}
                                className=" w-10 h-10 rounded-xl cursor-pointer bg-white flex items-center justify-center shadow-sm">
                                <IoAddCircleOutline
                                    className=" text-cyan-600  "
                                    size={18}
                                />
                            </div>

                            <h4 className=" text-[12px] md:text-[16px]">
                                افزودن جلسه جدید
                            </h4>
                        </div>
                    )}

                    {/*  */}

                    {showADDLectureModal && (
                        <div className=" w-full flex flex-col gap-2 md:gap-4 mt-2">
                            <div>
                                <label className="text-[13px] md:text-[16px] text-slate-600 ">
                                    عنوان جلسه
                                </label>

                                <input
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewLectureTitle(e.target.value)}
                                    value={newLectureTitle}
                                    className=" w-full md:mt-2 rounded-xl border border-slate-200 p-4 outline-none focus:border-cyan-500" />

                            </div>
                            <div>
                                <label className="text-[13px] md:text-[16px] text-slate-600">
                                    مدت جلسه
                                </label>

                                <input
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewLectureDuration(e.target.value)}
                                    value={newLectureDuration}
                                    className=" w-full md:mt-2 rounded-xl border border-slate-200 p-4 outline-none focus:border-cyan-500" />

                            </div>
                            <div>
                                <label className="text-[13px] md:text-[16px] text-slate-600">
                                    URL جلسه
                                </label>

                                <input
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewLectureURL(e.target.value)}
                                    value={newLectureURL}
                                    className=" w-full md:mt-2 rounded-xl border border-slate-200 p-4 outline-none focus:border-cyan-500" />

                            </div>
                            <div>
                                <label className="text-[13px] md:text-[16px] text-slate-600">
                                    ایا رایگان است
                                </label>

                                <select
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setNewLectureIsFree(e.target.value)}
                                    name="isfree" className=" px-3 py-2 mr-2">
                                    <option value="رایگان">رایگان</option>
                                    <option value="غیر رایگان"> غیر رایگان</option>
                                </select>

                            </div>

                            <div className=" w-full flex justify-between flex-row">
                                <button
                                    onClick={addNewLectureHandler}
                                    className=" bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 rounded-md">
                                    افزودن جلسه
                                </button>
                                <button
                                    onClick={cleanupModal}
                                    className=" bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md">
                                    لغو
                                </button>

                            </div>

                        </div>
                    )}

                </div>

            </div>

        </div>

    );
};

export default AddCourseChapter;