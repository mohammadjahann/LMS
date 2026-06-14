import {
    PieChart,
    Pie,
    Cell,

} from "recharts";
import useEducatorAuth from "../hooks/useEducatorAuth";
import { useEffect, useState } from "react";

const colors = [
    "#fdba74",
    "#bef264",
    "#6ee7b7",
    "#67e8f9",
];

const RADIAN = Math.PI / 180;

//Custom label for inner circle
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, courseName }: { cx: number, cy: number, midAngle: number, innerRadius: number, outerRadius: number, courseName: string }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor="middle"
            dominantBaseline="central"
            fontWeight="bold"
            fontSize={9}
            width={10}
        >
            {courseName}
        </text >
    );
};



const PanelPieChart = () => {

    const { enrollmentsData } = useEducatorAuth()
    const [pieData, setPieData] = useState<{ courseName: string, count: number }[]>([])


    useEffect(() => {

        const definedData: { courseName: string, count: number }[] = []

        enrollmentsData?.forEach(enroll => {
            const isInArray = definedData.find(item => item.courseName === enroll.course_title)

            if (!isInArray) {
                definedData.push({
                    courseName: enroll.course_title,
                    count: 1
                })
            } else {
                isInArray.count += 1
            }
        })

        // eslint-disable-next-line
        setPieData(definedData)


    }, [enrollmentsData])


    return (
        <div className="w-[40%] flex flex-col items-center">

            <h4>آمار فروش دوره ها</h4>

            <PieChart width={300} height={400}>


                {/* Inner circle */}
                <Pie
                    data={pieData}
                    dataKey="count"
                    cx="50%"
                    cy="50%"
                    innerRadius="10%"
                    outerRadius="80%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                >
                    {pieData.map((item, i) => (
                        <Cell
                            key={`inner-cell-${i}`}
                            fill={colors[i % colors.length]}
                        />
                    ))}
                </Pie>

                {/* Outer circle */}
                <Pie
                    data={pieData}
                    dataKey="count"
                    cx="50%"
                    cy="50%"
                    innerRadius="83%"
                    outerRadius="90%"
                    labelLine={{ stroke: '#bdc3c7', strokeWidth: 1.5 }}
                    label={{ fill: '#000000', fontWeight: 'bold', fontSize: '14px' }}
                >
                    {pieData.map((item, i) => (
                        <Cell
                            key={`outer-cell-${i}`}
                            fill={colors[i % colors.length]}
                            opacity={0.8}
                        />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default PanelPieChart;