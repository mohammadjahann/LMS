import { Outlet } from "react-router-dom"
import EducatorFooter from "../../components/educator/EducatorFooter"
import { EducatorAuthContextProvider } from "../../context/EducatorAuthContext"
import { ToastContainer } from "react-toastify"


const EducatorLayout = () => {
  return (
    <>
      <EducatorAuthContextProvider>
        <ToastContainer />
        <Outlet />
      </EducatorAuthContextProvider>
      <EducatorFooter />
    </>
  )
}

export default EducatorLayout