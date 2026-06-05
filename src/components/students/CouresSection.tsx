import { Link } from "react-router-dom"
import CourseCard from "./CourseCard"
import { useAppSelector } from "../../redux/student/hooks"


const CouresSection = () => {

  const { products, status } = useAppSelector(state => state.productsData)


  return (

    <div
      className=" w-full  bg-gradient-to-t from-cyan-100/70  ">
      <div className="flex flex-col justify-center items-center my-3 gap-4 py-16 px-8 md:px-20 lg:px-40">

        <h2
          className="text-3xl font-MTNIrancell-Light text-gray-800">
          آموزش از بهترین اساتید
        </h2>

        <p
          className="text-sm md:text-base text-gray-500 mt-3">
          بهترین و تاپ ریت ترین دوره های موجود را در زمینه های متفاوت دریافت کنید <br />از برنامه نویسی گرفته تا دوره های مربوط به بیزنس شخصی ، دوره های ما برای بهترین نتایج اماده سازی شده اند
        </p>


        {status === 'FULLFILED' ? (
          <div
            className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ">
            {products.slice(0, 4).map((course) => (

              <CourseCard courseData={course} key={course._id} />

            ))}

          </div>
        ) : (

          <div className=" w-full flex items-center justify-center my-8 flex-col gap-3">
            <h4>بارگذاری دوره ها</h4>
            <div
              className=" w-16 sm:w-20 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin">

            </div>
          </div>

        )}

        <Link
          to={'/courses-list'}
          onClick={() => scrollTo(0, 0)}
          className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded mt-4 bg-cyan-600 text-white">
          نمایش تمام دوره ها
        </Link>

      </div>
    </div>
  )
}

export default CouresSection