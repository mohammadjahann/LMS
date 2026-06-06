import { useEffect, useState } from "react";
import Session from "../../components/students/Session";
import EnrollmentCard from "../../components/students/EnrollmentCard";
import Player from "./Player";
import { useParams } from "react-router-dom";
import type {
  ChapterContent,
  CourseType,
} from "../../Types";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/useAppContext";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/student/hooks";
import { fetchProducts } from "../../redux/student/productSlice";
import useAuth from "../../hooks/useAuth";

const CourseDetails = () => {

  const [isEnrolled, setIsEnrolled] =
    useState(false);

  const [courseData, setCourseData] =
    useState<CourseType | null>(null);

  const [playerData, setPlayerData] =
    useState<ChapterContent | null>(null);

  const { id } = useParams();

  const {
    products,
    status,
  } = useAppSelector(
    state => state.productsData
  );

  const dispatch = useAppDispatch();

  const { userData } = useAuth();

  useEffect(() => {

    if (status !== "FULLFILED") {
      dispatch(fetchProducts());
    }

    const getData =
      products.filter(
        course => course._id === id
      );

    if (!getData.length) return;

    const enrollmentData =
      userData?.enrollments.find(
        product => product.courseID === id
      );

    if (enrollmentData) {

      const clone = { ...getData[0] };

      clone.courseContent =
        getData[0].courseContent.map(
          chapter => ({
            ...chapter,
            chapterContent:
              chapter.chapterContent.map(
                lecture => ({
                  ...lecture,
                  isPreviewFree: true,
                })
              ),
          })
        );

      // eslint-disable-next-line
      setCourseData(clone);
      setIsEnrolled(true);

    } else {
      setCourseData(getData[0]);
    }

  }, [
    status,
    products,
    id,
    userData,
    dispatch,
  ]);

  const { ratingCalculator } =
    useAppContext();

  const getLectureData = (
    lectureData: ChapterContent
  ) => {

    if (!lectureData.isPreviewFree)
      return;

    setPlayerData(lectureData);
  };

  if (status !== "FULLFILED") {
    return (
      <div
        className=" min-h-screen flex flex-col items-center justify-center gap-5">
        <div
          className="w-16 h-16 rounded-full border-4 border-slate-200 border-t-cyan-500 animate-spin" />

        <p className="text-slate-500">
          در حال بارگذاری...
        </p>
      </div>
    );
  }

  return (
    <div
      className=" min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 py-8">

      <div
        className="w-[95%] xl:w-[85%] mx-auto flex flex-col lg:flex-row gap-8">

        {/* Sidebar */}

        <div
          className="w-full lg:w-[40%]">
          {playerData ? (
            <Player
              lectureData={playerData}
              courseID={courseData?._id || ""}
              isEnrolled={isEnrolled}
            />
          ) : (
            <EnrollmentCard
              course={courseData}
              isEnrolled={isEnrolled}
            />
          )}
        </div>

        {/* Content */}

        <div
          className="w-full lg:w-[60%] flex flex-col gap-6 ">

          <div
            className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 text-right">

            <h1
              className="text-3xl font-MTNIrancell-Bold text-slate-800">
              {courseData?.courseTitle}
            </h1>

            <div
              className="flex justify-end items-center gap-3 mt-5">
              <span>
                {ratingCalculator(
                  courseData?.courseRatings || []
                )}
              </span>

              <div className="flex">
                {[...Array(5)].map(
                  (_, i) => (
                    <img
                      key={i}
                      src={
                        i <
                          Math.floor(
                            ratingCalculator(
                              courseData?.courseRatings ||
                              []
                            )
                          )
                          ? assets.star
                          : assets.star_blank
                      }
                      alt=""
                      className="w-4 h-4"
                    />
                  )
                )}
              </div>
            </div>

            <div
              className="mt-5 text-slate-600 leading-8 dir"
              dangerouslySetInnerHTML={{
                __html:
                  courseData?.courseDescription || "",
              }} />

            <div
              className="dir mt-6 inline-flex items-center gap-2 bg-cyan-50 border border-cyan-100 px-4 py-2 rounded-xl">
              <span>
                مدرس:
              </span>

              <span>
                {courseData?.educator}
              </span>
            </div>

          </div>

          <div
            className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6">

            <h2
              className="text-2xl font-MTNIrancell-Bold text-right text-slate-800 mb-5">
              سرفصل‌های دوره
            </h2>

            <div
              className="flex flex-col gap-4">
              {courseData?.courseContent.map(
                chapter => (
                  <Session
                    key={
                      chapter.chapterId
                    }
                    chapter={chapter}
                    getLectureData={
                      getLectureData
                    }
                    isEnrolled={
                      isEnrolled
                    }
                  />
                )
              )}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CourseDetails;