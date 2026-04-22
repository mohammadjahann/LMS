import { useEffect, useReducer, useState, type ChangeEvent } from "react"
import { assets, dummyCourses, filtersData } from "../../assets/assets"
import CourseCard from "../../components/students/CourseCard"
import type { CourseType, FiltersDataTypes } from "../../Types"
import Filters from "../../components/students/LogIn/Filters"

const coursesData: CourseType[] = dummyCourses
const filtersDatas: FiltersDataTypes[] = filtersData

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
  const [searchInput, setSearchInput] = useState<string>('')

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
    if (activeFilters.category !== 'ََALL') {
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

  const handleSearchButtonClick = (): void => {
    const clone = [...allData]
    const result = clone.filter(course => course.courseTitle.includes(searchInput))
    setFilteredData(result)
    setSearchInput('')


  }


  return (
    <div
      className="min-h-[100vh] md:min-h-[650px] bg-gradient-to-b from-cyan-200/70 py-3 px-3 flex flex-col-reverse md:flex-row justify-between items-start gap-3 md:gap-0">


      <div
        className=" w-[90%] md:h-[700px] md:w-[73%] overflow-auto bg-white/50 backdrop-blur-3xl shadow-xl border border-white/20  rounded-b-2xl md:rounded-none md:rounded-tl-2xl md:rounded-bl-2xl p-3 flex flex-col gap-3">

        <div className="flex w-full items-center justify-between">
          <div
            className="w-[400px] h-[50px] border-[1px] border-gray-400 rounded-md flex items-center justify-between flex-row-reverse px-2">

            <div
              className="flex flex-row-reverse">

              <img
                src={assets.search_icon} alt="search icon"
                className="w-10 md:w-auto px-3" />

              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
                value={searchInput}
                className="text-right text-black bg-transparent outline-none"
                type="text" placeholder="جستجو دوره" />

            </div>

            <button
              onClick={handleSearchButtonClick}
              className=" bg-blue-500 px-3 py-2 text-white rounded-md">
              جستجو
            </button>

          </div>
          <h3
            className="font-MTNIrancell-Bold text-[12px] md:text-[18px] text-right">
            لیست دوره ها
          </h3>
        </div>
        <div
          className="flex flex-wrap flex-row-reverse justify-center items-center gap-6">

          {filteredData.length !== 0 ? filteredData.map(course => (<CourseCard key={course._id} courseData={course} />)) : allData.map(course => (<CourseCard key={course._id} courseData={course} />))}

        </div>
      </div>

      {/* Filter Section */}

      <div
        className=" md:h-[700px] w-[90%] md:w-[25%] bg-white/50 backdrop-blur-3xl shadow-sm md:shadow-lg border border-white/20 rounded-t-2xl md:rounded-t-none md:rounded-tr-2xl md:rounded-br-2xl py-5 px-4 flex flex-col items-center">

        <h3
          className=" border-b border-black w-[90%] text-center pb-1 font-MTNIrancell-Bold text-[12px] md:text-[18px]">
          اعمال فیلتر ها
        </h3>

        {filtersDatas.map((fliter, i) => {
          return <Filters key={i} filterData={fliter} addFilter={addFilter} />
        })}

      </div>



    </div>
  )
}

export default CoursesList