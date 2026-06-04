import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import type { ChapterContent, EnroledData } from "../../Types"
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { supabase } from "../../supabase";
import { toast } from "react-toastify";

type PlayerProps = {
  lectureData: ChapterContent,
  courseID: string,
  isEnrolled: boolean
}

const Player = ({ lectureData, courseID, isEnrolled }: PlayerProps) => {

  const [isWatched, setIsWatched] = useState(false)

  const { userData, setUserData } = useAuth()

  useEffect(() => {

    if (!isEnrolled) return;
    if (!userData) return;

    const indexOfCourse = userData?.enrollments.findIndex(product => product.courseID === courseID)

    const isLectureWatched = userData?.enrollments[indexOfCourse].watchedLecture.some(lecture => lectureData.lectureId === lecture)

    setIsWatched(isLectureWatched)

  }, [lectureData])

  const handleAddToWatched = async () => {

    if (!userData) return;

    // eslint-disable-next-line
    const cloneArray: EnroledData[] = [...userData?.enrollments]

    const indexOfCourse = cloneArray.findIndex(product => product.courseID === courseID)

    if (indexOfCourse === -1) return;

    cloneArray[indexOfCourse].watchedLecture = [...cloneArray[indexOfCourse].watchedLecture, lectureData.lectureId]

    try {

      const { error } = await supabase
        .from('profiles')
        .update({ enrollments: cloneArray })
        .eq('id', userData.id)

      if (error) throw error

      toast.success('با موفقیت انجام شد')
      setUserData(prev => {
        if (!prev) return prev;
        return { ...prev, enrollments: cloneArray }
      })
      setIsWatched(true)

    } catch (error) {

      console.log(error);
      toast.error('حطای ناشناخته')

    }

  }

  return (
    <div className="dir flex flex-col gap-6 p-4 lg:p-6">

      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <p className="text-sm text-cyan-600 font-medium mb-2">
          در حال مشاهده
        </p>

        <h1 className="font-MTNIrancell-Bold text-2xl text-gray-800 leading-relaxed">
          {lectureData.lectureTitle}
        </h1>
      </div>

      {/* Video */}
      <div className="relative overflow-hidden rounded-3xl shadow-xl bg-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none z-10" />

        <video
          controls
          key={lectureData.lectureId}
          className="w-full h-[250px] md:h-[400px] lg:h-[550px] object-contain"
        >
          <source
            src={lectureData.lectureUrl}
            type="video/mp4"
          />
        </video>
      </div>

      {/* Actions */}
      {isEnrolled && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <div className="flex items-center justify-between flex-wrap gap-4">

            <div>
              <h3 className="font-medium text-gray-800">
                وضعیت مشاهده درس
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                پس از مشاهده کامل، این درس را به عنوان تماشا شده ثبت کنید.
              </p>
            </div>

            {isWatched ? (
              <div
                className="flex items-center gap-2 bg-blue-400 cursor-not-allowed text-white px-5 py-3 rounded-xl transition-all duration-300"
              >
                <IoCheckmarkCircleOutline size={22} />
                <span>شما این جلسه را تماشا کرده اید</span>
              </div>
            ) : (
              <button
                onClick={handleAddToWatched}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl transition-all duration-300"
              >
                <IoCheckmarkCircleOutline size={22} />
                <span>علامت‌گذاری به عنوان تماشا شده</span>
              </button>
            )}

          </div>
        </div>
      )}

    </div>
  )
}

export default Player