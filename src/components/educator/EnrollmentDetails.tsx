import type { EnrolledStydentType } from "../../Types"


type Props = {
    enrollmentData: EnrolledStydentType
}

const EnrollmentDetails = ({ enrollmentData }: Props) => {
    return (
        <div className="divide-y divide-slate-100 font-MTNIrancell-Medium">

            {/* Card Item */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center px-6 py-5 hover:bg-cyan-50 transition">

                {/* User */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold">
                        M
                    </div>


                    <p className="font-medium text-slate-800">{enrollmentData.user_name}{" "}{enrollmentData.user_family} </p>


                </div>

                {/* Course */}
                <div className="text-slate-600 text-sm text-right" dir="ltr">
                    {enrollmentData.course_title}
                </div>

                {/* Date */}
                <div className="text-slate-500 text-sm">
                    {new Date(enrollmentData.timestamp).toLocaleDateString('fa-IR')}
                </div>

                {/* Price */}
                <div className="font-medium text-slate-800">
                    {Number(enrollmentData.cost).toLocaleString('fa-IR')} {" "} تومان
                </div>



            </div>



        </div>
    )
}

export default EnrollmentDetails