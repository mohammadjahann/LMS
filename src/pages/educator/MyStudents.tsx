import { useEffect, useMemo, useRef } from "react"
import DetailsCard from "../../components/educator/DetailsCard"
import useEducatorAuth from "../../hooks/useEducatorAuth"


const MyStudents = () => {

  const { enrollmentsData } = useEducatorAuth()


  // Calculate Stats Section Datas

  const statsDatas: { totalSell: number, topSeller: string } = useMemo(() => {

    if (!enrollmentsData) return;

    const countedEnrollment: { courseTitle: string, count: number }[] = []

    let total: number = 0

    enrollmentsData.forEach(enroll => {
      total += +enroll.cost

      const isInArray = countedEnrollment.find(item => item.courseTitle === enroll.course_title)

      if (isInArray) {
        isInArray.count += 1
      } else {
        countedEnrollment.push({ courseTitle: enroll.course_title, count: 1 })
      }

    })

    countedEnrollment.sort((a, b) => b.count - a.count)

    return { totalSell: total, topSeller: countedEnrollment[0].courseTitle }
  }, [enrollmentsData])


  // Smooth scroll to top when entered page

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  // ////////////////////////////////////


  // Debounce for Search Input

  const timeOutRef = useRef<number | null>(null)

  const handleSearchType = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value

    if (timeOutRef.current) clearTimeout(timeOutRef.current);

    timeOutRef.current = setTimeout(() => {

      console.log(value);


    }, 1000);


  }

  // //////////////////////////////////

  return (
    <div className="w-full min-h-screen dir  p-4 md:p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">

        <div>
          <h1 className="text-2xl md:text-3xl font-MTNIrancell-Bold text-slate-800">
            لیست دانشجویان
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            مدیریت و بررسی دانشجویان ثبت‌نام شده
          </p>
        </div>

        {/* Search / Filter */}
        <div className="flex items-center gap-2 w-full md:w-[350px] bg-white border border-slate-200 rounded-2xl px-3 py-2 shadow-sm">
          <input
            onChange={handleSearchType}
            type="text"
            placeholder="فیلتر بر اساس نام دوره..."
            className="w-full bg-transparent outline-none text-sm text-right text-slate-700"
          />
          <button className="px-4 py-2 bg-cyan-600 text-white rounded-xl text-sm hover:bg-cyan-700 transition">
            جستجو
          </button>
        </div>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 ">

        <DetailsCard title="کل دانشجویان" content={enrollmentsData?.length.toString()} styles="bg-white" contentStyles="text-xl" />
        <DetailsCard title='درآمد این ماه' content={statsDatas.totalSell.toLocaleString('fa-IR')} styles="bg-white" contentStyles="text-xl" />
        <DetailsCard title='پرفوش ترین دوره' content={statsDatas.topSeller} styles="bg-gradient-to-tl from-blue-400 to-cyan-500 text-white" contentStyles="text-xl" />

      </div>



    </div>
  )

}

export default MyStudents