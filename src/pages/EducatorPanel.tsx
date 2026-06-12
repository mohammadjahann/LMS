import { FaBookOpen, FaGraduationCap, FaMoneyBillWave } from "react-icons/fa"
import EducatorPanelBox from "../components/educator/EducatorPanelBox"


const EducatorPanel = () => {

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
                    data={0}
                >
                    <FaGraduationCap
                        size={30}
                        className="text-cyan-600"
                    />
                </EducatorPanelBox>

                <EducatorPanelBox
                    styles="bg-emerald-50 border-emerald-100"
                    title="درآمد ماه اخیر"
                    data={0}
                >
                    <FaMoneyBillWave
                        size={30}
                        className="text-emerald-600"
                    />
                </EducatorPanelBox>
                <EducatorPanelBox
                    styles="bg-violet-50 border-violet-100"
                    title=" تعداد دوره‌ها"
                    data={0}
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