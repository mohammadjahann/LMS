import { useEffect, useState } from "react"
import Session from "../../components/students/Session"
import EnrollmentCard from "../../components/students/EnrollmentCard"
import Player from "./Player"
import { useParams } from "react-router-dom"
import type { ChapterContent, CourseType } from "../../Types"
import { assets, dummyCourses } from "../../assets/assets"
import { useAppContext } from "../../context/useAppContext"


const allData: CourseType[] = dummyCourses



const CourseDetails = () => {

  const [courseData, setCourseData] = useState<CourseType | null>(null)
  const [playerData, setPlayerData] = useState<ChapterContent | null>(null)

  const { id } = useParams()

  useEffect(() => {

    const getData: CourseType[] = allData.filter(course => course._id === id)

    // eslint-disable-next-line
    setCourseData(getData[0])


  }, [])

  const { ratingCalculator } = useAppContext()

  const getLectureData = (lectureData: ChapterContent): void => {
    if (!lectureData.isPreviewFree) return
    setPlayerData(lectureData)



  }

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
              className=" pr-2 text-black/70 dir"
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
              مدرس : <span>{courseData?.educator}</span>
            </p>
          </div>

          {/* Course Stracture */}

          <div
            className=" pt-8 text-gray-800 w-full">

            <h2
              className=" text-xl font-semibold">
              ساختار دوره
            </h2>

            <div
              className=" pt-5 min-w-[70%]">
              {courseData?.courseContent.map(chapter => (
                <Session key={chapter.chapterId} chapter={chapter} getLectureData={getLectureData} />
              )) || ''}

            </div>

          </div>


        </div>


        {/* Enrolment / player */}
        <div
          className="w-[90%] md:w-[50%]">
          {playerData ? <Player lectureData={playerData} /> : <EnrollmentCard course={courseData} />}
        </div>

      </div>

    </div>
  )
}

export default CourseDetails