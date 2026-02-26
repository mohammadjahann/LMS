import React, { useState } from "react"
import AuthInput from "./AuthInput"
import AuthHeader from "./AuthHeader"
import AuthFooter from "./AuthFooter"
import { supabase } from "../../../supabase"
import ErrorModal from "./ErrorModal"
import SuccsessModal from "./SuccsessModal"


type props = {
    modeHandler: () => void
}

const SignUpForm = ({ modeHandler }: props) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        tel: ''
    })

    const [loadScreen, setLoadScreen] = useState<boolean>(false)
    const [showError, setShowError] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string>('')
    const [showSuccsessModal, setShowSuccsessModal] = useState<boolean>(false)


    // Manage AuthInput Values

    const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {

        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Signup Logic 

    const signUpHandler = async () => {
        setLoadScreen(true)
        const { email, password } = formData
        const { error } = await supabase.auth.signUp({
            email,
            password,
            phone: formData.tel
        })



        if (error) {

            setErrorText(error.message)
            setShowError(true)

        } else {

            setShowSuccsessModal(true)

            setTimeout(() => {

                setShowSuccsessModal(true)
                setLoadScreen(false)
                modeHandler()

            }, 3000);
        }

    }

    // Close ErrorModal

    const errorModalClose = (): void => {
        setShowError(false)
        setLoadScreen(false)
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

            {/* Error Modal */}

            {showError && <ErrorModal errorText={errorText} errorModalClose={errorModalClose}></ErrorModal>}

            {/* Succsess Modal */}

            {showSuccsessModal && <SuccsessModal text="ثبت نام موفقیت امیز بود " action="لطفا ایمیل خود را تایید کنید" />}
        </>
    )
}

export default SignUpForm