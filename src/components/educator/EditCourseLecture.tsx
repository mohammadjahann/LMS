import { FiEdit3 } from "react-icons/fi"
import type { ChapterContent } from "../../Types"
import { MdOutlineDeleteOutline } from "react-icons/md"
import useEditCourseContext from "../../hooks/useEditCourseContext"


type Props = {
    lecture: ChapterContent
    chapterID: string
}

const EditCourseLecture = ({ lecture, chapterID }: Props) => {

    const { Dispatch } = useEditCourseContext()

    const deleteBtnHandler = () => {

        Dispatch({ type: "SET_DELETE_LECTURE", payload: { chapterID: chapterID, LectureID: lecture.lectureId } })

    }

    return (
        <div key={lecture.lectureId} className=" rounded-2xl bg-slate-50 p-4 flex justify-between">

            <span>
                {lecture.lectureTitle}
            </span>

            <div
                className="flex gap-4"
            >
                <MdOutlineDeleteOutline
                    onClick={deleteBtnHandler}
                    className="text-red-500 cursor-pointer" />

                <FiEdit3 />
            </div>

        </div>
    )
}

export default EditCourseLecture