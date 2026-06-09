import { Navigate, Outlet } from "react-router-dom"
import useEducatorAuth from "../../hooks/useEducatorAuth"
import EducatorNavBar from "./NavBar"


const EducatorProtected = () => {

    const { educatorData } = useEducatorAuth()

    return educatorData ? (
        <>
            <EducatorNavBar />
            <Outlet />
        </>
    ) : <Navigate to={'educator-login'} replace />

}

export default EducatorProtected