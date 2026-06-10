import { FaUserCircle } from 'react-icons/fa';
import { BsFillEasel2Fill } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import { IoAddCircle } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

import useEducatorAuth from '../../hooks/useEducatorAuth';
import { useState } from 'react';

const EducatorDashBoardNav = () => {

    const [showSideBar, setShowSideBar] = useState(false)

    const navLinkStyle = ({ isActive }: { isActive: boolean }) => `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 whitespace-nowrap ${isActive ? ` bg-cyan-600 text-white shadow-lg scale-[1.03]` : ` text-slate-600 hover:bg-cyan-50 hover:text-cyan-700`}`;

    const { educatorData } = useEducatorAuth()

    return (
        <>
            <div
                className='fixed z-20 md:hidden right-6 top-16 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center'>

                <GiHamburgerMenu
                    className="text-cyan-700"
                    onClick={() => setShowSideBar(true)} />
            </div>

            {/* blur bg when menu is open */}
            <div
                onClick={() => setShowSideBar(false)}
                className={`absolute inset-0 bg-black/50 z-10 ${showSideBar ? 'opacity-1' : 'opacity-0 pointer-events-none'} transition-all duration-200 md:opacity-0`}></div>

            <div
                className={`fixed inset-y-0 right-0 h-full z-30 top-[0%] w-[70%] sm:w-[50%] ${showSideBar ? 'translate-x-0' : ' translate-x-full'} md:translate-x-0  md:h-fit md:w-[280px] md:top-0 md:min-w-[280px] bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] md:rounded-3xl p-4  md:static  md:flex md:flex-col gap-3 overflow-x-auto md:overflow-visible transition-transform duration-300`}>

                <div
                    className="flex flex-col items-center pb-5 mb-2 border-b border-slate-200">

                    <div
                        className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center">
                        {educatorData?.imgURL === null ? (
                            <FaUserCircle
                                size={42}
                                className="text-cyan-700"
                            />
                        ) : (
                            <img className=' rounded-full' src={educatorData?.imgURL} alt="" />
                        )}

                    </div>

                    <h3
                        className="mt-3 font-MTNIrancell-Bold text-slate-800">
                        پنل مدرس
                    </h3>

                    <p
                        className='text-xs text-slate-500 mt-1'>
                        {educatorData?.name} عزیز ، خوش آمدید
                    </p>

                    <p
                        className="text-xs text-slate-500 mt-1">
                        مدیریت دوره ها و دانشجویان
                    </p>

                </div>

                <NavLink
                    onClick={() => setShowSideBar(false)}
                    className={navLinkStyle}
                    to="panel"
                >
                    <FaUserCircle size={20} />
                    <span>اطلاعات مدرس</span>
                </NavLink>

                <NavLink
                    onClick={() => setShowSideBar(false)}
                    className={navLinkStyle}
                    to="add-course"
                >
                    <IoAddCircle size={20} />
                    <span>افزودن دوره</span>
                </NavLink>

                <NavLink
                    onClick={() => setShowSideBar(false)}
                    className={navLinkStyle}
                    to='my-courses'
                >
                    <BsFillEasel2Fill size={20} />
                    <span>دوره های من</span>
                </NavLink>

                <NavLink
                    onClick={() => setShowSideBar(false)}
                    className={navLinkStyle}
                    to='my-students'
                >
                    <PiStudentFill size={20} />
                    <span>دانشجو های من</span>
                </NavLink>

            </div>
        </>
    )
}

export default EducatorDashBoardNav