import { useLocation, useRoutes } from "react-router-dom"
import Routes from "./Routes"
import NavBar from "./components/educator/NavBar"
import Navbar from "./components/students/Navbar"


function App() {

  const router = useRoutes(Routes)
  const isEducatorRoute = useLocation().pathname.startsWith('/educator')

  return (
    <>
      {isEducatorRoute ? <NavBar /> : <Navbar />}
      {router}
    </>
  )
}

export default App
