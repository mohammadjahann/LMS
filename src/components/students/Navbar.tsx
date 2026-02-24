import { useState, type ReactElement } from "react"
import { Link, NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {

    const [showSideMenu, setShowSideMenu] = useState<boolean>(false)



    const isCourseListPage: boolean = location.pathname.includes('/courses-list')

    const isActive = ({ isActive }: { isActive: boolean }) => {
        return isActive ? 'border-b-2 border-lime-500 animate-fill-border' : '';
    };

    const menu = (styles?: string): ReactElement => {

        return (

            <ul className={`${styles} gap-4 `}>

                <li><NavLink className={isActive} to={'/'}>خانه</NavLink></li>
                <li><NavLink className={isActive} to={'/courses-list'}>لیست دوره ها</NavLink></li>
                <li><NavLink className={isActive} to={'/google.com'}>مقالات</NavLink></li>
            </ul>
        )
    }



    return (
        <nav
            className={`font-MTNIrancell-DemiBold flex  flex-row-reverse items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? ' bg-white' : 'bg-cyan-100/70'}`}>

            {/* Logo */}
            <Link to={'/'}>
                <img
                    className=" w-28 lg:w-32 cursor-pointer"
                    src='/src/assets/logo.svg'
                    alt="" />
            </Link>


            {/* Top menu */}

            {menu('hidden md:flex flex-row-reverse')}


            {/*  HamburgerMenu */}

            <GiHamburgerMenu
                onClick={() => setShowSideMenu(true)}
                className=" md:hidden text-xl esm:text-3xl" />


            {/* Log in Call to actions */}

            <div
                className=" hidden md:flex flex-row-reverse justify-center items-center gap-9 text-gray-500">

                <Link to={'educator-login'}>ورود مدرس</Link>

                <Link
                    to={'students-login'}
                    className=" bg-blue-600 text-white px-5 py-2 rounded-full">
                    ساخت اکانت
                </Link>

            </div>

            {/* Blur when SideMenu is shownig */}
            <div
                onClick={() => setShowSideMenu(false)}
                className={`fixed inset-0 z-10 bg-black bg-opacity-30 transition-opacity duration-500
            ${showSideMenu ? 'pointer-events-auto opacity-100 backdrop-blur-sm' : 'pointer-events-none opacity-0'}`}
            ></div>

            {/* Side menu */}

            <div
             className={`absolute flex flex-col  items-center pt-4 gap-3 border-r-2 top-0 bottom-0 left-0 w-[50%] esm:w-[30%] bg-black/25 z-20 ${showSideMenu ? 'translate-x-0':'-translate-x-full'} transition-transform duration-500 ease-in-out text-white`}>
                <RxCross2
                className=" text-xl esm:text-2xl"
                onClick={()=>setShowSideMenu(false)} />
                {menu('flex flex-col text-center text-[15px] esm:text-[17px]')}

            </div>



        </nav>
    )
}

export default Navbar