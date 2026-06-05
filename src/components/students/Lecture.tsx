import { useEffect, useState } from "react";
import { assets } from "../../assets/assets"
import useAuth from "../../hooks/useAuth";
import type { ChapterContent } from "../../Types"
import { FaLock } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

type Props = {
    lectureData: ChapterContent,
    getLectureData: (lectureData: ChapterContent) => void,
    isEnrolled: boolean
}

const Lecture = ({ lectureData, getLectureData, isEnrolled }: Props) => {

    const [isWatched, setIsWatched] = useState(false)

    const { userData } = useAuth()

    const { id } = useParams()

    useEffect(() => {
        if (!userData) return;
        if (!isEnrolled) return;

        const indexOfCourse = userData?.enrollments.findIndex(product => product.courseID === id)

        const isLectureWatched = userData?.enrollments[indexOfCourse].watchedLecture.some(lecture => lectureData.lectureId === lecture)
        // eslint-disable-next-line
        setIsWatched(isLectureWatched)


    }, [lectureData, userData])

    return (
        <div key={lectureData.lectureId} className="w-full bg-white border border-r-gray-300 py-1 px-2">
            <div className="flex flex-row-reverse items-center justify-between gap-2">
                <div
                    className="flex items-center justify-end gap-2">
                    <span
                        onClick={() => getLectureData(lectureData)}
                        className={`dir ${lectureData.isPreviewFree && 'cursor-pointer'}`}>
                        {lectureData.lectureTitle}
                    </span>
                    {lectureData.isPreviewFree ?
                        <img src={assets.play_icon} alt="" className=" cursor-pointer" /> :
                        <FaLock />
                    }
                </div>
                {isWatched ? <IoCheckmarkCircleOutline /> : <div className="w-2 h-1"></div>}
            </div>
        </div>
    )
}

export default Lecture