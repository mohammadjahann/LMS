import { FiEdit3 } from 'react-icons/fi'
import type { CourseContent } from '../../Types'

type Props = {
    chapter: CourseContent
}

const EditCourseChapter = ({ chapter }: Props) => {



    return (
        <div key={chapter.chapterId} className=" mt-6 flex flex-col gap-4">

            <div className=" rounded-3xl border p-5">

                <div className=" flex justify-between">

                    <h4>
                        {chapter.chapterTitle}
                    </h4>

                    <FiEdit3 />
                </div>

                <div className="mt-4 space-y-3 ">

                    {chapter.chapterContent.map(lecture => (
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
                    ))}

                </div>

            </div>

        </div>
    )
}

export default EditCourseChapter