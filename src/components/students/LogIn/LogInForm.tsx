
type props = {
   modeHandler : ()=>void 
}

const LogInForm = ({modeHandler} : props) => {
    return (
        <>
            <div className=" w-full flex justify-center items-center flex-col gap-2">

                <h4
                    className="">
                    خوش حالیم که برگشتی
                </h4>

                <span className="text-[10px]">
                    به اکانت خود وارد شوید تا به دنیای آموزش بروید
                </span>

                <div className=" w-[90%] h-[1px] bg-black"></div>

            </div>

            <form className=" w-full text-right flex flex-col py-3 px-5 gap-3">

                <div className="flex flex-col items-end gap-2">
                    <label className=" text-[12px]">ایمیل</label>
                    <input
                        className=" w-[70%] h-8 bg-slate-200 text-slate-600 outline-none rounded-md"
                        type="email" />
                </div>

                <div className="flex flex-col items-end gap-2">
                    <label className=" text-[12px]">پسورد</label>
                    <input
                        className=" w-[70%] h-8 bg-slate-200 text-slate-600 outline-none rounded-md"
                        type="email" />
                </div>

                <button
                    className=" w-full bg-blue-300 py-2 rounded-lg">
                    ورود
                </button>
            </form>

            <div
                className=" w-full flex justify-center items-center flex-col gap-2">

                <div className=" w-[90%] h-[1px] bg-black"></div>

                <p
                    className="text-[12px]">
                    اکانت ندارید ؟ <span
                        onClick={() => modeHandler()}
                        className="text-blue-500 cursor-pointer">
                        ساخت اکانت
                    </span>
                </p>

            </div>
        </>
    )
}

export default LogInForm