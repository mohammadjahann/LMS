import React, { useState } from "react"
import AuthInput from "./AuthInput"
import AuthHeader from "./AuthHeader"
import AuthFooter from "./AuthFooter"

type props = {
    modeHandler: () => void
}

const SignUpForm = ({ modeHandler }: props) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        tel: ''
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

            <AuthHeader title="خوش حالیم که قراره به ما بپیوندی" text="حسابی بسازید تا از دنیای اموزش های ما بهره مند شوید" />


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

                <AuthInput
                    name="tel"
                    label="تلفن همراه"
                    type="tel"
                    value={formData.tel}
                    formChangeHandler={formChangeHandler} />

                <button
                    className=" w-full bg-blue-300 py-2 rounded-lg">
                    ورود
                </button>
            </form>

            <AuthFooter modeHandler={modeHandler} title="اکانت دارید ؟" callToAction="وارد شوید"/>
           
        </>
    )
}

export default SignUpForm