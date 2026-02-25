import React, { useState } from "react"
import AuthInput from "./AuthInput"

type props = {
    modeHandler: () => void
}

const LogInForm = ({ modeHandler }: props) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

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

                <AuthInput
                    name="email"
                    label="ایمیل"
                    type="email"
                    value={formData.email}
                    formChangeHandler={formChangeHandler} />

                <AuthInput
                    name="password"
                    label="پسورد"
                    type="password"
                    value={formData.password}
                    formChangeHandler={formChangeHandler} />

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