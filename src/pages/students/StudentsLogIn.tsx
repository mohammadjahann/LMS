import { useState } from "react"
import LogInForm from "../../components/students/LogIn/LogInForm"
import SignUpForm from "../../components/students/LogIn/SignUpForm"


const StudentsLogIn = () => {

  const [mode, setMode] = useState<string>('login')

  const modeHandler = () =>{

    setMode(prev=> prev === 'login' ? 'signup' : 'login')
    
  }

  return (

    <div
      className=" bg-gradient-to-tr from-blue-50 to-cyan-100 w-full h-[90vh] flex justify-center items-center font-MTNIrancell-Medium">

      <div
        className=" w-[30%] bg-white shadow-2xl rounded-xl flex items-center justify-around flex-col py-4">

        {mode === 'login' ? 
          <LogInForm modeHandler={modeHandler}/> : <SignUpForm modeHandler={modeHandler}/>}

      </div>

    </div>
  )
}

export default StudentsLogIn