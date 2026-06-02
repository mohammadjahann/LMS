import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"


const StudentProtected = () => {
  const { user } = useAuth()

  return user ? <Outlet /> : <Navigate to="/students-login" replace />;
}

export default StudentProtected