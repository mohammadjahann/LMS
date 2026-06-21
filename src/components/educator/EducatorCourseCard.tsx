import { useEffect, useMemo, useState } from "react"

import {
    FiEdit,
    FiUsers,
    FiClock,
    FiBookOpen,
    FiStar,
    FiAlertTriangle
} from "react-icons/fi"
import { supabase } from "../../supabase"
import type { CourseType } from "../../Types"
import useEducatorAuth from "../../hooks/useEducatorAuth"
import useEditCourseContext from "../../hooks/useEditCourseContext"

type Props = {
    courseID: string
}

const EducatorCourseCard = ({ courseID }: Props) => {

    const [courseData, setCourseData] = useState<CourseType | null>(null)

    const { Dispatch, setShowModal } = useEditCourseContext()

    const { enrollmentsData, courseDurationCalculator, lectureCountCalculator, ratingCalculator } = useEducatorAuth()

    const enrollmentCount = useMemo(() => {

        let total = 0

        enrollmentsData?.forEach(enroll => {

            if (enroll.course_id == courseID) total += 1
        })

        return total
    }, [enrollmentsData])



    const getCourseData = async () => {

        try {

            const { data, error } = await supabase
                .from('courses')
                .select('*')
                .eq('_id', courseID)
                .single()

            if (error) throw error
            setCourseData(data)


        } catch (error) {

            console.log(error);
            setCourseData(null)


        }

    }

    useEffect(() => {

        getCourseData()
    }, [])


    const handleEditBtn = () => {

        if (!courseData) return;

        Dispatch({ type: "SET_DATA", payload: courseData })
        setShowModal(true)

    }



    return !courseData ? (
        <div
            className="overflow-hidden rounded-[34px] border bg-white p-10 flex flex-col items-center justify-center text-center">

            {/* Icon */}

            <div
                className="w-24 h-24 rounded-3xl bg-red-50 flex items-center justify-center">

                <FiAlertTriangle
                    size={42}
                    className="text-red-500"
                />

            </div>

            {/* Title */}

            <h2
                className="mt-6 text-2xl font-MTNIrancell-Bold text-slate-800">

                خطا در دریافت اطلاعات دوره

            </h2>

            {/* Description */}

            <p
                className="mt-3 text-slate-500 max-w-sm">

                مشکلی هنگام دریافت اطلاعات به وجود آمد.
                لطفاً اتصال اینترنت را بررسی کرده و دوباره تلاش کنید.

            </p>

            {/* Actions */}

            <div
                className="mt-8 flex gap-4">

                <button
                    onClick={getCourseData}
                    className="px-6 py-3 rounded-2xl bg-cyan-700 text-white hover:scale-[1.03] transition">

                    تلاش مجدد

                </button>

                <button

                    className="px-6 py-3 rounded-2xl border hover:bg-slate-50">

                    بازگشت

                </button>

            </div>

        </div>
    ) : (<div
        className=" group overflow-hidden rounded-[34px] border bg-white hover:shadow-2xl transition font-MTNIrancell-Medium">

        {/* Thumbnail */}

        <div className="relative">

            <img
                className="h-[220px] w-full object-cover"
                src={courseData.courseThumbnail ?? "https://placehold.co/1200x600"}
                alt=""
            />

            <button
                onClick={handleEditBtn}
                className=" absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center hover:scale-110 transition ">
                <FiEdit
                    size={20}
                    className="text-cyan-700"
                />
            </button>

            <div
                className={`absolute right-4 top-4 px-4 py-2 rounded-full  text-white ${courseData.isPublished ? 'bg-emerald-500' : 'bg-red-500'}`}>
                {courseData.isPublished ? 'منتشر شده' : 'درحال توسعه'}
            </div>

        </div>

        {/* Content */}

        <div className="p-6">

            <h3
                className="text-2xl font-MTNIrancell-Bold text-slate-800 text-right" dir="ltr">
                {courseData.courseTitle}
            </h3>

            <p
                className="mt-3  text-slate-500 line-clamp-2 " dangerouslySetInnerHTML={{ __html: courseData.courseDescription }} >

            </p>

            {/* Stats */}

            <div
                className="mt-6 grid grid-cols-2 gap-4">

                <div
                    className=" rounded-2xl bg-cyan-50 p-4">

                    <FiUsers />

                    <p className="mt-3">
                        {enrollmentCount} دانشجو
                    </p>

                </div>

                <div
                    className="rounded-2xl bg-blue-50 p-4">

                    <FiBookOpen />

                    <p className="mt-3">
                        {lectureCountCalculator(courseData.courseContent)} جلسه
                    </p>

                </div>

                <div
                    className="rounded-2xl bg-amber-50 p-4">

                    <FiStar />

                    <p className="mt-3">
                        {ratingCalculator(courseData.courseRatings)}
                    </p>

                </div>

                <div
                    className=" rounded-2xl bg-emerald-50  p-4">

                    <FiClock />

                    <p className="mt-3">
                        {courseDurationCalculator(courseData.courseContent)}
                    </p>

                </div>

            </div>

            {/* Footer */}

            <div
                className="mt-6 pt-5 border-t flex justify-between items-center">

                <span
                    className="text-2xl font-bold text-cyan-700">
                    {Number(courseData.coursePrice).toLocaleString('fa-IR')}
                </span>

                <button
                    onClick={handleEditBtn}
                    className=" px-5 py-3 rounded-2xl bg-slate-900 text-white hover:scale-[1.03] transition">
                    ویرایش دوره
                </button>

            </div>

        </div>

    </div>
    )



}

export default EducatorCourseCard