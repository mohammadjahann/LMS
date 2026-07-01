import { useEffect, useMemo, useRef, useState } from "react"
import DetailsCard from "../../components/educator/DetailsCard"
import useEducatorAuth from "../../hooks/useEducatorAuth"
import EnrollmentDetails from "../../components/educator/EnrollmentDetails"
import type { EnrolledStydentType } from "../../Types"


const MyStudents = () => {

  const [serchText, setSerchText] = useState('')
  const [curentPage, setCurentPage] = useState(1)

  const { enrollmentsData } = useEducatorAuth()

  // Search Action

  const searchResult = useMemo(() => {

    if (!enrollmentsData) return;
    if (serchText.trim().length === 0) return enrollmentsData;

    const foundedData: EnrolledStydentType[] = enrollmentsData.filter(enroll => enroll.course_title.toLowerCase().includes(serchText))

    return foundedData
  }, [serchText, enrollmentsData])


  // Pagination Action

  const paginationData = useMemo(() => {

    if (!enrollmentsData) return;
    if (!searchResult) return;

    const clone: EnrolledStydentType[] = [...searchResult]

    const showingCount = 20

    const endIndex = curentPage * showingCount

    const startIndex = endIndex - showingCount

    return clone?.splice(startIndex, endIndex)

  }, [searchResult, curentPage])

  const buttonsArray = useMemo(() => {

    if (!searchResult) return;

    const showingCount = 20

    const pages = Math.ceil(searchResult?.length / showingCount)

    const totoalPagesArray: number[] = []

    for (let i = 1; i < pages + 1; ++i) {
      totoalPagesArray.push(i)
    }

    return totoalPagesArray
  }, [searchResult])



  // Calculate Stats Section Datas

  const statsDatas: { totalSell: number, topSeller: string } | undefined = useMemo(() => {

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
  }, [curentPage])

  // ////////////////////////////////////


  // Debounce for Search Input

  const timeOutRef = useRef<number | null>(null)

  const handleSearchType = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value

    if (timeOutRef.current) clearTimeout(timeOutRef.current);

    timeOutRef.current = setTimeout(() => {

      setSerchText(value)
      setCurentPage(1)

    }, 1000);


  }

  // //////////////////////////////////

  return (
    <div className="
    w-full min-h-screen dir p-2
    md:p-8">

      {/* Header */}
      <div
        className="
        flex flex-col  justify-between gap-4 mb-8
        md:flex-row md:items-center
        ">

        <div>
          <h1
            className="
          text-xl text-center font-MTNIrancell-Bold text-slate-800
          md:text-2xl md:text-right
          ">
            لیست دانشجویان
          </h1>
          <p
            className="
           text-slate-500 text-xs text-center mt-1
            md:text-sm md:text-right
           ">
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
        <DetailsCard title='درآمد این ماه' content={statsDatas?.totalSell.toLocaleString('fa-IR')} styles="bg-white" contentStyles="text-xl" />
        <DetailsCard title='پرفوش ترین دوره' content={statsDatas?.topSeller} styles="bg-gradient-to-tl from-blue-400 to-cyan-500 text-white" contentStyles="text-xl" />

      </div>

      {/* List */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-4 gap-4 bg-slate-50 px-6 py-4 text-slate-500 text-sm font-medium">
          <span>دانشجو</span>
          <span>دوره</span>
          <span>تاریخ خرید</span>
          <span>مبلغ</span>
        </div>

        {/* Row */}
        {paginationData?.map(enroll => (
          <EnrollmentDetails key={enroll.id} enrollmentData={enroll} />
        ))}

      </div>

      {/* Data Buttons */}
      <div className="w-full flex items-center justify-center gap-1 mt-3" dir="ltr">
        {buttonsArray?.map(number => (
          <button
            key={number}
            onClick={() => setCurentPage(number)}
            className={`py-2 px-3  ${curentPage === number ? 'bg-cyan-600 text-white' : 'bg-cyan-300'} hover:bg-cyan-500 transition-all duration-100`}>
            {number}
          </button>
        ))}
      </div>

    </div>
  )

}

export default MyStudents