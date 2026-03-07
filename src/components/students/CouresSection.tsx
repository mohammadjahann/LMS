import { Link } from "react-router-dom"
import CourseCard from "./CourseCard"

const coursesData = [

 
  {
    courseTitle: 'Pro React',
    author: 'Jahan abadi',
    description: 'text',
    rate: 4.5,
    price: 1800000,
    courseBanner: './src/assets/course_1.png',
    seassens: [
      {
        seassenTitle: 'base', seassenChapters: [
          { chapterTitle: 'install react', chapterSrc: 'https:asd', iswatched: false },
          { chapterTitle: 'base react structure', chapterSrc: 'https:asd', iswatched: false },
        ]
      },
      {
        seassenTitle: 'how to code', seassenChapters: [
          { chapterTitle: 'jsx', chapterSrc: 'https:asd', iswatched: false },
          { chapterTitle: 'condetinalrendering', chapterSrc: 'https:asd', iswatched: false },
        ]
      },
    ]
  },
  {
    courseTitle: 'Pro React',
    author: 'Jahan abadi',
    description: 'text',
    rate: 4.5,
    price: 1800000,
    courseBanner: './src/assets/course_1.png',
    seassens: [
      {
        seassenTitle: 'base', seassenChapters: [
          { chapterTitle: 'install react', chapterSrc: 'https:asd', iswatched: false },
          { chapterTitle: 'base react structure', chapterSrc: 'https:asd', iswatched: false },
        ]
      },
      {
        seassenTitle: 'how to code', seassenChapters: [
          { chapterTitle: 'jsx', chapterSrc: 'https:asd', iswatched: false },
          { chapterTitle: 'condetinalrendering', chapterSrc: 'https:asd', iswatched: false },
        ]
      },
    ]
  },
  {
    courseTitle: 'Pro React',
    author: 'Jahan abadi',
    description: 'text',
    rate: 4.5,
    price: 1800000,
    courseBanner: './src/assets/course_1.png',
    seassens: [
      {
        seassenTitle: 'base', seassenChapters: [
          { chapterTitle: 'install react', chapterSrc: 'https:asd', iswatched: false },
          { chapterTitle: 'base react structure', chapterSrc: 'https:asd', iswatched: false },
        ]
      },
      {
        seassenTitle: 'how to code', seassenChapters: [
          { chapterTitle: 'jsx', chapterSrc: 'https:asd', iswatched: false },
          { chapterTitle: 'condetinalrendering', chapterSrc: 'https:asd', iswatched: false },
        ]
      },
    ]
  },

]


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
        بهترین و تاپ ریت ترین دوره های موجود را در زمینه های متفاوت دریافت کنید .از برنامه نویسی گرفته تا دوره های مربوط به بیزنس شخصی ، دوره های ما برای بهترین نتایج اماده سازی شده اند
      </p>

      <div
        className="flex gap-4 items-center justify-center w-full flex-wrap ">
        {coursesData.map((course, i) => (

          <CourseCard id={i} author={course.author} src={course.courseBanner} rating={course.rate} title={course.courseTitle} price={course.price}/>

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