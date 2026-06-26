import { FiEdit3 } from "react-icons/fi"
import type { ChapterContent } from "../../Types"
import { MdOutlineDeleteOutline } from "react-icons/md"
import useEditCourseContext from "../../hooks/useEditCourseContext"
import React, { useReducer, useState } from "react"


type Props = {
    lecture: ChapterContent
    chapterID: string
}

type EditReducerStateTypes = {
    lectureTitle: string
    lectureUrl: string,
    lectureDuration: number,
    isPreviewFree: boolean,
}

type ActionTypes =
    { type: "SET_TITLE", payload: string }
    | { type: "SET_URL", payload: string }
    | { type: "SET_DURATION", payload: string }
    | { type: "SET_ISFREE", payload: string }
    | { type: "SET_CLEANUP" }

const EditCourseLecture = ({ lecture, chapterID }: Props) => {

    const [showEditModal, setShowEditModal] = useState<boolean>(false)

    const initialEditState = {
        lectureTitle: lecture.lectureTitle,
        lectureUrl: lecture.lectureUrl,
        lectureDuration: lecture.lectureDuration,
        isPreviewFree: lecture.isPreviewFree
    }

    const reducer = (state: EditReducerStateTypes, action: ActionTypes) => {

        switch (action.type) {

            case "SET_TITLE":

                return {
                    ...state,
                    lectureTitle: action.payload
                }

            case "SET_URL":

                return {
                    ...state,
                    lectureUrl: action.payload
                }

            case "SET_DURATION":

                return {
                    ...state,
                    lectureDuration: Number(action.payload)
                }

            case "SET_ISFREE":

                return {
                    ...state,
                    isPreviewFree: action.payload === 'free' ? true : false
                }

            case "SET_CLEANUP":
                return initialEditState

        }
    }

    const [editLectureState, editDispatch] = useReducer(reducer, initialEditState)

    const { Dispatch } = useEditCourseContext()

    const deleteBtnHandler = () => {

        Dispatch({ type: "SET_DELETE_LECTURE", payload: { chapterID: chapterID, LectureID: lecture.lectureId } })

    }



    return (
        <div key={lecture.lectureId} className=" rounded-2xl bg-slate-50 p-4 flex flex-col font-MTNIrancell-Medium">

            <div className="flex justify-between" >
                <span>
                    {lecture.lectureTitle}
                </span>

                <div
                    className="flex gap-4"
                >
                    <MdOutlineDeleteOutline
                        onClick={deleteBtnHandler}
                        className="text-red-500 cursor-pointer" />

                    <FiEdit3
                        className=" cursor-pointer"
                        onClick={() => setShowEditModal(prev => !prev)} />
                </div>
            </div>

            {/* Edit lecture modal */}

            <div className={`w-full grid transition-all duration-200 ${showEditModal ? ' grid-rows-[1fr]' : ' grid-rows-[0fr]'}`}>

                <div className=" w-full overflow-hidden mt-4">

                    <div className=" w-full bg-cyan-100 px-3 py-4 rounded-md border-black/20 border text-[14px] flex flex-col gap-3">

                        <div className="">
                            <label>عنوان جلسه :</label>
                            <input
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => editDispatch({ type: "SET_TITLE", payload: e.target.value })}
                                value={editLectureState.lectureTitle}
                                className=" text-[12px] mt-2 w-full px-3 py-2 bg-cyan-50 outline-none border border-black/15 rounded-md"
                                type="text" />

                        </div>
                        <div className="">
                            <label> URL :</label>
                            <input
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => editDispatch({ type: "SET_URL", payload: e.target.value })}
                                value={editLectureState.lectureUrl}
                                className=" font-sans text-[12px] mt-2 w-full px-3 py-2 bg-cyan-50 outline-none border border-black/15 rounded-md"
                                type="text" />

                        </div>

                        <div className=" grid grid-cols-1 gap-2 lg:grid-cols-[1fr_1fr] items-center">
                            <div className=" flex items-center justify-start gap-3">
                                <label> طول جلسه :</label>
                                <input
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => editDispatch({ type: "SET_DURATION", payload: e.target.value })}
                                    value={editLectureState.lectureDuration}
                                    className=" font-sans text-[12px] mt-2 w-8/12 px-3 py-2 bg-cyan-50 outline-none border border-black/15 rounded-md"
                                    type="text" />

                            </div>
                            <div className=" flex items-center gap-2 ">
                                <label>  آیا رایگان است :</label>
                                <select
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => editDispatch({ type: "SET_ISFREE", payload: e.target.value })}
                                    className="px-3 py-2 rounded-md"
                                    name="isfree">
                                    <option value="free">رایگان</option>
                                    <option value="non">غیر رایگان</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className=" bg-cyan-600 text-white px-2 py-3 hover:bg-cyan-700 rounded-md transition-all duration-150"
                                onClick={() => { Dispatch({ type: "SET_EDIT_LECTURE", payload: { chapterID: chapterID, LectureID: lecture.lectureId, updatedData: editLectureState } }); setShowEditModal(false) }}>
                                ذخیره تغیرات
                            </button>
                            <button
                                onClick={() => { setShowEditModal(false); editDispatch({ type: "SET_CLEANUP" }) }}
                                className=" bg-red-600 text-white px-2 py-3 hover:bg-red-700 rounded-md transition-all duration-150"
                            >
                                انصراف
                            </button>
                        </div>


                    </div>


                </div>

            </div>

        </div>
    )
}

export default EditCourseLecture