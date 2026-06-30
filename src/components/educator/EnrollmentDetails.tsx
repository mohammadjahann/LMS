import { FaUser } from "react-icons/fa"
import type { EnrolledStydentType } from "../../Types"


type Props = {
    enrollmentData: EnrolledStydentType
}

const EnrollmentDetails = ({ enrollmentData }: Props) => {
    return (
        <div className="divide-y divide-slate-100 font-MTNIrancell-Medium">

            {/* Card Item */}
            <div
                className="
                grid grid-cols-2  gap-4 items-center px-2 py-5 hover:bg-cyan-50 transition
                md:grid-cols-4 md:px-4 
                ">

                {/* User */}
                <div
                    className="
                     flex items-center gap-1
                     md:gap-3
                     ">
                    <div
                        className="
                         w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold
                         md:w-10 md:h-10
                         ">
                        <FaUser
                            className="
                            text-[12px]
                            md:text-[16px]
                            "/>
                    </div>


                    <p
                        className="
                         font-medium text-slate-800 text-[12px]
                         md:text-[16px]
                         ">
                        {enrollmentData.user_name}{" "}{enrollmentData.user_family}
                    </p>


                </div>

                {/* Course */}
                <div
                    className="
                     text-[12px] text-right text-slate-600
                     md:text-sm
                     "
                    dir="ltr">
                    {enrollmentData.course_title}
                </div>

                {/* Date */}
                <div
                    className="
                     text-[12px] text-slate-500
                     md:text-sm
                    ">
                    {new Date(enrollmentData.timestamp).toLocaleDateString('fa-IR')}
                </div>

                {/* Price */}
                <div
                    className="
                     font-medium text-slate-800 text-[12px]
                     md:text-[16px]
                     ">
                    {Number(enrollmentData.cost).toLocaleString('fa-IR')} {" "} تومان
                </div>



            </div>



        </div>
    )
}

export default EnrollmentDetails