import { Outlet } from "react-router-dom"
import EducatorDashBoardNav from "../../components/educator/EducatorDashBoardNav";
import useEducatorAuth from "../../hooks/useEducatorAuth";
import { supabase } from "../../supabase";
import { useEffect } from "react";
import { AddCourseContextProvider } from "../../context/AddCourseContext";
import { EditCourseContextProvider } from "../../context/EditCourseContext";



const Dashboard = () => {

  const { educatorData, setEnrollmentsData } = useEducatorAuth()

  const fetcher = async () => {

    if (!educatorData) return;

    try {
      const { data, error } = await supabase
        .from("enrollments")
        .select("*")
        .in("course_id", educatorData.courses)
        .order("timestamp", { ascending: false })
        .limit(100)


      if (error) throw error;

      setEnrollmentsData(data)

    } catch (error) {

      console.log(error);

    }


  }

  useEffect(() => {

    fetcher()



  }, [])



  return (
    <div
      className=" relative dir min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 py-8">

      <div
        className="w-[95%] xl:w-[85%] mx-auto flex flex-col md:flex-row gap-6 ">

        <EducatorDashBoardNav />
        <div
          className="flex-1 bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6">
          <AddCourseContextProvider>
            <EditCourseContextProvider>
              <Outlet />
            </EditCourseContextProvider>
          </AddCourseContextProvider>
        </div>

      </div>

    </div>
  )
}

export default Dashboard