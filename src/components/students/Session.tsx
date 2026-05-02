import { useState } from "react";
import { assets } from "../../assets/assets";
import type { ChapterContent, CourseContent } from "../../Types";
import { useAppContext } from "../../context/useAppContext";
import { FaLock } from "react-icons/fa";

type Props = {
    chapter: CourseContent,
    getLectureData: (lectureData: ChapterContent) => void
}

const Session = ({ chapter, getLectureData }: Props) => {

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
                    {chapter.chapterContent.map(lecture => (
                        <div key={lecture.lectureId} className="w-full bg-white border border-r-gray-300 py-1 px-2">
                            <div className="flex items-center justify-end gap-2">
                                <span
                                    onClick={() => getLectureData(lecture)}
                                    className={`dir ${lecture.isPreviewFree && 'cursor-pointer'}`}>
                                    {lecture.lectureTitle}
                                </span>
                                {lecture.isPreviewFree ?
                                    <img src={assets.play_icon} alt="" className=" cursor-pointer" /> :
                                    <FaLock />
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    )
}

export default Session