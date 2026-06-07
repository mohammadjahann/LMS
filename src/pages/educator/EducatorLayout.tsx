import { Outlet } from "react-router-dom"
import EducatorFooter from "../../components/educator/EducatorFooter"
import { EducatorAuthContextProvider } from "../../context/EducatorAuthContext"


const EducatorLayout = () => {
  return (
    <>
      <EducatorAuthContextProvider>
        <Outlet />
      </EducatorAuthContextProvider>
      <EducatorFooter />
    </>
  )
}

export default EducatorLayout