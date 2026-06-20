import { useState } from "react"
import useEducatorAuth from "../../hooks/useEducatorAuth"
import { supabase } from "../../supabase"
import type { CourseType } from "../../Types"
import CoursePreviewModal from "./CoursePreviewModal"


type Props = {
    courseData: CourseType,
}

const AddCourseLeft = ({ courseData }: Props) => {

    const [showPreview, setShowPreview] = useState(false)

    const { educatorData } = useEducatorAuth()

    const lectureCounter = (): number => {

        let total = 0

        courseData.courseContent.forEach(chapter => {

            chapter.chapterContent.forEach(() => total += 1)

        })

        return total
    }

    const addCourseHandler = async () => {

        try {

            const { error } = await supabase
                .from("courses")
                .insert({
                    ...courseData,
                    educator: `${educatorData?.name} ${educatorData?.family}`
                })

            if (error) throw error

            console.log('sucsess');

        } catch (error) {

            console.log(error);

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

            <button
                onClick={addCourseHandler}
                className="w-full py-4 rounded-2xl bg-cyan-600 text-white text-lg">
                ذخیره دوره
            </button>

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