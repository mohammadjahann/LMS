import { useLocation, useRoutes } from "react-router-dom"
import Routes from "./Routes"
import NavBar from "./components/educator/NavBar"
import Navbar from "./components/students/Navbar"
import { AuthProvider } from "./context/AuthContext"
import Footer from "./components/students/Footer"
import EducatorFooter from "./components/educator/EducatorFooter"


function App() {

  const router = useRoutes(Routes)
  const isEducatorRoute = useLocation().pathname.startsWith('/educator')


  return (
    <>
      <AuthProvider>
        {isEducatorRoute ? <NavBar /> : <Navbar />}
        {router}
        {isEducatorRoute ? <EducatorFooter/> : <Footer/> }
      </AuthProvider>
    </>
  )
}

export default App
