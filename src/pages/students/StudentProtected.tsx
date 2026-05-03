import { Outlet, useNavigate } from "react-router-dom"


const StudentProtected = () => {

  const navigate = useNavigate()

  // simulate logged in 
  const isLoggedIn = true

  if (!isLoggedIn) navigate('/students-login')

  return <Outlet />
}

export default StudentProtected