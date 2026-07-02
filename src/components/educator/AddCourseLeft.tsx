import { useState } from "react"
import CoursePreviewModal from "./CoursePreviewModal"
import useAddCourseContext from "../../hooks/useAddCourseContext"
import useEducatorAuth from "../../hooks/useEducatorAuth"
import { supabase } from "../../supabase"




const AddCourseLeft = () => {

    const [showPreview, setShowPreview] = useState(false)

    const { courseData, validator, addCourseToDatabase, courseDataDispatch, loading } = useAddCourseContext()

    const { educatorData, setEducatorData } = useEducatorAuth()

    const lectureCounter = (): number => {

        let total = 0

        courseData.courseContent.forEach(chapter => {

            chapter.chapterContent.forEach(() => total += 1)

        })

        return total
    }

    const publishCourse = async () => {

        const isValid = validator()

        if (isValid === "VALID") {

            const courseAdded = await addCourseToDatabase();



            const updatedCourseList = [...educatorData?.courses ?? [], courseData._id]

            await supabase
                .from('educators')
                .update({
                    courses: updatedCourseList
                })
                .eq('id', educatorData?.id)


            setEducatorData(prev => {
                if (!prev) return null
                return {
                    ...prev,
                    courses: updatedCourseList
                }
            })


            if (courseAdded) courseDataDispatch({ type: "CLEANUP" })
        }

    }


    return (
        <aside
            className="h-fit sticky top-5 flex flex-col gap-5 " >

            <div
                className="bg-white rounded-[30px] p-6 border">

                <h3
                    className=" text-xl mb-5 font-MTNIrancell-Bold">
                    خلاصه
                </h3>

                <div
                    className=" space-y-4">

                    <div
                        className="flex justify-between"
                    >
                        <span>فصل</span>
                        <span>{courseData.courseContent.length}</span>
                    </div>

                    <div
                        className="flex justify-between"
                    >
                        <span>جلسه</span>
                        <span>{lectureCounter()}</span>
                    </div>

                    <div
                        className="flex justify-between"
                    >
                        <span>قیمت</span>
                        <span>
                            {Number(courseData.coursePrice).toLocaleString('fa-IR')}
                        </span>
                    </div>

                </div>

            </div>

            {loading ? (
                <div
                    className=" w-10 sm:w-10 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin">

                </div>
            ) : (
                <button
                    onClick={publishCourse}
                    className="py-4 rounded-2xl bg-cyan-600 text-white w-full">
                    انتشار دوره
                </button>
            )}

            <button
                onClick={() => setShowPreview(true)}
                className="w-full py-4 rounded-2xl border">
                پیش نمایش
            </button>

            <CoursePreviewModal
                courseData={courseData}
                show={showPreview}
                closeModal={() => setShowPreview(false)}
            />

        </aside>
    )
}

export default AddCourseLeft