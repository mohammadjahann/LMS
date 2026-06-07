import { useState } from "react";
import type { Checkout, CourseType } from "../../Types";
import { useAppSelector } from "../../redux/student/hooks";
import { IoIosArrowDown } from "react-icons/io";
import { FaCalendarAlt, FaReceipt } from "react-icons/fa";

type Props = {
    checkoutData: Checkout;
};

const CheckoutBox = ({ checkoutData }: Props) => {

    const [showDetails, setShowDetails] = useState(false);

    const products = useAppSelector(
        state => state.productsData.products
    );

    const date = new Date(checkoutData.date);

    const coursesSet = new Set(checkoutData.courses);

    const boughtCoursesData: CourseType[] =
        products.filter(product =>
            coursesSet.has(product._id)
        );

    return (
        <div
            className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl overflow-hidden shadow-sm"
        >

            {/* Header */}

            <div
                onClick={() => setShowDetails(prev => !prev)}
                className="p-5 cursor-pointer hover:bg-slate-50 transition-all">

                <div
                    className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

                    <div
                        className="flex items-center gap-3">

                        <div
                            className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center">
                            <FaReceipt className="text-cyan-700" />
                        </div>

                        <div>

                            <h3
                                className="font-semibold text-slate-800">
                                فاکتور خرید
                            </h3>

                            <div
                                className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                                <FaCalendarAlt />
                                <span>
                                    {date.toLocaleDateString("fa-IR")}
                                </span>
                            </div>

                        </div>

                    </div>

                    <div
                        className="flex items-center gap-4" >

                        <span
                            className=" text-lg font-bold text-cyan-700">
                            {checkoutData.totalPrice.toLocaleString("fa-IR")}
                            {" "}
                            تومان
                        </span>

                        <IoIosArrowDown
                            size={20}
                            className={`transition-transform duration-300 ${showDetails ? "rotate-180" : ""}`} />

                    </div>

                </div>

            </div>

            {/* Details */}

            <div
                className={`grid transition-all duration-300 ${showDetails ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>

                <div className="overflow-hidden">

                    <div
                        className="p-5 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-4">

                        {boughtCoursesData.map(course => (

                            <div
                                key={course._id}
                                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col sm:flex-row">

                                <img
                                    src={course.courseThumbnail}
                                    alt={course.courseTitle}
                                    className=" w-full sm:w-40 h-40 sm:h-auto object-cover " />

                                <div
                                    className="p-4 flex flex-col justify-center">

                                    <h4
                                        className="font-semibold text-slate-800 mb-2">
                                        {course.courseTitle}
                                    </h4>

                                    <p
                                        className="text-slate-500 text-sm">
                                        مدرس:
                                        {" "}
                                        {course.educator}
                                    </p>

                                    <div
                                        className="mt-3 inline-flex w-fit px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs">
                                        خریداری شده
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CheckoutBox;