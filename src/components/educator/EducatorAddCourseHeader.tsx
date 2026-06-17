import React from 'react'

const EducatorAddCourseHeader = () => {
    return (
        <div
            className=" mb-8 flex flex-col lg:flex-row justify-between gap-5">

            <div>

                <h1 className="text-3xl font-MTNIrancell-Bold text-slate-800">
                    افزودن دوره جدید
                </h1>

                <p
                    className="text-slate-500 mt-2">
                    اطلاعات دوره، فصل‌ها و جلسات را ثبت کنید
                </p>

            </div>

            <div
                className="px-5 py-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700">
                وضعیت: پیش نویس
            </div>

        </div>
    )
}

export default EducatorAddCourseHeader