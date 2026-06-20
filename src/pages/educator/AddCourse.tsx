import React, { useState } from "react";
import EducatorAddCourseHeader from "../../components/educator/EducatorAddCourseHeader";
import AddCourseLeft from "../../components/educator/AddCourseLeft";
import useAddCourseContext from "../../hooks/useAddCourseContext";
import AddCourseStructure from "../../components/educator/AddCourseStructure";

const AddCourse = () => {

  const [showAddChapterModal, setShowAddChapterModal] = useState(false)

  const { courseData, courseDataDispatch } = useAddCourseContext()


  return (
    <div
      className="font-MTNIrancell-Medium dir min-h-screen  p-4 md:p-8 relative">

      {/* Header */}

      <EducatorAddCourseHeader />

      <div className=" grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6 ">

        {/* Right */}

        <div
          className="flex flex-col gap-6">

          {/* General */}

          <section
            className=" bg-gradient-to-b  from-cyan-50 via-slate-50 to-white rounded-[30px] border border-slate-200 p-6 shadow-sm">

            <h2
              className="text-xl font-MTNIrancell-Bold mb-6">
              اطلاعات دوره
            </h2>

            <div
              className="grid md:grid-cols-2 gap-5 ">

              <div>

                <label className="text-slate-600">
                  عنوان دوره
                </label>

                <input
                  value={courseData.courseTitle}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => courseDataDispatch({ type: 'SET_courseTitle', payload: e.target.value })}
                  className=" w-full mt-2 rounded-2xl border border-slate-200 p-4 outline-none focus:border-cyan-500" />

              </div>

              <div>

                <label>
                  دسته بندی
                </label>

                <select
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => courseDataDispatch({ type: 'SET_category', payload: e.target.value })}
                  className="w-full mt-2 rounded-2xl border p-4">

                  <option value={"FRONT_END"}>
                    فرانت اند
                  </option>

                  <option value={"BACK_END"}>
                    بک اند
                  </option>

                </select>

              </div>

              <div>

                <label>
                  قیمت
                </label>

                <input
                  value={courseData.coursePrice}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => courseDataDispatch({ type: "SET_coursePrice", payload: e.target.value })}
                  className="w-full mt-2 rounded-2xl border p-4" />

              </div>

              <div>

                <label>
                  تخفیف
                </label>

                <input
                  value={courseData.discount}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => courseDataDispatch({ type: "SET_discount", payload: e.target.value })}
                  className="w-full mt-2 rounded-2xl border p-4" />

              </div>

            </div>

          </section>

          {/* Thumbnail */}

          <section
            className="bg-gradient-to-b  from-cyan-50 via-slate-50 to-white rounded-[30px] p-6 border">

            <h2
              className="text-xl font-MTNIrancell-Bold">
              تصویر دوره
            </h2>

            <label htmlFor="image"> URL  را وارد نمایید</label>
            <input
              value={courseData.courseThumbnail}
              id="image"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => courseDataDispatch({ type: "SET_courseThumbnail", payload: e.target.value })}
              className="w-full mt-2 rounded-2xl border p-4" />



          </section>

          {/* Description */}

          <section
            className="bg-gradient-to-b  from-cyan-50 via-slate-50 to-white rounded-[30px] p-6 border">

            <h2
              className=" text-xl mb-5 font-MTNIrancell-Bold">
              توضیحات دوره
            </h2>

            <textarea
              value={courseData.courseDescription}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => courseDataDispatch({ type: "SET_courseDescription", payload: e.target.value })}
              className="h-[300px] rounded-3xl border bg-slate-50 w-full p-4" />

          </section>

          {/* Course Stracture */}

          <AddCourseStructure showAddChapterModal={showAddChapterModal} setShowAddChapterModal={setShowAddChapterModal} />


        </div>

        {/* left */}

        <AddCourseLeft courseData={courseData} />

      </div >
    </div >
  )
}

export default AddCourse