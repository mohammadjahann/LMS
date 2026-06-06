import { Outlet } from "react-router-dom"


const DashBoard = () => {
  return (
    <div
      className="dir w-full h-screen bg-gradient-to-b from-cyan-100 to-cyan-50">

      <div className=" px-4 sm:px-10 md:px-14 lg:px-36 flex flex-col md:flex-row h-full">

        {/* DashBoard nav */}
        <div >
          nav
        </div>

        <Outlet />
      </div>

    </div>
  )
}

export default DashBoard