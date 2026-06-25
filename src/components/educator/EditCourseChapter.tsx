import { FiEdit3 } from 'react-icons/fi'
import type { CourseContent } from '../../Types'
import EditCourseLecture from './EditCourseLecture'
import { FaTrashCan } from "react-icons/fa6";
import useEditCourseContext from '../../hooks/useEditCourseContext';
import React, { useEffect, useReducer, useState } from 'react';
import { MdFileDownloadDone } from 'react-icons/md';
import { FaPlusCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

type Props = {
    chapter: CourseContent
}

type ReducerStateTypes = {
    lectureTitle: string,
    lectureDuration: number,
    lectureUrl: string,
    isPreviewFree: boolean
}

type ActionTypes =
    { type: "SET_TITLE", payload: string }
    | { type: "SET_URL", payload: string }
    | { type: "SET_ISFREE", payload: string }
    | { type: "SET_DURATION", payload: string }
    | { type: "SET_CLEANUP" }

const EditCourseChapter = ({ chapter }: Props) => {

    const [showEditName, setShowEditName] = useState<boolean>(false)
    const [showNewLectureModal, setShowNewLectureModal] = useState<boolean>(false)

    const initialreducerData: ReducerStateTypes = {
        lectureTitle: "",
        lectureDuration: 0,
        lectureUrl: "",
        isPreviewFree: false
    }

    const reducer = (state: ReducerStateTypes, action: ActionTypes) => {

        switch (action.type) {
            case "SET_TITLE":
                return {
                    ...state,
                    lectureTitle: action.payload,
                }

            case "SET_URL":

                return {
                    ...state,
                    lectureUrl: action.payload
                }

            case "SET_ISFREE": {

                const isFree = action.payload === 'free' ? true : false

                return {
                    ...state,
                    isPreviewFree: isFree
                }
            }
            case "SET_DURATION":

                return {
                    ...state,
                    lectureDuration: Number(action.payload)
                }


            case "SET_CLEANUP":
                return { ...initialreducerData }



        }




    }

    const [newLectureState, reducerDispatch] = useReducer(reducer, initialreducerData)

    const { Dispatch, showModal } = useEditCourseContext()

    useEffect(() => {
        if (!showModal) {

            // eslint-disable-next-line
            setShowEditName(false)
        }
    }, [showModal])

    const validator = () => {

        if (newLectureState.lectureDuration === 0 || newLectureState.lectureTitle.length < 5 || newLectureState.lectureUrl.length < 10) return false;

        return true

    }

    const addLectureHandler = () => {
        const isValid = validator()
        if (!isValid) {
            toast.warning('مقادیر را به طور کامل وارد کنید', {
                style: {
                    direction: "rtl"
                }
            })
            return
        }

        Dispatch({
            type: "SET_ADD_LECTURE", payload: {
                chapterID: chapter.chapterId,
                newLectureData: newLectureState
            }
        })

        reducerDispatch({ type: "SET_CLEANUP" })
        setShowNewLectureModal(false)




    }

    return (
        <div key={chapter.chapterId} className=" mt-6 flex flex-col gap-4">

            <div className=" rounded-3xl border p-5">

                <div className='flex flex-col w-full'>

                    <div className=" flex justify-between">

                        <h4>
                            {chapter.chapterTitle}
                        </h4>

                        <div className='flex gap-2'>
                            <FiEdit3
                                onClick={() => setShowEditName(true)}
                                className=' cursor-pointer' />
                            <FaTrashCan
                                onClick={() => Dispatch({ type: "SET_DELETE_CHAPTER", payload: chapter.chapterId })}
                                className=' cursor-pointer' />
                        </div>

                    </div>

                    <div
                        className={`w-full grid transition-all duration-200 ${showEditName ? " grid-rows-[1fr]" : ' grid-rows-[0fr]'}`}>

                        <div className=' overflow-hidden bg-gray-300 rounded-md mt-2 flex items-center px-2'>

                            <input
                                className='w-full py-2 px-3 bg-transparent outline-none'
                                type="text"
                                value={chapter.chapterTitle}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => Dispatch({ type: "SET_EDIT_CHAPTER", payload: { chapterID: chapter.chapterId, newTitle: e.target.value } })}
                            />

                            <MdFileDownloadDone
                                onClick={() => setShowEditName(false)}
                                className=' text-[18px] text-green-600 cursor-pointer' />

                        </div>

                    </div>

                </div>
                <div className="mt-4 space-y-3 ">

                    {chapter.chapterContent.map(lecture => (
                        <EditCourseLecture key={lecture.lectureId} lecture={lecture} chapterID={chapter.chapterId} />
                    ))}

                    {!showNewLectureModal && (
                        <div
                            onClick={() => setShowNewLectureModal(true)}
                            className=" rounded-2xl bg-slate-50 p-4 flex items-center gap-2 hover:bg-slate-200 cursor-pointer transition-all duration-200      ">

                            <FaPlusCircle className=' translate-y-[2px] text-green-500' />
                            <span>
                                افزودن جلسه جدید
                            </span>


                        </div>
                    )}

                    <div className={` w-full grid overflow-hidden transition-all duration-200 ${showNewLectureModal ? " grid-rows-[1fr]" : " grid-rows-[0fr]"}`}>

                        <div className=' overflow-hidden '>
                            <div className='bg-cyan-50  rounded-md py-2 px-3'>

                                <div className='flex gap-2 flex-wrap'>
                                    <div className=' flex flex-col gap-2 w-full'>

                                        <label>
                                            عنوان جلسه :
                                        </label>
                                        <input
                                            className='w-full px-3 py-2 rounded-md border'
                                            value={newLectureState.lectureTitle}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => reducerDispatch({ type: 'SET_TITLE', payload: e.target.value })}
                                            type="text" />

                                    </div>

                                    <div className=' flex flex-col gap-2 w-full'>

                                        <label>
                                            URL :
                                        </label>
                                        <input
                                            className='w-full px-3 py-2 rounded-md border'
                                            value={newLectureState.lectureUrl}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => reducerDispatch({ type: "SET_URL", payload: e.target.value })}
                                            type="text" />

                                    </div>

                                    <div className='w-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-3'>
                                        <div className=' flex items-center gap-4'>
                                            <label>آیا رایگان است</label>
                                            <select
                                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => reducerDispatch({ type: "SET_ISFREE", payload: e.target.value })}
                                                className=' px-2 py-2 rounded-md outline-none'
                                                name="isfree">
                                                <option value="free">رایگان</option>
                                                <option selected value="non">غیر رایگان</option>
                                            </select>
                                        </div>

                                        <div className='grid grid-cols-[1fr_4fr] lg:grid-cols-[1fr_7fr] justify-center items-center gap-2'>
                                            <label>مدت جلسه :</label>
                                            <input
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => reducerDispatch({ type: "SET_DURATION", payload: e.target.value })}
                                                className='w-full px-3 py-2 rounded-md border'
                                                type="text" />
                                        </div>



                                    </div>
                                    <div className=' w-full flex justify-between mt-3'>

                                        <button
                                            onClick={() => addLectureHandler()}
                                            className=' px-3 py-2 bg-green-400 text-white rounded-md hover:bg-green-600 transition-all duration-150'>
                                            افزودن جلسه جدید
                                        </button>
                                        <button
                                            onClick={() => setShowNewLectureModal(false)}
                                            className=' px-3 py-2 bg-red-400 text-white rounded-md hover:bg-red-600 transition-all duration-150'>
                                            لغو
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default EditCourseChapter