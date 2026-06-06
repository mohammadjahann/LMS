import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

const DashBoardNav = () => {

    const navLinkStyle = ({ isActive }: { isActive: boolean }) => `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 whitespace-nowrap ${isActive ? ` bg-cyan-600 text-white shadow-lg scale-[1.03]` : ` text-slate-600 hover:bg-cyan-50 hover:text-cyan-700`}`;

    return (
        <div
            className="w-full md:w-[280px] md:min-w-[280px] bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-3xl p-4 h-fit  md:h-fit flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">

            <div
                className="hidden md:flex flex-col items-center pb-5 mb-2 border-b border-slate-200">

                <div
                    className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center">
                    <FaUserCircle
                        size={42}
                        className="text-cyan-700"
                    />
                </div>

                <h3
                    className="mt-3 font-MTNIrancell-Bold text-slate-800">
                    پنل کاربری
                </h3>

                <p
                    className="text-xs text-slate-500 mt-1">
                    مدیریت حساب و سفارش‌ها
                </p>

            </div>

            <NavLink
                className={navLinkStyle}
                to="overal"
            >
                <FaUserCircle size={20} />
                <span>اطلاعات کاربر</span>
            </NavLink>

            <NavLink
                className={navLinkStyle}
                to="checkouts"
            >
                <HiDocumentText size={20} />
                <span>صورت حساب</span>
            </NavLink>

        </div>
    );
};

export default DashBoardNav;