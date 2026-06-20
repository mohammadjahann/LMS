import { useContext } from "react"
import { AddCourseContext } from "../context/AddCourseContext"


const useAddCourseContext = () => {

    const context = useContext(AddCourseContext)

    if (!context) throw new Error('no data for AddCourseContext');


    return context


}

export default useAddCourseContext