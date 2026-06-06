import useAuth from "../../hooks/useAuth";
import {
    FaUserCircle,
    FaPhoneAlt,
    FaGraduationCap,
    FaReceipt,
    FaUser
} from "react-icons/fa";

const OverallData = () => {

    const { userData } = useAuth();

    return (
        <div
            className="w-full h-full dir">

            {/* Header */}

            <div
                className="
                    flex flex-col md:flex-row items-center justify-between gap-5 mb-8">

                <div
                    className="flex items-center gap-4">

                    <div
                        className=" w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center">
                        <FaUserCircle
                            size={60}
                            className="text-cyan-700"
                        />
                    </div>

                    <div>

                        <h1
                            className="
                                text-xl
                                md:text-3xl
                                font-MTNIrancell-Bold
                                text-slate-800
                            "
                        >
                            {userData?.name} {userData?.family}
                        </h1>

                        <p
                            className="text-slate-500 text-[14px] md:text-[16px] mt-1">
                            به پنل کاربری خوش آمدید
                        </p>

                    </div>

                </div>

            </div>

            {/* Stats */}

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    xl:grid-cols-4
                    gap-4
                    mb-8
                "
            >

                <div
                    className="flex flex-col items-center bg-cyan-50 border border-cyan-100 rounded-3xl p-5" >
                    <FaGraduationCap
                        className="text-cyan-600 text-2xl"
                    />

                    <h3
                        className="
                            mt-3
                            text-slate-500
                        "
                    >
                        دوره‌های خریداری شده
                    </h3>

                    <p
                        className="
                            text-3xl
                            mt-2
                            font-bold
                            text-slate-800
                        "
                    >
                        {userData?.enrollments.length || 0}
                    </p>
                </div>

                <div
                    className=" flex flex-col items-center
                        bg-blue-50
                        border
                        border-blue-100
                        rounded-3xl
                        p-5
                    "
                >
                    <FaReceipt
                        className="text-blue-600 text-2xl"
                    />

                    <h3
                        className="
                            mt-3
                            text-slate-500
                        "
                    >
                        صورت حساب‌ها
                    </h3>

                    <p
                        className="
                            text-3xl
                            mt-2
                            font-bold
                            text-slate-800
                        "
                    >
                        {userData?.enrollments.length || 0}
                    </p>
                </div>

                <div
                    className="flex flex-col items-center
                        bg-emerald-50
                        border
                        border-emerald-100
                        rounded-3xl
                        p-5
                    "
                >
                    <FaUser
                        className="text-emerald-600 text-2xl"
                    />

                    <h3
                        className="
                            mt-3
                            text-slate-500
                        "
                    >
                        وضعیت حساب
                    </h3>

                    <p
                        className="
                            text-lg
                            mt-3
                            font-bold
                            text-emerald-600
                        "
                    >
                        فعال
                    </p>
                </div>

                <div
                    className=" flex flex-col items-center
                        bg-purple-50
                        border
                        border-purple-100
                        rounded-3xl
                        p-5
                    "
                >
                    <FaPhoneAlt
                        className="text-purple-600 text-2xl"
                    />

                    <h3
                        className="
                            mt-3
                            text-slate-500
                        "
                    >
                        شماره تماس
                    </h3>

                    <p
                        className="
                            text-lg
                            mt-2
                            font-bold
                            text-slate-800
                        "
                    >
                        {userData?.phone}
                    </p>
                </div>

            </div>

            {/* Personal Info */}

            <div
                className="
                    bg-white
                    rounded-3xl
                    border
                    border-slate-200
                    p-6
                    shadow-sm
                "
            >

                <h2
                    className="
                        text-xl
                        font-MTNIrancell-Bold
                        text-slate-800
                        mb-6
                    "
                >
                    اطلاعات حساب
                </h2>

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        gap-4
                    "
                >

                    <div
                        className="
                            bg-slate-50
                            rounded-2xl
                            p-4
                        "
                    >
                        <p className="text-slate-500 text-sm">
                            نام
                        </p>

                        <p
                            className="
                                mt-2
                                text-slate-800
                                font-medium
                            "
                        >
                            {userData?.name}
                        </p>
                    </div>

                    <div
                        className="
                            bg-slate-50
                            rounded-2xl
                            p-4
                        "
                    >
                        <p className="text-slate-500 text-sm">
                            نام خانوادگی
                        </p>

                        <p
                            className="
                                mt-2
                                text-slate-800
                                font-medium
                            "
                        >
                            {userData?.family}
                        </p>
                    </div>

                    <div
                        className="
                            bg-slate-50
                            rounded-2xl
                            p-4
                        "
                    >
                        <p className="text-slate-500 text-sm">
                            شماره تماس
                        </p>

                        <p
                            className="
                                mt-2
                                text-slate-800
                                font-medium
                            "
                        >
                            {userData?.phone}
                        </p>
                    </div>

                    <div
                        className="
                            bg-slate-50
                            rounded-2xl
                            p-4
                        "
                    >
                        <p className="text-slate-500 text-sm">
                            تعداد دوره‌ها
                        </p>

                        <p
                            className="
                                mt-2
                                text-slate-800
                                font-medium
                            "
                        >
                            {userData?.enrollments.length || 0}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default OverallData;