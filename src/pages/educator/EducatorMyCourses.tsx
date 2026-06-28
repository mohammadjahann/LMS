import { useEffect, useMemo, useState } from 'react'
import EditCourseModal from '../../components/educator/EditCourseModal'
import EducatorCourseCard from '../../components/educator/EducatorCourseCard'
import useEducatorAuth from '../../hooks/useEducatorAuth'
import { supabase } from '../../supabase'
import type { CourseType } from '../../Types'

const EducatorMyCourses = () => {

    const [courses, setCourses] = useState<CourseType[]>([])

    const { educatorData, ratingCalculator } = useEducatorAuth()

    useEffect(() => {
        const fetcher = async () => {

            if (!educatorData) return;

            try {
                const { data, error } = await supabase
                    .from("courses")
                    .select("*")
                    .in("_id", educatorData.courses)

                if (error) throw error;

                setCourses(data)



            } catch (error) {

                console.log(error);

            }
        }

        fetcher()

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [educatorData])


    const statsData = useMemo(() => {

        if (courses.length === 0) return null


        const publishedcourses = courses.filter(course => course.isPublished)

        const allrates: number[] = []

        publishedcourses.forEach(course => {

            const rate = ratingCalculator(course.courseRatings)

            allrates.push(rate)

        })



        const calculateAvrage = () => {

            let totalRate = 0

            for (let i = 0; i <= allrates.length - 1; i++) {
                totalRate += allrates[i]
            }

            return totalRate / allrates.length
        }

        const avreageRate = calculateAvrage().toFixed(2)

        return { publishedCount: publishedcourses.length, avreageRate }

    }, [courses, ratingCalculator])

    return (
        <>
            <div className="dir min-h-screen">

                {/* Header */}

                <div className="mb-8">

                    <h1
                        className="text-3xl font-MTNIrancell-Bold text-slate-800">
                        دوره‌های من
                    </h1>

                    <p
                        className="mt-2 text-slate-500">
                        مدیریت، ویرایش و بررسی عملکرد دوره‌ها
                    </p>

                </div>

                {/* Stats */}

                <div
                    className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8 ">

                    <div className="rounded-3xl bg-cyan-50 p-5 border border-cyan-100">

                        <p className="text-slate-500">
                            تعداد دوره‌ها
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-cyan-700">
                            {educatorData?.courses.length}
                        </h3>

                    </div>

                    <div className="rounded-3xl bg-blue-50 p-5 border">

                        <p className="text-slate-500">
                            منتشر شده
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-blue-700">
                            {statsData?.publishedCount ?? 0}
                        </h3>

                    </div>

                    <div className="rounded-3xl bg-emerald-50 p-5 border">

                        <p className="text-slate-500">
                            دانشجو
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-emerald-700">
                            ۲۳۴
                        </h3>

                    </div>

                    <div className="rounded-3xl bg-amber-50 p-5 border">

                        <p className="text-slate-500">
                            میانگین امتیاز
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-amber-700">
                            {statsData?.avreageRate ?? 0.0}
                        </h3>

                    </div>

                </div>


                {/* Courses */}

                <div
                    className=" grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {educatorData?.courses.map((course) => (
                        <EducatorCourseCard
                            key={course}
                            courseID={course}
                        />
                    ))}

                </div>

            </div>

            <EditCourseModal />
        </>
    )
}

export default EducatorMyCourses