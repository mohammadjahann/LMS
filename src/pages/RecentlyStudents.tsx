import { useMemo } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import useEducatorAuth from '../hooks/useEducatorAuth'

const RecentlyStudents = () => {

    const { enrollmentsData } = useEducatorAuth()

    const recentlyEnrollment = useMemo(() => {

        if (!enrollmentsData) return;

        return [...enrollmentsData].sort((a, b) => a.timestamp - b.timestamp).slice(0, 4)

    }, [enrollmentsData])

    return (
        <div
            className=" bg-white rounded-3xl p-6 border border-slate-200">

            <h2
                className=" text-xl font-MTNIrancell-Bold mb-6">
                دانشجویان اخیر
            </h2>

            <div
                className=" flex flex-col gap-4">

                {recentlyEnrollment?.map(student => (

                    <div
                        key={student.user_id}

                        className="rounded-2xl bg-slate-50 p-4 flex justify-between items-center">

                        <div
                            className="flex items-center gap-3">

                            <FaUserCircle
                                size={44}
                                className="text-cyan-600"
                            />

                            <div>

                                <p>
                                    {student.user_name}
                                    {" "}
                                    {student.user_family}
                                </p>

                                <span
                                    className="text-sm text-slate-500">
                                    {student.course_title}
                                </span>

                            </div>

                        </div>

                        <div className="flex flex-col items-end gap-2">
                            <span className=' text-[12px]'>
                                {new Date(student.timestamp).toLocaleDateString('fa-IR')}
                            </span>
                            <span className='text-emerald-600 font-MTNIrancell-Bold'>
                                {Number(student.cost).toLocaleString('fa-IR')}
                            </span>
                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default RecentlyStudents