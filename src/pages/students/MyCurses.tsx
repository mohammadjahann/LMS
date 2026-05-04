import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { mockMyCoursesData } from "../../assets/assets"
import type { CourseType } from "../../Types"
import useAppContext from "../../hooks/useAppContext"

const mockData = mockMyCoursesData

const MyCurses = () => {

  const [myCoursesData, setMyCoursesData] = useState<CourseType[] | null>(null)

  const { courseDurationCalculator } = useAppContext()

  useEffect(() => {

    // simulate get Data

    // eslint-disable-next-line
    setMyCoursesData(mockData)

  }, [])
  return (
    <>
      <div
        className="dir px-8 md:px-36 pt-10 min-h-screen">

        <h1
          className=" text-2xl font-MTNIrancell-Medium">
          دوره های من
        </h1>

        <table
          className=" table-fixed md:table-auto w-full overflow-hidden border mt-10">

          <thead
            className=" text-gray-900 border-b border-gray-500/20 text-sm text-right max-sm:hidden">

            <tr>

              <th className=" px-4 py-3 font-MTNIrancell-Medium truncate">دوره</th>
              <th className=" px-4 py-3 font-MTNIrancell-Medium truncate">زمان</th>
              <th className=" px-4 py-3 font-MTNIrancell-Medium truncate">تکمیل شده</th>
              <th className=" px-4 py-3 font-MTNIrancell-Medium truncate">وضعیت</th>

            </tr>

          </thead>

          <tbody
            className=" text-gray-700">
            {myCoursesData?.map(course => (
              <tr key={course._id}
                className=" max-sm:grid max-sm:grid-cols-4">

                <td
                  className=" max-sm:col-span-3 md:px-4 pr-2 md:pr-4 py-3 flex items-center gap-2">
                  <img className=" w-14 sm:w-24 md:w-28 rounded-sm" src={course.courseThumbnail} alt="" />
                  <div className=" flex-1">
                    <p
                      className=" mb-1 max-sm:text-sm">
                      {course.courseTitle}
                    </p>
                  </div>
                </td>

                <td className=" px-4 py-3 max-sm:hidden">
                  {courseDurationCalculator(course.courseContent)}
                </td>

                <td className=" px-4 py-3 max-sm:hidden">
                  4 / 10 <span>قسمت</span>
                </td>

                <td className=" px-4 py-3 max-sm:text-left">
                  <Link
                    to={`/course/${course._id}`}
                    className=" px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white">
                    ادامه
                  </Link>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div >
    </>
  )
}

export default MyCurses