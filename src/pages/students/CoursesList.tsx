import { useEffect, useReducer, useState, type ChangeEvent } from "react"
import { dummyCourses } from "../../assets/assets"
import CourseCard from "../../components/students/CourseCard"
import type { CourseType } from "../../Types"

const coursesData: CourseType[] = dummyCourses

type Filterprops = {
  category: string,
  price: string,
  date: string
}

type ActionProps = {
  type: string,
  payload: string
}

const CoursesList = () => {

  const filterReduser = (state: Filterprops, action: ActionProps) => {

    switch (action.type) {
      case 'SET_CATEGORY':
        return { ...state, category: action.payload };
      case 'SET_PRICE':
        return { ...state, price: action.payload };
      case 'SET_DATE':
        return { ...state, date: action.payload }
    }

  }

  const initialFilterState: Filterprops = {
    category: 'ALL',
    price: '',
    date: ''
  }

  const [allData, setAllData] = useState<CourseType[] | []>([])
  const [filteredData, setFilteredData] = useState<CourseType[] | []>([])
  const [activeFilters, setActiveFilters] = useReducer(filterReduser, initialFilterState)

  useEffect(() => {

    const getData = async () => {
      setAllData(coursesData)
      setFilteredData(coursesData)
    }

    getData()
  }, [])



  const addFilter = (e: ChangeEvent<HTMLFormElement>): void => {

    const { name, value } = e.target

    setActiveFilters({ type: `SET_${name.toUpperCase()}`, payload: value })

  }
  useEffect(() => {
    if (allData.length === 0) return
    let finalData = [...allData]

    // choose category 
    if (activeFilters.category !== 'all') {
      finalData = finalData.filter(
        course => course.category === activeFilters.category
      )
    }

    // Sort by price
    if (activeFilters.price === 'highest') {
      finalData.sort((a, b) => b.coursePrice - a.coursePrice)
    } else if (activeFilters.price === 'lowest') {
      finalData.sort((a, b) => a.coursePrice - b.coursePrice)
    }

    // Sort by date 
    if (activeFilters.date === 'newest') {
      finalData.sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    } else if (activeFilters.date === 'oldest') {
      finalData.sort((a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
    }


    setFilteredData(finalData)
  }, [activeFilters, allData])


  return (
    <div
      className="min-h-[100vh] md:min-h-[650px] bg-gradient-to-b from-cyan-200/70 py-3 px-3 flex flex-col-reverse md:flex-row justify-between items-start gap-3 md:gap-0">


      <div
        className=" w-[90%] md:h-[700px] md:w-[73%] overflow-auto bg-white/50 backdrop-blur-3xl shadow-xl border border-white/20  rounded-b-2xl md:rounded-none md:rounded-tl-2xl md:rounded-bl-2xl p-3 flex flex-col gap-3">

        <h3
          className="font-MTNIrancell-Bold text-[12px] md:text-[18px] text-right">
          لیست دوره ها
        </h3>
        <div
          className="flex flex-wrap flex-row-reverse justify-center items-center gap-6">

          {filteredData.length !== 0 ? filteredData.map(course => (<CourseCard courseData={course} />)) : allData.map(course => (<CourseCard courseData={course} />))}

        </div>
      </div>

      {/* Filter Section */}

      <div
        className=" md:h-[700px] w-[90%] md:w-[25%] bg-white/50 backdrop-blur-3xl shadow-sm md:shadow-lg border border-white/20 rounded-t-2xl md:rounded-t-none md:rounded-tr-2xl md:rounded-br-2xl py-5 px-4 flex flex-col items-center">

        <h3
          className=" border-b border-black w-[90%] text-center pb-1 font-MTNIrancell-Bold text-[12px] md:text-[18px]">
          اعمال فیلتر ها
        </h3>

        <div
          className=" w-[90%] flex flex-row-reverse md:flex-col items-center pt-2">

          <h4
            className=" text-center pb-1 font-MTNIrancell-Bold text-[10px] md:text-[16px] text-gray-700">
            کتگوری
          </h4>

          <form
            name="category-form"
            onChange={(e: ChangeEvent<HTMLFormElement>) => addFilter(e)}
            className=" flex w-full md:flex-col items-end px-3 border-b md:border-black pb-2 text-[8px] md:text-[14px] gap-1">
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="all">همه</label>
              <input id="all" name="category" type='radio' value={'all'} />
            </div>
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="front-end">فرانت اند</label>
              <input id="front-end" name="category" type='radio' value={'FRONT_END'} />
            </div>
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="back-end">بک اند</label>
              <input id="back-end" name="category" type='radio' value={'BACK_END'} />
            </div>
          </form>

        </div>

        <div
          className=" w-[90%] flex flex-row-reverse md:flex-col items-center pt-2">

          <h4
            className="text-center pb-1 font-MTNIrancell-Bold text-[10px] md:text-[16px] text-gray-700 ">
            قیمت
          </h4>

          <form
            onChange={(e: ChangeEvent<HTMLFormElement>) => addFilter(e)}
            name="price-form"
            className=" flex w-full md:flex-col items-end px-3 border-b md:border-black pb-2 text-[8px] md:text-[14px] gap-1">
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="highest">گران ترین</label>
              <input id="highest" name="price" type='radio' value={'highest'} />
            </div>
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="lowest">ارزان ترین</label>
              <input id="lowest" name="price" type='radio' value={'lowest'} />
            </div>

          </form>

        </div>

        <div
          className=" w-[90%] flex flex-row-reverse md:flex-col items-center justify-end pt-2">

          <h4
            className=" text-center md:pb-1 font-MTNIrancell-Bold text-[10px] md:text-[16px] text-gray-700">
            ترتیب تاریخ
          </h4>

          <form
            onChange={(e: ChangeEvent<HTMLFormElement>) => addFilter(e)}
            name="date-form"
            className=" flex w-full md:flex-col items-end px-3 border-b md:border-black pb-2 text-[8px] md:text-[14px] gap-1">
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="newest"> جدید ترین</label>
              <input id="newest" name="date" type='radio' value={'newest'} />
            </div>
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="oldest"> قدیمی ترین</label>
              <input id="oldest" name="date" type='radio' value={'oldest'} />
            </div>

          </form>

        </div>

      </div>



    </div>
  )
}

export default CoursesList