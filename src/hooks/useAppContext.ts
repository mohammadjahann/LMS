import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const useAppContext = () => {

    const contex = useContext(AppContext)

    if (!contex) throw new Error("Error in Loading AppContext");


    return contex
}

export default useAppContext