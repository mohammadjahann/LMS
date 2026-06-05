import { IoMdArrowDropdown } from "react-icons/io";
import { RiShoppingCartLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import type { UserProfileDataType } from '../Types'
import useAuth from '../hooks/useAuth'

type Props = {
    userData: UserProfileDataType,
    styles?: string
    sideMenuStyles?: string
}


const LoggedInPanel = ({ userData, styles = '', sideMenuStyles = 'text-gray-600 border-gray-500' }: Props) => {



    const { logout, basketSeter } = useAuth()

    return (
        <>

            <div
                className={`${styles} gap-2`}>

                <RiShoppingCartLine onClick={basketSeter} className=" cursor-pointer" size={24} color="#333" />

                <button className="loggedin-panel border flex  py-2 px-3 rounded-md text-gray-6 cursor-pointer">

                    <IoMdArrowDropdown className="panel-icon transition-all duration-200" />
                    <span
                        className={`font-MTNIrancell-Bold  ${sideMenuStyles}`}>
                        کار بر {userData.name}

                    </span>



                    <div className='panel'>
                        <span
                            className=" border-b border-gray-500 w-full py-1">
                            <Link to={'/student/dashbord'}>پنل کاربری</Link>
                        </span>
                        <span
                            className=" border-b border-gray-500 w-full py-1">
                            <Link to={'/student/cart'}> سبد خرید</Link>
                        </span>
                        <span
                            className=" border-b border-gray-500 w-full py-1">
                            <Link to={'/student/my-curses'}> دوره های شما</Link>
                        </span>
                        <span
                            onClick={() => logout()}
                            className=" pt-1">
                            خروج
                        </span>

                    </div>

                </button>

            </div>
        </>
    )
}

export default LoggedInPanel