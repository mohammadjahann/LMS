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
      className=" bg-gradient-to-tr from-blue-50 to-cyan-100 w-full min-h-[90vh] py-4 flex justify-center  font-MTNIrancell-Medium">

      <div
        className=" w-[90%] md:w-[50%] lg:w-[30%] bg-white shadow-2xl rounded-xl flex items-center justify-around flex-col py-4 my-auto">

        {mode === 'login' ? 
          <LogInForm modeHandler={modeHandler}/> : <SignUpForm modeHandler={modeHandler}/>}

      </div>

    </div>
  )
}

export default StudentsLogIn