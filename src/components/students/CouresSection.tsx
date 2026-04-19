import { Link } from "react-router-dom"
import CourseCard from "./CourseCard"
import { dummyCourses } from "../../assets/assets"
import type { CourseType } from "../../Types"

const coursesData: CourseType[] = dummyCourses




const CouresSection = () => {

  return (

    <div
      className="flex flex-col gap-4 py-16 px-8 md:px-40 justify-center items-center bg-gradient-to-t from-cyan-100/70">

      <h2
        className="text-3xl font-MTNIrancell-Light text-gray-800">
        آموزش از بهترین اساتید
      </h2>

      <p
        className="text-sm md:text-base text-gray-500 mt-3">
        بهترین و تاپ ریت ترین دوره های موجود را در زمینه های متفاوت دریافت کنید <br />از برنامه نویسی گرفته تا دوره های مربوط به بیزنس شخصی ، دوره های ما برای بهترین نتایج اماده سازی شده اند
      </p>

      <div
        className=" w-full flex items-center justify-center gap-2 flex-wrap">
        {coursesData.slice(0, 4).map((course) => (

          <CourseCard courseData={course} key={course._id} />

        ))}

      </div>

      <Link
        to={'/courses-list'}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded ">
        نمایش تمام دوره ها
      </Link>

    </div>
  )
}

export default CouresSection