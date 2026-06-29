
const EducatorAddCourseHeader = () => {
    return (
        <div
            className=" mb-8 flex flex-col lg:flex-row justify-between items-center gap-5">

            <div>

                <h1 className="text-xl text-center md:text-3xl md:text-right font-MTNIrancell-Bold text-slate-800">
                    افزودن دوره جدید
                </h1>

                <p
                    className="text-slate-500 mt-2 text-center md:text-right text-[12px] md:text-[16px] ">
                    اطلاعات دوره، فصل‌ها و جلسات را ثبت کنید
                </p>

            </div>

            <div
                className=" px-5 py-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700">
                وضعیت: پیش نویس
            </div>

        </div>
    )
}

export default EducatorAddCourseHeader