import { FiEdit3 } from "react-icons/fi"
import type { ChapterContent } from "../../Types"


type Props = {
    lecture: ChapterContent
}

const EditCourseLecture = ({ lecture }: Props) => {
    return (
        <div key={lecture.lectureId} className=" rounded-2xl bg-slate-50 p-4 flex justify-between">

            <span>
                {lecture.lectureTitle}
            </span>

            <div
                className="flex gap-4"
            >

                <FiEdit3 />
            </div>

        </div>
    )
}

export default EditCourseLecture