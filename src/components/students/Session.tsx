import { useState } from "react";
import { assets } from "../../assets/assets";
import type { ChapterContent, CourseContent } from "../../Types";
import { useAppContext } from "../../context/useAppContext";
import Lecture from "./Lecture";

type Props = {
    chapter: CourseContent;
    getLectureData: (lectureData: ChapterContent) => void;
    isEnrolled: boolean;
};

const Session = ({
    chapter,
    getLectureData,
    isEnrolled,
}: Props) => {

    const [showLecture, setShowLecture] = useState(false);

    const {
        humanizeTime,
        chapterDurationCalculator,
    } = useAppContext();

    return (
        <div
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div
                onClick={() => setShowLecture(prev => !prev)}
                className="flex flex-row-reverse items-center justify-between px-5 py-4 cursor-pointer select-none hover:bg-slate-50 transition-all">

                <div className="flex flex-row-reverse items-center gap-3">

                    <img
                        src={assets.down_arrow_icon}
                        alt="arrow"
                        className={`transition-transform duration-300 ${showLecture ? "rotate-180" : ""}`} />

                    <div className="text-right">
                        <h3
                            className="font-MTNIrancell-Bold text-slate-800">
                            {chapter.chapterTitle}
                        </h3>

                        <p
                            className=" text-xs text-slate-500 mt-1">
                            {chapter.chapterContent.length} جلسه
                        </p>
                    </div>

                </div>

                <div
                    className="dir bg-cyan-50 border border-cyan-100 px-3 py-2 rounded-xl text-sm text-slate-600">
                    {humanizeTime(
                        chapterDurationCalculator(
                            chapter.chapterContent
                        )
                    )}
                </div>

            </div>

            <div
                className={`grid transition-all duration-300 ${showLecture ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>

                <div className="overflow-hidden">

                    <div
                        className="px-3 pb-3 flex flex-col gap-2">
                        {chapter.chapterContent.map(lecture => (
                            <Lecture
                                key={lecture.lectureId}
                                lectureData={lecture}
                                getLectureData={getLectureData}
                                isEnrolled={isEnrolled}
                            />
                        ))}
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Session;