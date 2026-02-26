import React, { useState } from "react"
import AuthInput from "./AuthInput"
import AuthHeader from "./AuthHeader"
import AuthFooter from "./AuthFooter"
import { supabase } from "../../../supabase"
import ErrorModal from "./ErrorModal"
import SuccsessModal from "./SuccsessModal"
import { useNavigate } from "react-router-dom"

type props = {
    modeHandler: () => void
}

const LogInForm = ({ modeHandler }: props) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [showLoadScreen, setShowLoadScreen] = useState<boolean>(false)
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string>('')
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)

    const navigate = useNavigate()


    // Handle AuthInputs

    const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // LogIn Logic

    const userLogInHandler = async () => {
        setShowLoadScreen(true)

        const { error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password
        })

        if (error) {
            setErrorText(error.message)
            setShowErrorModal(true)
        } else {
            setShowSuccessModal(true)
           
            setTimeout(() => {
                 navigate('/')
            }, 3000);
        }

    }

    const errorModalClose = () :void =>{
        setShowLoadScreen(false)
        setShowErrorModal(false)

    }

    return (
        <>
            <AuthHeader title="خوش حالیم که برگشتی" text="به اکانت خود وارد شوید تا به دنیای آموزش بروید" />


            <form
                className=" w-full text-right flex flex-col py-3 px-5 gap-3"
                onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => { e.preventDefault() }}>

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
                    onClick={userLogInHandler}
                    className=" w-full bg-blue-300 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition-colors duration-200">
                    ورود
                </button>
            </form>

            <AuthFooter modeHandler={modeHandler} title=" اکانت ندارید ؟ " callToAction="ساخت اکانت" />

            {/* Loading */}

            {showLoadScreen && (<div className=" fixed inset-0 bg-black/50"></div>)}

            {/* Error Modal */}

            {showErrorModal && <ErrorModal errorText={errorText} errorModalClose={errorModalClose}/>}

            {/* Success Modal */}

            {showSuccessModal && <SuccsessModal text="ورود با موفقیت انجام شد" action="هم اکنون به صفحه اصلی هدایت میشوید"/>}

        </>
    )
}

export default LogInForm