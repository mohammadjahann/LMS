import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"
import type { CourseType } from "../../Types"
import { MdAddShoppingCart } from "react-icons/md"
import { useAppContext } from "../../context/useAppContext"
import useCartManager from "../../hooks/useCartManager"


type Props = {
  courseData: CourseType,

}


const CourseCard = ({ courseData }: Props) => {

  const { ratingCalculator } = useAppContext()
  const { addToCartHandler, loading } = useCartManager()

  return (
    <div
      className=" flex flex-col gap-2 items-end justify-between border border-gray-500/30 overflow-hidden pb-4 rounded-lg w-[100%] esm:w-[65%] md:w-[45%] lg:w-[24%] h-[350px]">

      <img
        className="w-full max-h-[200px]"
        src={courseData.courseThumbnail} alt="Thumbnail" />
      <div
        className=" flex flex-col h-full w-full items-end justify-between pr-3  text-right">

        <h3
          className=" text-base font-semibold">

          {courseData.courseTitle}

        </h3>

        <p
          className=" text-gray-500">

          {courseData.educator}

        </p>

        <div
          className=" flex items-center space-x-2">

          <p>{ratingCalculator(courseData.courseRatings)}</p>

          <div className="flex">

            {[...Array(5)].map((_, i) => (
              <img key={i} src={i < Math.floor(ratingCalculator(courseData.courseRatings)) ? assets.star : assets.star_blank} alt="" className=" w-3.5 h-3.5" />
            ))}

          </div>

          <p
            className=" text-gray-500">
            {courseData.courseRatings.length}
          </p>

        </div>

        <p
          className="  text-base gap-2 font-semibold text-gray-800 font-MTNIrancell-DemiBold">

          {(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toLocaleString('fa-IR')}
          <span>تومان</span>

        </p>

        <div
          className=" w-full flex flex-row-reverse items-center gap-1">
          <Link
            className=" w-[85%] py-2 bg-blue-400 text-center rounded-md text-white hover:bg-blue-600 transition-colors duration-300"
            to={`/course/${courseData._id}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            اطلاعات بیشتر
          </Link>
          {loading ? (
            <div
              className=" w-4 sm:w-5 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin">

            </div>
          ) : (
            <button>
              <MdAddShoppingCart onClick={() => addToCartHandler(courseData._id)} className=" text-blue-400 hover:text-blue-600 transition-colors duration-300" size={24} />
            </button>
          )}
        </div>

      </div>
    </div>
  )
}

export default CourseCard
