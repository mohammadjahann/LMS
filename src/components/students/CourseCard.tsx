import { Link } from "react-router-dom"

type courseCardProps = {
  id: number,
  src: string,
  rating: number,
  title: string,
  author: string,
  price: number
}

const CourseCard = ({ id, src, rating, title, author , price}: courseCardProps) => {
  return (
    <div
    className=" w-[90%] sm:w-[45%] md:w-[30%] border shadow-sm rounded-md overflow-hidden"
    key={id}>

      <img src={src} alt="" />

      <div 
      className=" p-3 flex flex-col ">

        <h3>{title}</h3>

        <p>{author}</p>

        <div
        className=" flex justify-between">

          <p>${price}</p>

          <p>{rating}</p>

        </div>

        <Link
         to={`/course/${id}`}
         className=" bg-blue-400 py-2 px-3 rounded-sm hover:bg-blue-500 hover:text-white transition-colors duration-200"
        >جزئیات بیشتر</Link>

      </div>


    </div>
  )
}

export default CourseCard