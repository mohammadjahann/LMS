import { useEffect, useState } from "react"
import Session from "../../components/students/Session"
import EnrollmentCard from "../../components/students/EnrollmentCard"
import Player from "./Player"
import { useParams } from "react-router-dom"
import type { CourseType } from "../../Types"
import { assets, dummyCourses } from "../../assets/assets"
import { useAppContext } from "../../context/useAppContext"


const coursesData =
{
  id: 245436,
  courseTitle: 'ری اکت حرفه ای',
  author: 'محمد جهان آبادی',
  category: 'FRONT',
  description: 'تومل سبیسل حجصف خ نلس کسل گلضفه بلب س خ صحفف صق صخثق صمیسل یلسیل یسلضن ش شففی قجف یمشلنبیل فقفض گکبل ش ضفقف.ل فضلبلنخحضف قمبلای',
  rate: 4.5,
  price: 1800000,
  courseBanner: './src/assets/course_1.png',
  seassens: [
    {
      seassenTitle: 'مباحث پایه', seassenChapters: [
        { chapterTitle: 'نصب ری اکت', chapterSrc: 'https:asd', iswatched: false, duration: '24:10' },
        { chapterTitle: 'استراکچر ری اکت', chapterSrc: 'https:asd', iswatched: false, duration: '24:10' },
      ]
    },
    {
      seassenTitle: 'چطور کد بزنیم', seassenChapters: [
        { chapterTitle: 'jsx', chapterSrc: 'https:asd', iswatched: false, duration: '24:10' },
        { chapterTitle: 'رندر شرطی', chapterSrc: 'https:asd', iswatched: false, duration: '24:10' },
      ]
    },
  ]
}

const allData: CourseType[] = dummyCourses



const CourseDetails = () => {

  const [courseData, setCourseData] = useState<CourseType | null>(null)
  const [haveAccess,] = useState<boolean>(false)

  const { id } = useParams()

  useEffect(() => {

    const getData: CourseType[] = allData.filter(course => course._id === id)

    // eslint-disable-next-line
    setCourseData(getData[0])


  }, [])

  const { ratingCalculator } = useAppContext()

  return (
    <div
      className=" w-full min-h-screen bg-gradient-to-b from-cyan-100/70 py-2">

      {/* container */}
      <div className="w-[90%] md:w-[80%] min-h-[90vh] mx-auto  flex flex-col items-center justify-center md:flex-row-reverse md:items-start md:justify-between">

        {/* Course Deatils */}
        <div
          className="w-[50%] flex flex-col items-end pt-4 text-right gap-8">

          <div
            className="w-full flex flex-col items-end pt-4 text-right ">
            <h3
              className=" font-MTNIrancell-Bold text-[28px]">
              {courseData?.courseTitle}
            </h3>

            <p
              className=" pr-2 text-black/70"
              dangerouslySetInnerHTML={{ __html: courseData?.courseDescription || '' }}></p>

            <div
              className=" flex items-center space-x-2">

              <p>{ratingCalculator(courseData?.courseRatings || [])}</p>

              <div className="flex">

                {[...Array(5)].map((_, i) => (
                  <img key={i} src={i < Math.floor(ratingCalculator(courseData?.courseRatings || [])) ? assets.star : assets.star_blank} alt="" className=" w-3.5 h-3.5" />
                ))}

              </div>



            </div>

            <p
              className=" text-[16px] font-MTNIrancell-Medium">
              مدرس : <span>{coursesData.author}</span>
            </p>
          </div>

          <div
            className="w-full flex flex-col items-end pt-4 text-right ">

            <h4
              className="font-MTNIrancell-Bold text-[20px]">
              سر فصل ها
            </h4>

            <div
              className=" w-full flex flex-col items-end overflow-hidden rounded-lg">
              {coursesData.seassens.map(s => (<Session data={s} />))}
            </div>
          </div>

        </div>


        {/* Enrolment / player */}
        <div
          className="w-[90%] md:w-[50%]">
          {haveAccess ? <Player /> : <EnrollmentCard />}
        </div>

      </div>

    </div>
  )
}

export default CourseDetails