import { FaBookOpen, FaGraduationCap, FaMoneyBillWave } from "react-icons/fa"
import EducatorPanelBox from "../components/educator/EducatorPanelBox"
import { useEffect, useState } from "react"
import useEducatorAuth from "../hooks/useEducatorAuth"
import { supabase } from "../supabase"

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
        if (!educatorData || !enrollmentsData) return;

        const courseCount = educatorData.courses.length

        const getStudentCount = async () => {

            try {
                const { count, error } =
                    await supabase
                        .from("enrollments")
                        .select("*", {
                            count: "exact",
                            head: true
                        })
                        .in("course_id", educatorData.courses)
                if (error) throw error;

                return count

            } catch (error) {
                console.log(error);
                return 0

            }
        }

        const studentCount = getStudentCount()

        const incomeCalculator = () => {

            let total = 0

            enrollmentsData.forEach(enrollment => {
                total += +enrollment.cost
            })

            return total
        }

        const income = incomeCalculator()

        // eslint-disable-next-line
        setStatsData(prev => {

            return {
                courseCount,
                studentCount,
                income
            }
        })


    }, [educatorData, enrollmentsData])

    return (
        <div className="w-full dir">

            {/* Header */}
            <div
                className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">

                <div>

                    <h1
                        className="text-3xl font-MTNIrancell-Bold text-slate-800">
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


        </div>
    )
}

export default EducatorPanel