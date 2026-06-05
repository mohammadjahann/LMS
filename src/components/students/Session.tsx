import { useState } from "react";
import { assets } from "../../assets/assets";
import type { ChapterContent, CourseContent } from "../../Types";
import { useAppContext } from "../../context/useAppContext"
import Lecture from "./Lecture";

type Props = {
    chapter: CourseContent,
    getLectureData: (lectureData: ChapterContent) => void,
    isEnrolled: boolean;
}

const Session = ({ chapter, getLectureData, isEnrolled }: Props) => {

    const [showLecture, setShowLecture] = useState<boolean>(false)

    const { humanizeTime, chapterDurationCalculator } = useAppContext()


    return (
        <div
            className=" w-full overflow-hidden">
            <div
                className={` flex flex-row-reverse z-10 items-center justify-between gap-4 w-full border border-gray-300 bg-white mb-2 rounded px-2`}>

                <div
                    onClick={() => setShowLecture(prev => !prev)}
                    className=" flex flex-row-reverse gap-2 cursor-pointer items-center justify-between px-4 py-3 select-none">
                    <img

                        className={`rotate-0 ${showLecture ? ' rotate-180' : ''} transition-transform duration-300`}
                        src={assets.down_arrow_icon} alt="arrow" />
                    <p
                        className=" font-medium text-sm md:text-base">
                        {chapter.chapterTitle}
                    </p>
                </div>

                <p
                    style={{ direction: 'rtl', textAlign: 'right' }}
                    className="flex flex-row-reverse text-sm md:text-default">
                    <span className=" text-right"> تعداد قسمت ها: {chapter.chapterContent.length} </span>
                    ,
                    <span >{humanizeTime(chapterDurationCalculator(chapter.chapterContent))}</span>
                </p>



            </div>
            <div
                className={`grid transition-all duration-300 ease-in-out ${showLecture ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div
                    className={`overflow-hidden transition-all duration-300 ${showLecture ? 'opacity-100' : 'opacity-0'}`}>
                    {/* lectures */}
                    {chapter.chapterContent.map(lecture => <Lecture isEnrolled={isEnrolled} key={lecture.lectureId} lectureData={lecture} getLectureData={getLectureData} />)}
                </div>
            </div>



        </div>
    )
}

export default Session