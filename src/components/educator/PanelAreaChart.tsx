import { useEffect, useState } from "react";
import {
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    AreaChart,
} from "recharts";
import useEducatorAuth from "../../hooks/useEducatorAuth";

const PanelAreaChart = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [data, setData] = useState<{ date: string; total: number }[]>([])
    const { enrollmentsData } = useEducatorAuth()


    const genrateChartData = () => {

        if (!enrollmentsData) return;

        const datas: { timestamp: number; total: number }[] = [];

        enrollmentsData.forEach((enrollment) => {

            const isInData = datas.find(
                item =>
                    new Date(item.timestamp).toLocaleDateString() ===
                    new Date(enrollment.timestamp).toLocaleDateString()
            );

            if (!isInData) {
                datas.push({
                    timestamp: enrollment.timestamp,
                    total: Number(enrollment.cost),
                });
            } else {

                const index = datas.findIndex(
                    item =>
                        new Date(item.timestamp).toLocaleDateString() ===
                        new Date(enrollment.timestamp).toLocaleDateString()
                );

                datas[index].total += Number(enrollment.cost);
            }
        });

        datas.sort((a, b) => a.timestamp - b.timestamp)

        setData(
            datas.map(item => ({
                date: new Date(item.timestamp).toLocaleDateString("fa-IR"),
                total: item.total,
            }))
        );
    };

    useEffect(() => {


        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkMobile();

        // eslint-disable-next-line
        genrateChartData()

        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);

    }, [enrollmentsData]);



    return (

        data.length === 0 ? (
            <h4 dir="ltr">LOADING ....</h4>
        ) : (
            <div className="w-full h-[400px]" dir="ltr">
                <ResponsiveContainer width="95%" height="95%">
                    <AreaChart
                        data={data}
                        className="md:p-3"
                        margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                    >

                        <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22d3ee" stopOpacity={1} />
                                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <XAxis dataKey="date" tick={{ fontSize: 10 }} />

                        <YAxis
                            className=" font-MTNIrancell-Bold"
                            tickFormatter={(value) => value.toLocaleString("fa-IR")}
                            domain={['auto', 'auto']}
                            width={isMobile ? 0 : 40}
                            hide={isMobile}
                            tick={{ fontSize: 8, dx: -5 }}
                        />

                        <Tooltip formatter={(value) => value?.toLocaleString("fa-IR")} />

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />

                        <Area
                            type="monotone"
                            dataKey="total"
                            stroke="#0891b2"
                            strokeWidth={3}
                            fill="url(#colorPrice)"
                            fillOpacity={0.3}
                            dot={false}
                        />

                    </AreaChart>
                </ResponsiveContainer>
            </div>
        )

    )
}

export default PanelAreaChart