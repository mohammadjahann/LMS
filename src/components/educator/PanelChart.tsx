import { FaChartLine } from "react-icons/fa";
import PanelAreaChart from "./PanelAreaChart";
import PanelPieChart from "../PanelPieChart";

const PanelChart = () => {

    return (

        <div className="flex flex-col gap-4  bg-slate-50 rounded-xl shadow-md font-MTNIrancell-Bold p-2">

            <div className=" flex gap-2">
                <div
                    className=" w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center">
                    <FaChartLine className="text-cyan-700" />

                </div>
                <div>

                    <h3
                        className=" text-xl font-MTNIrancell-Bold text-slate-800">
                        نمودار فروش
                    </h3>

                    <p
                        className="text-sm text-slate-500 mt-1">
                        روند درآمد دوره‌ها
                    </p>

                </div>
            </div>



            <div className="w-full flex items-center justify-center flex-col lg:flex-row ">

                <PanelAreaChart />
                <PanelPieChart />


            </div>
        </div>
    );
};

export default PanelChart;