import { FiEdit3 } from 'react-icons/fi'
import type { CourseContent } from '../../Types'
import EditCourseLecture from './EditCourseLecture'
import { FaTrashCan } from "react-icons/fa6";
import useEditCourseContext from '../../hooks/useEditCourseContext';

type Props = {
    chapter: CourseContent
}

const EditCourseChapter = ({ chapter }: Props) => {


    const { Dispatch } = useEditCourseContext()

    return (
        <div key={chapter.chapterId} className=" mt-6 flex flex-col gap-4">

            <div className=" rounded-3xl border p-5">

                <div className=" flex justify-between">

                    <h4>
                        {chapter.chapterTitle}
                    </h4>

                    <div className='flex gap-2'>
                        <FiEdit3 className=' cursor-pointer' />
                        <FaTrashCan
                            onClick={() => Dispatch({ type: "SET_DELETE_CHAPTER", payload: chapter.chapterId })}
                            className=' cursor-pointer' />
                    </div>
                </div>

                <div className="mt-4 space-y-3 ">

                    {chapter.chapterContent.map(lecture => (
                        <EditCourseLecture lecture={lecture} />
                    ))}

                </div>

            </div>

        </div>
    )
}

export default EditCourseChapter