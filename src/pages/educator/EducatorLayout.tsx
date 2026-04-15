import { Outlet } from "react-router-dom"
import EducatorNavBar from "../../components/educator/NavBar"
import EducatorFooter from "../../components/educator/EducatorFooter"

 

const EducatorLayout = () => {
  return (
    <>
    <EducatorNavBar/>
    <div>EducatorLayout </div>
    {<Outlet/>}
    <EducatorFooter/>
    </>
  )
}

export default EducatorLayout