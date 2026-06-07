import { Navigate, Outlet } from "react-router-dom"


const EducatorProtected = () => {

    // simulate loged in
    const isLoggedIn = true

    return isLoggedIn ? <Outlet /> : <Navigate to={'educator-login'} replace />

}

export default EducatorProtected