import { useEffect, useState } from "react"
import Session from "../../components/students/Session"
import EnrollmentCard from "../../components/students/EnrollmentCard"
import Player from "./Player"
import { useParams } from "react-router-dom"
import type { ChapterContent, CourseType } from "../../Types"
import { assets } from "../../assets/assets"
import { useAppContext } from "../../context/useAppContext"
import { useAppDispatch, useAppSelector } from "../../redux/student/hooks"
import { fetchProducts } from "../../redux/student/productSlice"
import useAuth from "../../hooks/useAuth"


const CourseDetails = () => {

  const [isEnrolled, setIsEnrolled] = useState(false)
  const [courseData, setCourseData] = useState<CourseType | null>(null)
  const [playerData, setPlayerData] = useState<ChapterContent | null>(null)

  const { id } = useParams()
  // RTK
  const { products, status } = useAppSelector(state => state.productsData)
  const dispatch = useAppDispatch()

  const { userData } = useAuth()

  useEffect(() => {

    if (status !== 'FULLFILED') {
      dispatch(fetchProducts())
    }

    // Check if user erolled the course

    const getData: CourseType[] = products.filter(course => course._id === id)

    const enrollmentData = userData?.enrollments.find(product => product.courseID === id)

    // Make links watchable
    if (enrollmentData) {

      const clone = { ...getData[0] }

      const updatedCoursecontent = getData[0].courseContent.map(chapter => ({ ...chapter, chapterContent: chapter.chapterContent.map(lecture => ({ ...lecture, isPreviewFree: true })) }))

      clone.courseContent = updatedCoursecontent

      // eslint-disable-next-line
      setCourseData(clone)
      setIsEnrolled(true)

    } else {
      setCourseData(getData[0])
    }


  }, [status])

  const { ratingCalculator } = useAppContext()

  const getLectureData = (lectureData: ChapterContent): void => {
    if (!lectureData.isPreviewFree) return
    setPlayerData(lectureData)


  }

  return (
    <>
      <div
        className=" w-full min-h-screen bg-gradient-to-b from-cyan-100/70 py-2">

        {status === 'FULLFILED' ? <div className="w-[90%] md:w-[80%] min-h-[90vh] mx-auto  flex flex-col items-center justify-center md:flex-row-reverse md:items-start md:justify-between">

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
            {playerData ? <Player lectureData={playerData} courseID={courseData?._id} isEnrolled={isEnrolled} /> : <EnrollmentCard course={courseData} isEnrolled={isEnrolled} />}
          </div>

        </div> : <div className=" w-full flex items-center justify-center my-8 flex-col gap-3">
          <h4>بارگذاری داده ها</h4>
          <div
            className=" w-16 sm:w-20 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin">

          </div>
        </div>}


      </div>
    </>
  )
}

export default CourseDetails