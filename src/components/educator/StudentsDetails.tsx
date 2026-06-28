import { FaUserCircle } from "react-icons/fa"
import type { EnrolledStydentType } from "../../Types"


type Props = {
    studentData: EnrolledStydentType
}

const StudentsDetails = ({ studentData }: Props) => {
    return (
        <div
            key={studentData.user_id}

            className="rounded-2xl bg-slate-50 p-4 flex justify-between items-center">

            <div
                className="flex items-center gap-3">

                <FaUserCircle
                    className="text-cyan-600 text-[30px]"
                />

                <div>

                    <p className=" text-[12px] md:text-[16px]">
                        {studentData.user_name}
                        {" "}
                        {studentData.user_family}
                    </p>

                    <span
                        className="text-[11px] md:text-[14px] text-slate-500">
                        {studentData.course_title}
                    </span>

                </div>

            </div>

            <div className="flex flex-col items-end gap-2">
                <span className=' text-[10px] md:text-[12px]'>
                    {new Date(studentData.timestamp).toLocaleDateString('fa-IR')}
                </span>
                <span className='text-emerald-600 font-MTNIrancell-Bold text-[10px] md:text-[16px]'>
                    {Number(studentData.cost).toLocaleString('fa-IR')}
                </span>
            </div>

        </div>
    )
}

export default StudentsDetails