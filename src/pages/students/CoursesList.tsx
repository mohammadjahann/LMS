import { useEffect, useMemo, useReducer, useState, type ChangeEvent } from "react"
import { assets, filtersData } from "../../assets/assets"
import CourseCard from "../../components/students/CourseCard"
import type { CourseType, FiltersDataTypes } from "../../Types"
import Filters from "../../components/students/LogIn/Filters"
import { useAppDispatch, useAppSelector } from "../../redux/student/hooks"
import { fetchProducts } from "../../redux/student/productSlice"
import { useParams } from "react-router-dom"

const filtersDatas: FiltersDataTypes[] = filtersData

type FilterProps = {
  category: "ALL" | "FRONT_END" | "BACK_END";
  price: "" | "highest" | "lowest";
  date: "" | "newest" | "oldest";
};

type ActionProps =
  | {
    type: "SET_CATEGORY";
    payload: FilterProps["category"];
  }
  | {
    type: "SET_PRICE";
    payload: FilterProps["price"];
  }
  | {
    type: "SET_DATE";
    payload: FilterProps["date"];
  };

const CoursesList = () => {

  const filterReducer = (
    state: FilterProps,
    action: ActionProps
  ): FilterProps => {
    switch (action.type) {
      case "SET_CATEGORY":
        return {
          ...state,
          category: action.payload,
        };

      case "SET_PRICE":
        return {
          ...state,
          date: "",
          price: action.payload,
        };

      case "SET_DATE":
        return {
          ...state,
          price: "",
          date: action.payload,
        };
    }
  };

  const initialFilterState: FilterProps = {
    category: "ALL",
    price: "",
    date: "",
  };

  const { products, status } = useAppSelector(state => state.productsData)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeFilters, dispatchFilter] = useReducer(filterReducer, initialFilterState);
  const [searchInput, setSearchInput] = useState<string>('')

  const params = useParams()

  const dispatch = useAppDispatch()

  useEffect(() => {

    if (params.input) {

      // eslint-disable-next-line
      setSearchInput(params.input)

    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })


  }, [])

  useEffect(() => {
    if (status !== 'FULLFILED') {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])

  const addFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "category":
        dispatchFilter({
          type: "SET_CATEGORY",
          payload: value as FilterProps["category"],
        });
        break;

      case "price":
        dispatchFilter({
          type: "SET_PRICE",
          payload: value as FilterProps["price"],
        });
        break;

      case "date":
        dispatchFilter({
          type: "SET_DATE",
          payload: value as FilterProps["date"],
        });
        break;
    }
  };


  const courseData: CourseType[] = useMemo(() => {

    if (!products.length) return []

    let result = [...products]

    // get only published course
    result = result.filter(course => course.isPublished)

    // search
    if (searchInput.trim()) {
      result = result.filter(course =>
        course.courseTitle
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      )
    }


    if (activeFilters.category !== 'ALL') {
      result = result.filter(
        course => course.category === activeFilters.category
      )
    }

    result.sort((a, b) => {


      if (activeFilters.price === 'highest') {
        return b.coursePrice - a.coursePrice
      }

      if (activeFilters.price === 'lowest') {
        return a.coursePrice - b.coursePrice
      }


      const aDate = new Date(a.createdAt ?? 0).getTime()
      const bDate = new Date(b.createdAt ?? 0).getTime()

      if (activeFilters.date === 'newest') {
        return bDate - aDate
      }

      if (activeFilters.date === 'oldest') {
        return aDate - bDate
      }

      return 0
    })

    return result

  }, [products, searchInput, activeFilters])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 px-4 py-6 flex flex-col-reverse lg:flex-row gap-6">

      {/* Courses Section */}
      <div className="w-full lg:w-[75%] h-[750px] overflow-auto rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6">

          <div className=" flex w-full flex-col gap-2 sm:flex-row">

            {/* Search */}
            <div className="w-full lg:w-[450px] h-14 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-between px-3">

              <div className="flex items-center flex-row-reverse flex-1">

                <img
                  src={assets.search_icon}
                  alt="search"
                  className="w-9 px-2" />

                <input
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-right text-slate-700 placeholder:text-slate-400"
                  type="text"
                  placeholder="جستجو دوره" />
              </div>


            </div>

            <button
              onClick={() => setIsFilterOpen(true)}
              className=" lg:hidden w-full h-12 bg-cyan-600 text-white rounded-2xl font-medium hover:bg-cyan-700 transition">
              فیلترها
            </button>
          </div>

          {/* Title */}
          <div className="text-right w-full">
            <h2 className="font-MTNIrancell-Bold text-xl text-slate-800">
              دوره‌های آموزشی
            </h2>
            <p className="text-sm text-slate-500 dir">
              {products.length} دوره موجود است
            </p>
          </div>
        </div>

        {/* Count Bar */}
        <div className=" w-full  mb-5 flex items-center justify-between bg-cyan-50 border border-cyan-100 rounded-2xl px-4  py-3 text-slate-700">
          <span className="dir">
            {courseData?.length ?? 0} دوره یافت شد
          </span>
        </div>

        {/* Courses Grid */}
        {status === 'FULLFILED' ? (

          <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {courseData?.length > 0 && courseData?.map(course => (
              <CourseCard key={course._id} courseData={course} />
            ))}

          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-5">
            <div className=" w-16 h-16 rounded-full border-4 border-slate-200 border-t-cyan-500 animate-spin" />
            <span className="text-slate-500">
              در حال دریافت دوره‌ها...
            </span>
          </div>
        )}

      </div>

      {isFilterOpen && (
        <div
          onClick={() => setIsFilterOpen(false)}
          className="
      fixed
      inset-0
      bg-black/40
      z-40
      lg:hidden
    "
        />
      )}

      {/* Filters Section */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-[350px] bg-white z-50 p-6 overflow-y-auto transition-transform duration-300 shadow-2xl ${isFilterOpen ? "translate-x-0" : "translate-x-full"} lg:translate-x-0 lg:static lg:w-[25%] lg:max-w-none lg:h-[750px] lg:bg-white/80 lg:backdrop-blur-xl lg:rounded-3xl lg:border lg:border-white lg:shadow-[0_10px_40px_rgba(0,0,0,0.08)]`}>

        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-6 lg:hidden">

          <button
            onClick={() => setIsFilterOpen(false)}
            className=" w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-20">
            ✕
          </button>

          <h3 className="font-MTNIrancell-Bold text-lg">
            فیلترها
          </h3>

        </div>

        {/* Desktop Header */}
        <h3
          className=" hidden lg:block text-xl font-MTNIrancell-Bold text-slate-800 pb-4 border-b border-slate-200 w-full text-center">
          فیلتر دوره‌ها
        </h3>

        <div className="w-full mt-4 flex flex-col gap-3">
          {filtersDatas.map((filter, i) => (
            <Filters
              key={i}
              filterData={filter}
              addFilter={addFilter}
              activeFilters={activeFilters}
            />
          ))}
        </div>

      </div>

    </div>
  )
}

export default CoursesList