import { MdDelete } from "react-icons/md";
import { HiOutlinePlay } from "react-icons/hi";
import type { CourseContent } from "../../Types";

type Props = {
    chapterData: CourseContent
    index?: number
}

const AddCourseChapter = ({
    chapterData,
    index = 0
}: Props) => {

    return (

        <div
            className="group rounded-3xl bg-white border border-cyan-100 overflow-hidden hover:shadow-xl transition">

            {/* Header */}

            <div
                className=" flex justify-between items-center px-5 py-5 bg-gradient-to-r from-cyan-50 to-white border-b">

                <div
                    className=" flex items-center gap-4">

                    <div
                        className=" w-11 h-11 rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                    </div>

                    <div>

                        <h4 className="  text-lg  text-slate-800  font-MTNIrancell-Bold ">
                            {chapterData.chapterTitle}
                        </h4>

                        <p className="text-sm text-slate-500 mt-1">
                            {chapterData.chapterContent.length}
                            {" "}
                            جلسه
                        </p>

                    </div>

                </div>

                <button className=" w-11 h-11 rounded-xl bg-red-50 hover:bg-red-100 text-red-500 flex items-center  justify-center transition">
                    <MdDelete size={22} />
                </button>

            </div>

            {/* Lectures */}

            <div className="p-4 flex flex-col gap-3">

                {chapterData.chapterContent.map((lecture) => (

                    <div
                        key={lecture.lectureId}
                        className="flex justify-between items-center rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 hover:border-cyan-200 hover:bg-cyan-50 transition">

                        <div
                            className="flex items-center gap-3">

                            <div
                                className=" w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                <HiOutlinePlay
                                    className=" text-cyan-600 "
                                    size={18}
                                />
                            </div>

                            <div>

                                <h5
                                    className=" text-slate-700 font-medium">
                                    {lecture.lectureTitle}
                                </h5>

                                <div className=" mt-1 flex gap-3 text-xs text-slate-500">

                                    <span>
                                        {lecture.lectureDuration}
                                        {" "}
                                        دقیقه
                                    </span>

                                    {lecture.isPreviewFree && (
                                        <span className=" px-2 py-1 rounded-full bg-green-100 text-green-700">
                                            رایگان
                                        </span>
                                    )}

                                </div>

                            </div>

                        </div>

                        <button className=" text-red-500 hover:bg-red-50 p-2 rounded-xl transition">
                            <MdDelete size={20} />
                        </button>

                    </div>

                ))}

            </div>

        </div>

    );
};

export default AddCourseChapter;