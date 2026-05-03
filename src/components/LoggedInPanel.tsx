import React from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

type Props = {
    userData: {
        name: string,
    },
    styles?: string
    sideMenuStyles?: string
}


const LoggedInPanel = ({ userData, styles = '', sideMenuStyles = 'text-gray-600 border-gray-500' }: Props) => {
    return (
        <div
            className={`${styles} gap-2`}>

            <RiShoppingCartLine className=" cursor-pointer" size={24} color="#333" />

            <div className="loggedin-panel">
                <span
                    className={`font-MTNIrancell-Bold border  py-2 px-3 rounded-md text-gray-6 cursor-pointer ${sideMenuStyles}`}>
                    کار بر {userData.name}
                </span>

                <div>
                    <span
                        className=" border-b border-gray-500 w-full py-1">
                        <Link to={'/student/dashbord'}>پنل کاربری</Link>
                    </span>
                    <span
                        className=" border-b border-gray-500 w-full py-1">
                        <Link to={'/student/my-curses'}> دوره های شما</Link>
                    </span>
                    <span
                        className=" pt-1">
                        خروج
                    </span>

                </div>

            </div>

        </div>
    )
}

export default LoggedInPanel