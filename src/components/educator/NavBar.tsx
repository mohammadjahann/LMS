import { Link } from "react-router-dom";
import useEducatorAuth from "../../hooks/useEducatorAuth"
import { TbLogout2 } from "react-icons/tb";


const EducatorNavBar = () => {

  const { logout } = useEducatorAuth()

  return (
    <div className=" w-full px-4 sm:px-10 md:px-14 lg:px-36 bg-gradient-to-b from-cyan-100  to-cyan-50 py-4 flex items-center justify-between dir font-MTNIrancell-Medium">

      {/* Logo */}
      <Link to={'/'}>
        <img src="/src/assets/logo.png" alt="" className="w-28" />
      </Link>

      <TbLogout2
        onClick={logout}
        className=" text-3xl cursor-pointer text-slate-700 hover:text-slate-900 transition-all duration-100" />

    </div>
  )
}

export default EducatorNavBar