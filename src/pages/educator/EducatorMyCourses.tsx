import EditCourseModal from '../../components/educator/EditCourseModal'
import EducatorCourseCard from '../../components/educator/EducatorCourseCard'
import useEducatorAuth from '../../hooks/useEducatorAuth'

const EducatorMyCourses = () => {

    const { educatorData } = useEducatorAuth()

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
                            ۱۲
                        </h3>

                    </div>

                    <div className="rounded-3xl bg-blue-50 p-5 border">

                        <p className="text-slate-500">
                            منتشر شده
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-blue-700">
                            ۹
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
                            ۴.۸
                        </h3>

                    </div>

                </div>

                {/* Actions */}

                <div
                    className="mb-8 bg-white rounded-[30px] border p-5 flex flex-col lg:flex-row gap-4 justify-between">

                    <input
                        placeholder="جستجو در دوره‌ها..."
                        className=" flex-1 rounded-2xl border p-4 outline-none focus:border-cyan-500 " />

                    <div
                        className="flex gap-3">

                        <select
                            className="rounded-2xl border px-5">

                            <option>
                                همه
                            </option>

                        </select>

                        <button
                            className=" px-6 rounded-2xl bg-cyan-600 text-white">
                            افزودن دوره
                        </button>

                    </div>

                </div>

                {/* Courses */}

                <div
                    className=" grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {educatorData?.courses.map((course, index) => (
                        <EducatorCourseCard
                            key={index}
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