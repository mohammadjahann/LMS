import {
    FiEdit,
    FiUsers,
    FiClock,
    FiBookOpen,
    FiStar
} from "react-icons/fi"

const EducatorCourseCard = () => {

    return (

        <div
            className=" group overflow-hidden rounded-[34px] border bg-white hover:shadow-2xl transition">

            {/* Thumbnail */}

            <div className="relative">

                <img
                    className="h-[220px] w-full object-cover"
                    src="https://static.roocket.ir/images/cover/2025/8/30/Xpi398GYbfXijbJ9xpRVvJm2XvifxUuo9C1nvQKx.jpg"
                    alt=""
                />

                <button
                    className=" absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center hover:scale-110 transition ">
                    <FiEdit
                        size={20}
                        className="text-cyan-700"
                    />
                </button>

                <div
                    className="absolute right-4 top-4 px-4 py-2 rounded-full bg-emerald-500 text-white">
                    منتشر شده
                </div>

            </div>

            {/* Content */}

            <div className="p-6">

                <h3
                    className="text-2xl font-MTNIrancell-Bold text-slate-800">
                    آموزش هوش مصنوعی برای برنامه نویسی
                </h3>

                <p
                    className="mt-3  text-slate-500 line-clamp-2 " >
                    یادگیری پروژه محور و ساخت چند پروژه واقعی.
                </p>

                {/* Stats */}

                <div
                    className="mt-6 grid grid-cols-2 gap-4">

                    <div
                        className=" rounded-2xl bg-cyan-50 p-4">

                        <FiUsers />

                        <p className="mt-3">
                            ۲۳ دانشجو
                        </p>

                    </div>

                    <div
                        className="rounded-2xl bg-blue-50 p-4">

                        <FiBookOpen />

                        <p className="mt-3">
                            ۱۲ جلسه
                        </p>

                    </div>

                    <div
                        className="rounded-2xl bg-amber-50 p-4">

                        <FiStar />

                        <p className="mt-3">
                            ۴.۸
                        </p>

                    </div>

                    <div
                        className=" rounded-2xl bg-emerald-50  p-4">

                        <FiClock />

                        <p className="mt-3">
                            ۱۴ ساعت
                        </p>

                    </div>

                </div>

                {/* Footer */}

                <div
                    className="mt-6 pt-5 border-t flex justify-between items-center">

                    <span
                        className="text-2xl font-bold text-cyan-700">
                        ۷۹.۹۹$
                    </span>

                    <button
                        className=" px-5 py-3 rounded-2xl bg-slate-900 text-white hover:scale-[1.03] transition">
                        ویرایش دوره
                    </button>

                </div>

            </div>

        </div>

    )
}

export default EducatorCourseCard