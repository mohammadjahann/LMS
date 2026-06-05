import { Link } from "react-router-dom"
import useAppContext from "../../hooks/useAppContext"
import useAuth from "../../hooks/useAuth"
import { useAppSelector } from "../../redux/student/hooks"
import type { CourseType } from "../../Types"

const MyCurses = () => {
  const { courseDurationCalculator } = useAppContext()
  const { userData } = useAuth()

  const products = useAppSelector(
    state => state.productsData.products
  )

  const enrolledIDs: string[] = []

  userData?.enrollments.forEach(product =>
    enrolledIDs.push(product.courseID)
  )

  const enrolledSet = new Set(enrolledIDs)

  const enrolledData = products.filter(product =>
    enrolledSet.has(product._id)
  )

  const watchedLectureCount = (ID: string) => {
    const selectedCourse =
      userData?.enrollments.find(
        product => product.courseID === ID
      )

    return selectedCourse?.watchedLecture.length ?? 0
  }

  const allLectureCount = (course: CourseType) => {
    let count = 0

    course.courseContent.forEach(chapter => {
      chapter.chapterContent.forEach(() => count++)
    })

    return count
  }

  return (
    <div
      className=" dir min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 px-4 md:px-8 xl:px-20 py-8">
      {/* Header */}

      <div className="mb-10">

        <h1
          className=" text-3xl font-MTNIrancell-Bold text-slate-800">
          دوره‌های من
        </h1>

        <p
          className=" text-slate-500 mt-2">
          ادامه یادگیری و مشاهده پیشرفت دوره‌ها
        </p>

      </div>

      {/* Empty State */}

      {enrolledData.length === 0 && (
        <div
          className=" bg-white rounded-3xl shadow-sm border border-slate-200 p-12 text-center">
          <h3
            className="text-xl text-slate-700">
            هنوز در هیچ دوره‌ای ثبت‌نام نکرده‌اید
          </h3>

          <p
            className="mt-3 text-slate-500">
            از صفحه دوره‌ها آموزش مورد نظر خود را انتخاب کنید.
          </p>
        </div>
      )}

      {/* Courses */}

      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        {enrolledData.map(course => {

          const watched = watchedLectureCount(course._id)
          const total = allLectureCount(course)

          const progress =
            total === 0
              ? 0
              : Math.round((watched / total) * 100)

          return (
            <div
              key={course._id}
              className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300" >
              {/* Thumbnail */}

              <div className="relative">

                <img
                  src={course.courseThumbnail}
                  alt={course.courseTitle}
                  className="w-full h-56 object-cover" />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <div
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium">
                  {progress}%
                </div>

              </div>

              {/* Content */}

              <div className="p-5">

                <h2
                  className="text-lg font-MTNIrancell-Bold text-slate-800 text-right line-clamp-2">
                  {course.courseTitle}
                </h2>

                <p
                  className=" text-slate-500 text-sm mt-2 text-right">
                  مدرس: {course.educator}
                </p>

                {/* Stats */}

                <div
                  className=" flex justify-between items-center mt-5 text-sm text-slate-600">
                  <span>
                    {courseDurationCalculator(
                      course.courseContent
                    )}
                  </span>

                  <span>
                    {watched} از {total} جلسه
                  </span>
                </div>

                {/* Progress */}

                <div
                  className="mt-4 w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-500 rounded-full transition-all duration-500 "
                    style={{
                      width: `${progress}%`
                    }}
                  />
                </div>

                {/* Footer */}

                <div
                  className="flex items-center justify-between  mt-6 " >
                  <div
                    className=" text-cyan-700 font-semibold">
                    {progress === 100
                      ? "تکمیل شده"
                      : "در حال یادگیری"}
                  </div>

                  <Link
                    to={`/course/${course._id}`}
                    className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 transition text-white">
                    ادامه یادگیری
                  </Link>
                </div>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyCurses