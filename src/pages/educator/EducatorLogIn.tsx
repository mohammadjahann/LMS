import { useEffect, useState } from "react"
import AuthHeader from "../../components/students/LogIn/AuthHeader"
import AuthInput from "../../components/students/LogIn/AuthInput"
import { supabase } from "../../supabase"
import SuccsessModal from "../../components/students/LogIn/SuccsessModal"
import ErrorModal from "../../components/students/LogIn/ErrorModal"
import { useNavigate } from "react-router-dom"
import useEducatorAuth from "../../hooks/useEducatorAuth"


const EducatorLogIn = () => {

  const [showErrorModal, setShowErrorModal] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (!showSuccessModal) return

    const timeout = setTimeout(() => {
      navigate('/educator/panel')
    }, 1000)

    return () => clearTimeout(timeout)

  }, [showSuccessModal, navigate])

  const { setEducatorData } = useEducatorAuth()


  const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })

  }

  const getEducatorData = async (ID: string) => {


    try {

      const { data, error } = await supabase
        .from('educators')
        .select('*')
        .eq('id', ID)
        .single()
      if (error) throw error;

      setEducatorData(data)
      setShowSuccessModal(true)


    } catch (error) {

      if (error instanceof Error) {
        setErrorText(error.message)
        setShowErrorModal(true)
      } else {
        setErrorText('Something went wrong')
        setShowErrorModal(true)
      }

    } finally {
      setLoading(false)
    }


  }

  const logInClickHandler = async () => {

    setLoading(true)

    try {

      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      })
      if (error) throw error;

      await getEducatorData(data.user.id)


    } catch (error) {

      if (error instanceof Error) {
        setErrorText(error.message)
        setShowErrorModal(true)
      } else {
        setErrorText('Something went wrong')
        setShowErrorModal(true)
      }

    }

  }

  const errorModalClose = (): void => {
    setLoading(false)
    setShowErrorModal(false)

  }


  return (
    <div
      className=" relative bg-gradient-to-tr from-blue-50 to-cyan-100 w-full min-h-[90vh] py-4 flex justify-center  font-MTNIrancell-Medium">

      {/* Loading */}
      {loading && (
        <div className=" absolute inset-0   bg-black/40"></div>
      )}


      {/* Success Modal */}

      {showSuccessModal && <SuccsessModal text="ورود با موفقیت انجام شد" action="هم اکنون به داشبرد هدایت میشوید" />}

      {/* Error Modal */}

      {showErrorModal && <ErrorModal errorText={errorText} errorModalClose={errorModalClose} />}


      <div
        className=" w-[90%] md:w-[50%] lg:w-[30%] bg-white shadow-2xl rounded-xl flex items-center justify-around flex-col py-4 my-auto">

        <AuthHeader title="مدرس عزیز ، خوش آمدی" text="به اکانت خود وارد شوید تا به دنیای آموزش بروید" />


        <form
          className=" w-full text-right flex flex-col py-3 px-5 gap-3"
          onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => { e.preventDefault() }}>

          <AuthInput
            name="email"
            label="ایمیل مدرس"
            type="email"
            value={formData.email}
            formChangeHandler={formChangeHandler}
          />
          <AuthInput
            name="password"
            label="رمز عبور"
            type="password"
            value={formData.password}
            formChangeHandler={formChangeHandler}
          />


          <button
            onClick={logInClickHandler}
            className=" w-full bg-blue-300 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition-colors duration-200">
            ورود
          </button>
        </form>


      </div>

    </div>
  )
}

export default EducatorLogIn