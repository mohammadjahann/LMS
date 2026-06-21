
import { createPortal } from "react-dom";
import { FiX, FiEdit3, FiPlayCircle, FiLock } from "react-icons/fi";


const EditCourseModal = () => {

    return createPortal(

        <div
            className="fixed dir inset-0 z-[999] bg-black/50 backdrop-blur-md flex items-center justify-center p-4 ">

            <div
                className=" w-full max-w-[1500px] h-[92vh] overflow-hidden rounded-[40px] bg-white flex flex-col">

                {/* Header */}

                <div
                    className=" px-8 py-6 border-b flex justify-between items-center">

                    <div>

                        <h2 className=" text-3xl font-MTNIrancell-Bold">
                            ویرایش دوره
                        </h2>

                        <p className="text-slate-500 mt-1">
                            تغییر اطلاعات و ساختار دوره
                        </p>

                    </div>

                    <button
                        className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center ">
                        <FiX size={24} />
                    </button>

                </div>

                {/* Content */}

                <div
                    className="flex flex-1 overflow-hidden">

                    {/* Body */}

                    <div
                        className=" flex-1 overflow-y-auto p-8">

                        {/* General */}

                        <section
                            className="rounded-[32px] bg-cyan-50 border p-7">

                            <h3 className=" text-2xl font-MTNIrancell-Bold">
                                اطلاعات کلی
                            </h3>

                            <div
                                className="mt-7 grid md:grid-cols-2 gap-5">

                                <input
                                    className=" rounded-2xl p-4 border"
                                    value="آموزش هوش مصنوعی"
                                />

                                <select
                                    className=" rounded-2xl p-4 border">
                                    <option>
                                        BACK_END
                                    </option>
                                </select>

                                <input
                                    className="rounded-2xl p-4 border"
                                    value="79.99"
                                />

                                <input
                                    className=" rounded-2xl p-4 border"
                                    value="15" />

                            </div>

                        </section>

                        {/* Thumbnail */}

                        <section className="mt-7 rounded-[32px] border p-7">

                            <h3 className="text-2xl mb-5 font-MTNIrancell-Bold">
                                تصویر
                            </h3>

                            <img
                                className=" rounded-3xl h-[280px] object-cover w-full"
                                src="https://static.roocket.ir/images/cover/2025/8/30/Xpi398GYbfXijbJ9xpRVvJm2XvifxUuo9C1nvQKx.jpg" />

                            <input className="mt-5 rounded-2xl border p-4 w-full" />

                        </section>

                        {/* Description */}

                        <section className=" mt-7 rounded-[32px] border p-7">

                            <h3 className="text-2xl mb-5 font-MTNIrancell-Bold">
                                توضیحات
                            </h3>

                            <textarea className=" w-full h-[260px] rounded-3xl border p-5" />

                        </section>

                        {/* Chapters */}

                        <section className="mt-7 rounded-[32px] border p-7">

                            <div className=" flex justify-between">

                                <h3 className="text-2xl font-MTNIrancell-Bold">
                                    ساختار دوره
                                </h3>

                                <button className=" px-5 py-3 rounded-2xl bg-cyan-600 text-white">
                                    افزودن فصل
                                </button>

                            </div>

                            <div className=" mt-6 flex flex-col gap-4">

                                <div className=" rounded-3xl border p-5">

                                    <div className=" flex justify-between">

                                        <h4>
                                            فصل اول
                                        </h4>

                                        <FiEdit3 />
                                    </div>

                                    <div className="mt-4 space-y-3 ">

                                        <div className=" rounded-2xl bg-slate-50 p-4 flex justify-between">

                                            <span>
                                                Lists and Tuples
                                            </span>

                                            <div
                                                className="flex gap-4"
                                            >
                                                <FiPlayCircle />
                                                <FiLock />
                                                <FiEdit3 />
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </section>

                    </div>

                </div>

                {/* Footer */}

                <div className=" border-t p-6 flex justify-between"
                >

                    <button
                        className=" px-7 py-4 rounded-2xl border">
                        انصراف
                    </button>

                    <div
                        className="flex gap-3">

                        <button className=" px-7 py-4 rounded-2xl  bg-slate-900 text-white">
                            پیش نمایش
                        </button>

                        <button className=" px-7 py-4 rounded-2xl bg-cyan-600 text-white">
                            ذخیره تغییرات
                        </button>

                    </div>

                </div>

            </div>

        </div>
        ,
        document.body

    )

}

export default EditCourseModal