
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import useEditCourseContext from "../../hooks/useEditCourseContext";
import type React from "react";
import EditCourseChapter from "./EditCourseChapter";
import { useEffect, useRef, useState } from "react";
import { MdCancel, MdFileDownloadDone } from "react-icons/md";

const EditCourseModal = () => {

    const [showAddChapter, setShowAddChapter] = useState<boolean>(false)
    const [newChapterTitle, setNewChapterTitle] = useState<string>('')

    const scrollRef = useRef<HTMLDivElement | null>(null)

    const { setRefresh, validator, loading, courseState, showModal, setShowModal, Dispatch, updateDatabase } = useEditCourseContext()

    const saveChangeHandler = async () => {

        const isValid = validator()

        if (isValid === "VALID") {
            const isUpdated = await updateDatabase(courseState?._id ?? '')

            if (isUpdated === 1) {
                setShowModal(false)
                setRefresh(prev => prev += 1)
            }
        }

    }

    useEffect(() => {

        if (showModal) {
            scrollRef.current?.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

        if (!showModal) {
            // eslint-disable-next-line
            setShowAddChapter(false)
            setNewChapterTitle('')
        }


    }, [showModal])

    return createPortal(

        <div
            className={`fixed dir inset-0 z-[999] bg-black/50 backdrop-blur-md flex items-center justify-center px-36 transition-all duration-200 ${showModal ? "edit-course-modal-opacity-in" : " edit-course-modal-opacity-out pointer-events-none"}`}>

            <div
                className={`w-full max-w-[1500px] h-[92vh] overflow-hidden rounded-[40px] bg-white flex flex-col  transition-all duration-200 ${showModal ? "edit-course-modal-in" : "edit-course-modal-out "}`}>

                {/* Header */}

                <div
                    className=" px-8 py-6 border-b flex justify-between items-center">

                    <div>

                        <h2 className=" text-3xl font-MTNIrancell-Bold">
                            ویرایش دوره
                        </h2>

                        <p className="text-slate-500 mt-1">
                            تغییر اطلاعات و ساختار دوره
                        </p>

                    </div>

                    <button
                        onClick={() => setShowModal(false)}
                        className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center ">
                        <FiX size={24} />
                    </button>

                </div>

                {/* Content */}

                <div
                    className="flex flex-1 overflow-hidden">

                    {/* Body */}

                    <div
                        ref={scrollRef}
                        className=" flex-1 overflow-y-auto p-8">

                        {/* General */}

                        <section
                            className="rounded-[32px] bg-cyan-50 border p-7">

                            <h3 className=" text-2xl font-MTNIrancell-Bold">
                                اطلاعات کلی
                            </h3>

                            <div
                                className="mt-7 grid md:grid-cols-2 gap-5 font-MTNIrancell-Medium">

                                <div className=" flex flex-col gap-2">
                                    <label >عنوان دوره :</label>
                                    <input
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => Dispatch({ type: "SET_TITLE", payload: e.target.value })}
                                        className=" rounded-2xl p-4 border"
                                        value={courseState?.courseTitle}
                                    />
                                </div>

                                <div className=" flex flex-col gap-2">
                                    <label >دسته بندی :</label>
                                    <select
                                        className=" rounded-2xl p-4 border">
                                        <option>
                                            {courseState?.category}
                                        </option>
                                    </select>
                                </div>

                                <div className=" flex flex-col gap-2">
                                    <label>قیمت دوره :</label>
                                    <input
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => Dispatch({ type: "SET_PRICE", payload: Number(e.target.value) })}
                                        className="rounded-2xl p-4 border"
                                        value={courseState?.coursePrice}
                                    />
                                </div>

                                <div className=" flex flex-col gap-2">
                                    <label>تخفیف :</label>
                                    <input
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => Dispatch({ type: "SET_DISCOUNT", payload: Number(e.target.value) })}
                                        className=" rounded-2xl p-4 border"
                                        value={courseState?.discount} />
                                </div>

                            </div>

                        </section>

                        {/* Thumbnail */}

                        <section className="mt-7 rounded-[32px] border p-7">

                            <h3 className="text-2xl mb-5 font-MTNIrancell-Bold">
                                تصویر
                            </h3>

                            <img
                                className=" rounded-3xl h-[280px] object-cover w-full"
                                src={courseState?.courseThumbnail} />
                            <input
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => Dispatch({ type: "SET_THUMBNAIL", payload: e.target.value })}
                                value={courseState?.courseThumbnail}
                                className="mt-5 rounded-2xl border p-4 w-full" />

                        </section>

                        {/* Description */}

                        <section className=" mt-7 rounded-[32px] border p-7">

                            <h3 className="text-2xl mb-5 font-MTNIrancell-Bold">
                                توضیحات
                            </h3>

                            <textarea
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => Dispatch({ type: "SET_DESCRTPTION", payload: e.target.value })}
                                value={courseState?.courseDescription}
                                className=" w-full h-[260px] rounded-3xl border p-5" />

                        </section>

                        {/* Chapters */}

                        <section className="mt-7 rounded-[32px] border p-7">

                            <div>

                                <div className=" flex justify-between">

                                    <h3 className="text-2xl font-MTNIrancell-Bold">
                                        ساختار دوره
                                    </h3>

                                    <button
                                        onClick={() => setShowAddChapter(true)}
                                        className=" px-5 py-3 rounded-2xl bg-cyan-600 text-white">
                                        افزودن فصل
                                    </button>

                                </div>

                                <div className={`w-full grid transition-all duration-200 ${showAddChapter ? " grid-rows-[1fr]" : " grid-rows-[0fr]"}`}>

                                    <div className=' overflow-hidden bg-gray-300 rounded-md mt-2 flex items-center px-2'>

                                        <input
                                            value={newChapterTitle}
                                            className='w-full py-2 px-3 bg-transparent outline-none'
                                            type="text"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewChapterTitle(e.target.value)}
                                        />

                                        <div className="flex gap-1 items-center">

                                            <MdCancel
                                                className=' text-[18px] text-red-500 cursor-pointer'
                                                onClick={() => {
                                                    setShowAddChapter(false)
                                                    setNewChapterTitle('')
                                                }} />
                                            <MdFileDownloadDone
                                                onClick={() => {
                                                    Dispatch({ type: "SET_ADD_CHAPTER", payload: newChapterTitle })
                                                    setNewChapterTitle('')
                                                    setShowAddChapter(false)
                                                }}
                                                className=' text-[18px] text-green-600 cursor-pointer' />
                                        </div>

                                    </div>

                                </div>

                            </div>

                            {courseState?.courseContent.map(chapter => (
                                <EditCourseChapter chapter={chapter} />

                            ))}
                        </section>

                    </div>

                </div>

                {/* Footer */}

                <div className=" border-t p-6 flex justify-between"
                >

                    <button
                        onClick={() => setShowModal(false)}
                        className=" px-7 py-4 rounded-2xl border">
                        انصراف
                    </button>

                    <div
                        className="flex gap-3">

                        <button className=" px-7 py-4 rounded-2xl  bg-slate-900 text-white">
                            پیش نمایش
                        </button>
                        {loading ? (
                            <div
                                className=" w-10 h-10 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin">

                            </div>
                        ) : (
                            <button
                                onClick={saveChangeHandler}
                                className=" px-7 py-4 rounded-2xl bg-cyan-600 text-white">
                                ذخیره تغییرات
                            </button>
                        )}


                    </div>

                </div>

            </div>

        </div>
        ,
        document.body

    )

}

export default EditCourseModal