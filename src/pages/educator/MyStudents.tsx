import { useEffect, useRef } from "react"


const MyStudents = () => {

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const timeOutRef = useRef<number | null>(null)


  const handleSearchType = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value

    if (timeOutRef.current) clearTimeout(timeOutRef.current);

    timeOutRef.current = setTimeout(() => {

      console.log(value);


    }, 1000);


  }


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



    </div>
  )

}

export default MyStudents