import { Navigate, Outlet } from "react-router-dom"
import useEducatorAuth from "../../hooks/useEducatorAuth"


const EducatorProtected = () => {

    const { educatorData } = useEducatorAuth()

    return educatorData ? <Outlet /> : <Navigate to={'educator-login'} replace />

}

export default EducatorProtected