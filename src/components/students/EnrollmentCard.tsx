import type { CourseType } from '../../Types'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/useAppContext'

type Props = {
    course: CourseType | null
}

const EnrollmentCard = ({ course }: Props) => {



    const { ratingCalculator, courseDurationCalculator, lectureCountCalculator } = useAppContext()

    return (
        <div
            className='dir max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-md overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]'>

            <img src={course?.courseThumbnail} alt="Thumbnail" />

            <div className=' p-5'>

                <div
                    className=' flex items-center gap-2'>
                    <img
                        className=' w-3.5'
                        src={assets.time_left_clock_icon}
                        alt="time left icon" />
                    <p>
                        <span className=' text-red-400'>5 روز</span> مانده تا پایان تخفیف
                    </p>
                </div>

                <div
                    className=' font-MTNIrancell-Bold flex items-center gap-3 pt-2'>

                    <p className=' text-gray-800 text-2xl md:text-4xl'>
                        {course && (course?.coursePrice - course?.discount * course?.coursePrice / 100).toLocaleString('fa-IR')}
                    </p>
                    <p className=' line-through md:text-lg text-gray-500'>
                        {course?.coursePrice.toLocaleString('fa-IR')}
                    </p>
                    <p>
                        {course?.discount}%
                    </p>

                </div>

                <div
                    className=' flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500'>

                    <div
                        className='flex items-center gap-1'>
                        <img src={assets.star} alt="star" />
                        <p>{ratingCalculator(course?.courseRatings || [])}</p>
                    </div>

                    <div className=' h-4 w-px bg-gray-500/40'></div>

                    <div
                        className='flex items-center gap-1'>
                        <img src={assets.time_clock_icon} alt="clock" />
                        <p>{courseDurationCalculator(course?.courseContent || [])}</p>
                    </div>

                    <div className=' h-4 w-px bg-gray-500/40'></div>

                    <div
                        className='flex items-center gap-1'>
                        <img src={assets.lesson_icon} alt="book icon" />
                        <p>{lectureCountCalculator(course?.courseContent || [])} مبحث</p>
                    </div>

                </div>

                <button
                    className=' mt-4 md:mt-6 w-full py-3 bg-blue-600 text-white font-MTNIrancell-Medium rounded '>
                    افزودن به سبد خرید
                </button>

                <div className=' pt-6'>

                    <p
                        className=' text-lg md:text-xl font-MTNIrancell-Medium text-gray-800'>
                        محتوای دوره چیست ؟

                    </p>

                    <ul
                        className=' mr-4 pt-2 text-sm md:text-default list-disc text-gray-500'>
                        <li>دسترسی مادام العمر.</li>
                        <li>قدم به قدم ، آموزش پروژه محور .</li>
                        <li>قابلیت دانلود سورس کد ها .</li>
                        <li>آزمون جهت بررسی مهارت شما .</li>
                        <li>گواهی پایان دوره .</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default EnrollmentCard