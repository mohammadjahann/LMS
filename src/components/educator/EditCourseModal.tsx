
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

    const [mounted, setMounted] = useState(false)

    useEffect(() => {

        if (showModal) {
            // eslint-disable-next-line
            setMounted(true)
            return
        }

        const timer = setTimeout(() => {

            setMounted(false)

        }, 600)

        return () => clearTimeout(timer)

    }, [showModal])

    if (!mounted) return null

    return createPortal(

        <div
            className={`
            fixed dir inset-0 z-[999] bg-black/50 backdrop-blur-md flex items-center justify-center px-2 transition-all duration-200 ${showModal ? "edit-course-modal-opacity-in" : " edit-course-modal-opacity-out pointer-events-none"}
            md:px-36`}>

            <div
                className={`
                w-full max-w-[1500px] h-[92vh] overflow-hidden rounded-[20px] bg-white flex flex-col  transition-all duration-200 ${showModal ? "edit-course-modal-in" : "edit-course-modal-out "}
                md:rounded-[40px]`}>

                {/* Header */}

                <div
                    className="
                     px-2 py-3 border-b flex justify-between items-center
                     md:px-8 md:py-6">

                    <div>

                        <h2
                            className=" 
                         text-xl font-MTNIrancell-Bold
                         md:text-3xl">
                            ویرایش دوره
                        </h2>

                        <p
                            className="
                            text-[12px] text-slate-500 mt-1
                            md:text-[16px]">
                            تغییر اطلاعات و ساختار دوره
                        </p>

                    </div>

                    <button
                        onClick={() => setShowModal(false)}
                        className="
                        w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center
                        md:w-14 md:h-14 md:rounded-2xl ">
                        <FiX
                            className="
                            text-[18px]
                            md:text-xl" />
                    </button>

                </div>

                {/* Content */}

                <div
                    className="flex flex-1 overflow-hidden">

                    {/* Body */}

                    <div
                        ref={scrollRef}
                        className=" 
                        flex-1 overflow-y-auto p-2
                        md:p-8">

                        {/* General */}

                        <section
                            className="
                            rounded-[12px] bg-cyan-50 border p-2
                            md:rounded-[22px] md:p-7">

                            <h3
                                className="
                                text-xl text-center font-MTNIrancell-Bold
                                md:text-2xl md:text-right">
                                اطلاعات کلی
                            </h3>

                            <div
                                className="
                                mt-2 grid  gap-5 font-MTNIrancell-Medium
                                md:grid-cols-2 md:mt-7">

                                <div className=" flex flex-col gap-2">
                                    <label
                                        className="
                                        text-[12px]
                                        md:text-[16px]">
                                        عنوان دوره :
                                    </label>
                                    <input
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => Dispatch({ type: "SET_TITLE", payload: e.target.value })}
                                        className=" 
                                        rounded-md p-2 border text-[12px]
                                        md:rounded-2xl md:p-4 md:text-[16px]"
                                        value={courseState?.courseTitle}
                                    />
                                </div>

                                <div className=" flex flex-col gap-2">
                                    <label
                                        className="
                                        text-[12px]
                                        md:text-[16px]">
                                        دسته بندی :
                                    </label>
                                    <select
                                        className=" 
                                        rounded-md p-2 border text-[12px]
                                        md:rounded-2xl md:p-4 md:text-[16px]">
                                        <option>
                                            {courseState?.category}
                                        </option>
                                    </select>
                                </div>

                                <div className=" flex flex-col gap-2">
                                    <label
                                        className="
                                        text-[12px]
                                        md:text-[16px]">
                                        دوره :
                                    </label>
                                    <input
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => Dispatch({ type: "SET_PRICE", payload: Number(e.target.value) })}
                                        className=" 
                                        rounded-md p-2 border text-[12px]
                                        md:rounded-2xl md:p-4 md:text-[16px]"
                                        value={courseState?.coursePrice}
                                    />
                                </div>

                                <div className=" flex flex-col gap-2">
                                    <label
                                        className="
                                        text-[12px]
                                        md:text-[16px]">
                                        تخفیف :
                                    </label>
                                    <input
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => Dispatch({ type: "SET_DISCOUNT", payload: Number(e.target.value) })}
                                        className=" 
                                        rounded-md p-2 border text-[12px] mb-2
                                        md:rounded-2xl md:p-4 md:text-[16px] md:mb-0"
                                        value={courseState?.discount} />
                                </div>

                            </div>

                        </section>

                        {/* Thumbnail */}

                        <section
                            className="
                            mt-3 rounded-[12px] border p-2
                            md:mt-7 md:rounded-[22px]  md:p-7">

                            <h3
                                className="
                            text-xl text-center mb-2 mt-2 font-MTNIrancell-Bold
                            md:text-2xl md:mb-5 md:text-right">
                                تصویر
                            </h3>

                            <img
                                className="
                                 rounded-xl h-[180px] object-fill w-full
                                 md:rounded-3xl md:h-[280px]"
                                src={courseState?.courseThumbnail} />
                            <input
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => Dispatch({ type: "SET_THUMBNAIL", payload: e.target.value })}
                                value={courseState?.courseThumbnail}
                                className=" 
                                        w-full mb-2 mt-2 rounded-md p-2 border text-[12px]
                                        md:rounded-2xl md:p-4 md:mb-0 md:text-[16px]" />

                        </section>

                        {/* Description */}

                        <section
                            className="
                            mt-2 rounded-[12px] border p-2
                            md:mt-7 md:rounded-[32px] md:p-7">

                            <h3
                                className="
                                text-xl text-center mt-2 mb-5 font-MTNIrancell-Bold
                                md:text-2xl md:text-right md:mt-0 md:mb-5">
                                توضیحات
                            </h3>

                            <textarea
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => Dispatch({ type: "SET_DESCRTPTION", payload: e.target.value })}
                                value={courseState?.courseDescription}
                                className="
                                 w-full h-[260px] rounded-xl border p-2
                                 md:rounded-3xl md:p-5" />

                        </section>

                        {/* Chapters */}

                        <section
                            className="
                            mt-2 rounded-[12px] border p-2
                            md:mt-7 md:rounded-[22px]  md:p-7">

                            <div>

                                <div
                                    className=" 
                                flex justify-between items-center ">

                                    <h3
                                        className="
                                    text-xl font-MTNIrancell-Bold
                                    md:text-2xl">
                                        ساختار دوره
                                    </h3>

                                    <button
                                        onClick={() => setShowAddChapter(true)}
                                        className="
                                        px-3 py-2 rounded-xl text-[14px] bg-cyan-600 text-white
                                        md:px-5 md:py-3 md:rounded-2xl md:text-[16px]">
                                        افزودن فصل
                                    </button>

                                </div>

                                <div className={`w-full grid transition-all mt-2 duration-200 ${showAddChapter ? " grid-rows-[1fr]" : " grid-rows-[0fr]"}`}>

                                    <div className=' overflow-hidden bg-gray-300 rounded-md  flex items-center '>

                                        <input
                                            value={newChapterTitle}
                                            className='w-full py-2 px-3 mt-2 bg-transparent outline-none'
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

                <div
                    className=" 
                 border-t px-1 py-2 flex justify-between items-center 
                 md:p-6 ">

                    <button
                        onClick={() => setShowModal(false)}
                        className=" 
                        px-3 py-2 rounded-xl border
                        md:px-7 md:py-4 md:rounded-2xl">
                        انصراف
                    </button>




                    {loading ? (
                        <div
                            className=" w-10 h-10 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin">

                        </div>
                    ) : (
                        <button
                            onClick={saveChangeHandler}
                            className=" 
                            px-3 py-2 rounded-xl bg-cyan-600 text-white
                            md:px-7 md:py-4">
                            ذخیره تغییرات
                        </button>
                    )}



                </div>

            </div>

        </div>
        ,
        document.body

    )

}

export default EditCourseModal