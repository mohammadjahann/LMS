import { FiEdit3 } from 'react-icons/fi'
import type { CourseContent } from '../../Types'
import EditCourseLecture from './EditCourseLecture'
import { FaTrashCan } from "react-icons/fa6";
import useEditCourseContext from '../../hooks/useEditCourseContext';
import React, { useEffect, useState } from 'react';
import { MdFileDownloadDone } from 'react-icons/md';

type Props = {
    chapter: CourseContent
}

const EditCourseChapter = ({ chapter }: Props) => {

    const [showEditName, setShowEditName] = useState<boolean>(false)

    const { Dispatch, showModal } = useEditCourseContext()

    useEffect(() => {
        if (!showModal) {

            // eslint-disable-next-line
            setShowEditName(false)
        }
    }, [showModal])

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
                        <EditCourseLecture key={lecture.lectureId} lecture={lecture} />
                    ))}

                </div>

            </div>

        </div>
    )
}

export default EditCourseChapter