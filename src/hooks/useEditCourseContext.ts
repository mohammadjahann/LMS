import { useContext } from "react"
import { EditCourseContext } from "../context/EditCourseContext"


const useEditCourseContext = () => {

    const context = useContext(EditCourseContext)

    if (!context) throw new Error('no data for EditCourseContext')

    return context

}

export default useEditCourseContext