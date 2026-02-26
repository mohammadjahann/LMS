import { useLocation, useRoutes } from "react-router-dom"
import Routes from "./Routes"
import NavBar from "./components/educator/NavBar"
import Navbar from "./components/students/Navbar"
import { AuthProvider } from "./context/AuthContext"


function App() {

  const router = useRoutes(Routes)
  const isEducatorRoute = useLocation().pathname.startsWith('/educator')

  return (
    <>
      <AuthProvider>
        {isEducatorRoute ? <NavBar /> : <Navbar />}
        {router}
      </AuthProvider>
    </>
  )
}

export default App
