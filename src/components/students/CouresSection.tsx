import { Link } from "react-router-dom"


const CouresSection = () => {

  return (

    <div 
    className="flex flex-col gap-4 py-16 px-8 md:px-40 justify-center items-center">

      <h2
        className="text-3xl font-MTNIrancell-Light text-gray-800">
        آموزش از بهترین اساتید
      </h2>

      <p
        className="text-sm md:text-base text-gray-500 mt-3">
        بهترین و تاپ ریت ترین دوره های موجود را در زمینه های متفاوت دریافت کنید .از برنامه نویسی گرفته تا دوره های مربوط به بیزنس شخصی ، دوره های ما برای بهترین نتایج اماده سازی شده اند
      </p>

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