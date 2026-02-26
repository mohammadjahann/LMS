import React, { useState } from "react"
import AuthInput from "./AuthInput"
import AuthHeader from "./AuthHeader"
import AuthFooter from "./AuthFooter"
import { supabase } from "../../../supabase"

type props = {
    modeHandler: () => void
}

const SignUpForm = ({ modeHandler }: props) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        tel: ''
    })

    const [loadScreen, setLoadScreen] = useState<boolean>(true)

    const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {

        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const signUpHandler = async () => {
        const { email, password } = formData
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            phone: formData.tel
        })



        if (error) {
            console.log("ERROR:", error.message)
        } else {
            console.log("USER CREATED:", data)
            alert("ثبت نام موفق 🎉")
        }

    }

    return (
        <>

            <AuthHeader title="خوش حالیم که قراره به ما بپیوندی" text="حسابی بسازید تا از دنیای اموزش های ما بهره مند شوید" />


            <form
                onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => e.preventDefault()}
                className=" w-full text-right flex flex-col py-3 px-5 gap-3">

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
                    onClick={signUpHandler}
                    className=" w-full bg-blue-300 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition-colors duration-200">
                    ثبت نام
                </button>
            </form>

            <AuthFooter modeHandler={modeHandler} title="اکانت دارید ؟" callToAction="وارد شوید" />

            {/* Loading */}

            {loadScreen && <div className=" fixed inset-0 bg-black/50"></div>}
        </>
    )
}

export default SignUpForm