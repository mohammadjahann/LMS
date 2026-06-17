import { v4 as uuidv4 } from "uuid";
import type { ChapterContent, CourseType } from "../../Types"
import React, { useReducer, useState } from "react";
import AddCourseChapter from "../../components/educator/AddCourseChapter";
import { MdDownloadDone } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import EducatorAddCourseHeader from "../../components/educator/EducatorAddCourseHeader";

const AddCourse = () => {

  const [showAddChapterModal, setShowAddChapterModal] = useState(false)
  const [addChapterText, setAddChapterText] = useState<string>('')

  const initialCourseData: CourseType = {
    _id: uuidv4(),
    category: "",
    courseTitle: "",
    courseDescription: "",
    coursePrice: 0,
    isPublished: false,
    discount: 0,
    courseContent: [
    ],
    educator: "",
    enrolledStudents: [],
    courseRatings: [],
    createdAt: "",
    updatedAt: "",
    __v: 0,
    courseThumbnail: "",
  }

  type ActionProps =
    | { type: "SET_courseTitle"; payload: string }
    | { type: "SET_category"; payload: string }
    | { type: "SET_coursePrice"; payload: number }
    | { type: "SET_discount"; payload: number }
    | { type: "SET_courseThumbnail"; payload: string }
    | { type: "SET_courseDescription"; payload: string }
    | { type: "REMOVE_Chapter"; payload: string }
    | { type: "ADD_Chapter" }
    | {
      type: "ADD_Lecture";
      payload: {
        chapterIndex: number
        newLectureTitle: string
        newLectureDuration: string
        newLectureURL: string
        newLectureIsFree: boolean
      }
    };

  const courseReducer = (state: CourseType, action: ActionProps) => {

    switch (action.type) {
      case "SET_courseTitle":
        return { ...state, courseTitle: action.payload };

      case "SET_category":
        return { ...state, category: action.payload };

      case "SET_coursePrice":
        return { ...state, coursePrice: action.payload }

      case "SET_discount":
        return { ...state, discount: action.payload }

      case "SET_courseThumbnail":
        return { ...state, courseThumbnail: action.payload }

      case "SET_courseDescription":
        return { ...state, courseDescription: action.payload }

      case "ADD_Chapter":
        return {
          ...state, courseContent: [
            ...state.courseContent,
            {
              chapterId: `chapter${state.courseContent.length + 1}`,
              chapterOrder: state.courseContent.length + 1,
              chapterTitle: addChapterText,
              chapterContent: []

            }
          ]

        }

      case "REMOVE_Chapter":
        return {
          ...state,
          courseContent: state.courseContent.filter(chapter => chapter.chapterId !== action.payload)
        }

      case "ADD_Lecture":

        // eslint-disable-next-line
        const updatedChapter: ChapterContent[] = [
          ...state.courseContent[action.payload.chapterIndex].chapterContent,
          {
            lectureId: uuidv4(),
            lectureTitle: action.payload.newLectureTitle,
            lectureDuration: Number(action.payload.newLectureDuration),
            lectureUrl: action.payload.newLectureURL,
            isPreviewFree: action.payload.newLectureIsFree,
            lectureOrder:
              state.courseContent[action.payload.chapterIndex]
                .chapterContent.length + 1
          }
        ]
        // eslint-disable-next-line
        const updatedCourseContent = [
          ...state.courseContent
        ]

        updatedCourseContent[action.payload.chapterIndex] = {
          ...updatedCourseContent[action.payload.chapterIndex],

          chapterContent: updatedChapter
        }

        return {
          ...state,
          courseContent: updatedCourseContent
        }
    }
  }


  const [courseData, courseDataDispatch] = useReducer(courseReducer, initialCourseData)

  const addChapterModalCloser = () => {

    setAddChapterText('')
    setShowAddChapterModal(false)
  }

  const addNewChapter = async () => {
    await courseDataDispatch({ type: 'ADD_Chapter' })
    addChapterModalCloser()
  }

  const removeChapter = (chapterID: string) => {

    courseDataDispatch({ type: "REMOVE_Chapter", payload: chapterID })

  }

  const addLecture = (chapterID: string, newLectureTitle: string, newLectureDuration: string, newLectureURL: string, newLectureIsFree: string) => {

    const chapterIndex = courseData.courseContent.findIndex(chpter => chpter.chapterId === chapterID)

    const isFree = newLectureIsFree === 'رایگان' ? true : false


    courseDataDispatch({ type: "ADD_Lecture", payload: { chapterIndex: chapterIndex, newLectureTitle, newLectureDuration, newLectureURL, newLectureIsFree: isFree } })



  }


  console.log(courseData);

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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => courseDataDispatch({ type: "SET_coursePrice", payload: e.target.value })}
                  className="w-full mt-2 rounded-2xl border p-4" />

              </div>

              <div>

                <label>
                  تخفیف
                </label>

                <input
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
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => courseDataDispatch({ type: "SET_courseDescription", payload: e.target.value })}
              className="h-[300px] rounded-3xl border bg-slate-50 w-full p-4" />

          </section>

          <section
            className="bg-gradient-to-b from-cyan-50 via-white to-white rounded-[32px] border border-cyan-100 shadow-sm p-5 md:p-7 ">

            {/* Header */}

            <div
              className=" w-full flex flex-col gap-4 items-center justify-between pb-6 border-b border-cyan-100">

              <div className=" w-full flex gap-4 justify-between items-end">
                <div>

                  <h2
                    className="text-2xl text-slate-800 font-MTNIrancell-Bold">
                    ساختار دوره
                  </h2>

                  <p
                    className=" mt-1 text-sm text-slate-500">
                    فصل‌ها و جلسات دوره را مدیریت کنید
                  </p>

                </div>

                {!showAddChapterModal && (
                  <button
                    onClick={() => setShowAddChapterModal(true)}
                    className=" px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-cyan-500 text-white hover:scale-[1.03] active:scale-100 transition shadow-lg shadow-cyan-300/40">
                    + افزودن فصل
                  </button>
                )}
              </div>

              {/* Add Chapter Modal */}

              {showAddChapterModal && (
                <div className="w-full ">

                  <label>
                    عنوان فصل
                  </label>

                  <div className=" w-full mt-2 rounded-2xl border p-4 bg-white flex justify-between items-center">
                    <input
                      value={addChapterText}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddChapterText(e.target.value)}
                      placeholder="عنوان را وارد نمایید"
                      className=" bg-transparent outline-none " />


                    <div className=" flex gap-2">
                      <MdDownloadDone
                        onClick={addNewChapter}
                        size={20} className="text-green-600 cursor-pointer" />
                      <ImCancelCircle
                        onClick={addChapterModalCloser}
                        size={20} className="text-red-500 cursor-pointer" />
                    </div>

                  </div>

                </div>
              )}

            </div>

            {/* Chapters */}

            <div className="mt-6 flex flex-col gap-5">

              {courseData.courseContent.map((chapter, index) => (
                <AddCourseChapter
                  key={chapter.chapterId}
                  chapterData={chapter}
                  index={index}
                  removeChapter={removeChapter}
                  addLecture={addLecture}
                />
              ))}

            </div>

          </section>

        </div>

        {/* left */}

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
                <span>۳</span>
              </div>

              <div
                className="flex justify-between"
              >
                <span>جلسه</span>
                <span>۲۱</span>
              </div>

              <div
                className="flex justify-between"
              >
                <span>قیمت</span>
                <span>
                  ۴٬۹۰۰٬۰۰۰
                </span>
              </div>

            </div>

          </div>

          <button
            className="w-full py-4 rounded-2xl bg-cyan-600 text-white text-lg">
            ذخیره دوره
          </button>

          <button
            className="w-full py-4 rounded-2xl border">
            پیش نمایش
          </button>

        </aside>

      </div >
    </div >
  )
}

export default AddCourse