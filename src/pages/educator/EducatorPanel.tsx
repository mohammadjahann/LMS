import { FaBookOpen, FaGraduationCap, FaMoneyBillWave } from "react-icons/fa"
import { useEffect, useMemo, useState } from "react"
import RecentlyStudents from "../../components/educator/RecentlyStudents"
import EducatorPanelBox from "../../components/educator/EducatorPanelBox"
import useEducatorAuth from "../../hooks/useEducatorAuth"
import PanelChart from "../../components/educator/PanelChart"
import { supabase } from "../../supabase"
import DetailsCard from "../../components/educator/DetailsCard"

type StatsTypes = {
    courseCount: number,
    income: number,
    studentCount: number
}

const EducatorPanel = () => {

    const [statsData, setStatsData] = useState<StatsTypes>({
        courseCount: 0,
        income: 0,
        studentCount: 0
    })

    const { educatorData, enrollmentsData } = useEducatorAuth()

    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        if (!educatorData || !enrollmentsData) return;

        const courseCount = educatorData.courses.length

        const getStudentCount = async (): Promise<number> => {
            try {
                const { count, error } = await supabase
                    .from("enrollments")
                    .select("*", {
                        count: "exact",
                        head: true,
                    })
                    .in("course_id", educatorData.courses);

                if (error) throw error;

                return count ?? 0;

            } catch (error) {
                console.error(error);
                return 0;
            }
        };

        const incomeCalculator = () => {

            let total = 0

            enrollmentsData.forEach(enrollment => {
                total += +enrollment.cost
            })

            return total
        }

        const income = incomeCalculator()


        const updateStats = async () => {
            const studentCount = await getStudentCount();

            setStatsData({
                courseCount,
                studentCount,
                income,
            });
        };

        updateStats();


    }, [educatorData, enrollmentsData])

    const bestSellingCourse = useMemo(() => {

        if (!enrollmentsData) return;

        const courseSellCounter: { courseTitle: string, total: number }[] = []

        enrollmentsData.forEach(enroll => {

            const foundedCourse = courseSellCounter.find(item => item.courseTitle === enroll.course_title)

            if (!foundedCourse) {

                courseSellCounter.push({ courseTitle: enroll.course_title, total: 1 })

            } else {
                foundedCourse.total += 1

            }

        })

        return courseSellCounter.sort((a, b) => b.total - a.total)[0].courseTitle

    }, [enrollmentsData])

    return (
        <div className="w-full dir">

            {/* Header */}
            <div
                className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">

                <div>

                    <h1
                        className="text-xl md:text-3xl font-MTNIrancell-Bold text-slate-800">
                        داشبورد مدرس
                    </h1>

                    <p
                        className=" text-slate-500 mt-2">
                        خلاصه عملکرد دوره‌ها
                    </p>

                </div>

            </div>

            {/* Stats */}
            <div
                className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">

                <EducatorPanelBox
                    styles="bg-cyan-50 border-cyan-100"
                    title=" تعداد کل دانشجو"
                    data={statsData.studentCount}
                >
                    <FaGraduationCap
                        size={30}
                        className="text-cyan-600"
                    />
                </EducatorPanelBox>

                <EducatorPanelBox
                    styles="bg-emerald-50 border-emerald-100"
                    title="درآمد ماه اخیر"
                    data={statsData.income.toLocaleString('fa-IR')}
                >
                    <FaMoneyBillWave
                        size={30}
                        className="text-emerald-600"
                    />
                </EducatorPanelBox>
                <EducatorPanelBox
                    styles="bg-violet-50 border-violet-100"
                    title=" تعداد دوره‌ها"
                    data={statsData.courseCount}
                >
                    <FaBookOpen
                        size={30}
                        className="text-violet-600"
                    />
                </EducatorPanelBox>




            </div>

            {/* Chart */}
            <PanelChart />

            {/* Bottom */}
            {/* <PanelBottom /> */}
            <div className="w-full dir mt-6 font-MTNIrancell-Medium ">
                <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-5">

                    <RecentlyStudents />

                    <div
                        className="flex flex-col gap-5">

                        <DetailsCard content={bestSellingCourse} contentStyles="text-[16px]" title="پر فروش ترین دوره" styles="bg-white text-black" />

                        <DetailsCard content="2" title="میانگین خرید هر دانشجو" styles="from-cyan-600 to-blue-600 text-white" />

                    </div>
                </div>

            </div>

        </div>
    )
}

export default EducatorPanel