import { useMemo } from 'react'
import useEducatorAuth from '../../hooks/useEducatorAuth'
import StudentsDetails from './StudentsDetails'

const RecentlyStudents = () => {

    const { enrollmentsData } = useEducatorAuth()

    const recentlyEnrollment = useMemo(() => {

        if (!enrollmentsData) return;

        return [...enrollmentsData].sort((a, b) => a.timestamp - b.timestamp).slice(0, 4)

    }, [enrollmentsData])

    return (
        <div
            className=" bg-white rounded-3xl py-2 px-1 md:py-4 md:px-6 border border-slate-200">

            <h2
                className=" text-[16px] md:text-xl font-MTNIrancell-Bold mb-6 text-center">
                دانشجویان اخیر
            </h2>

            <div
                className=" flex flex-col gap-4">

                {recentlyEnrollment?.map(student => (

                    <StudentsDetails studentData={student} />

                ))}

            </div>

        </div>
    )
}

export default RecentlyStudents