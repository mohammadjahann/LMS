import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import useAuth from "../../hooks/useAuth";
import type { ChapterContent } from "../../Types";
import { FaLock } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

type Props = {
    lectureData: ChapterContent;
    getLectureData: (lectureData: ChapterContent) => void;
    isEnrolled: boolean;
};

const Lecture = ({
    lectureData,
    getLectureData,
    isEnrolled,
}: Props) => {

    const [isWatched, setIsWatched] = useState(false);

    const { userData } = useAuth();

    const { id } = useParams();

    useEffect(() => {

        if (!userData) return;
        if (!isEnrolled) return;

        const indexOfCourse =
            userData.enrollments.findIndex(
                product => product.courseID === id
            );

        if (indexOfCourse === -1) return;

        const watched =
            userData.enrollments[indexOfCourse]
                .watchedLecture
                .some(
                    lecture =>
                        lecture === lectureData.lectureId
                );

        // eslint-disable-next-line
        setIsWatched(watched);

    }, [lectureData, userData, id, isEnrolled]);

    return (
        <div
            className="flex flex-row-reverse items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 hover:bg-cyan-50 hover:border-cyan-200 transition-all">

            <div
                className="flex flex-row-reverse items-center gap-3">

                {lectureData.isPreviewFree ? (
                    <img
                        src={assets.play_icon}
                        alt="play"
                        className="cursor-pointer w-5 h-5" />
                ) : (
                    <FaLock className=" text-slate-400" />
                )}

                <span
                    onClick={() =>
                        getLectureData(lectureData)
                    }
                    className={`text-right text-slate-700 transition-colors ${lectureData.isPreviewFree ? "cursor-pointer hover:text-cyan-600" : "text-slate-500"}`}>
                    {lectureData.lectureTitle}
                </span>

            </div>

            {isWatched ? (
                <IoCheckmarkCircleOutline
                    size={22}
                    className="text-green-500 shrink-0" />
            ) : (
                <div className="w-[22px]" />
            )}

        </div>
    );
};

export default Lecture;