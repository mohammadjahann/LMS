import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


const SearchBar = () => {

  const [input, setInput] = useState<string>('')

  const navigate = useNavigate()

  const searchHandler = (e: React.SubmitEvent<HTMLFormElement>): void => {

    e.preventDefault()

    navigate('/courses-list/' + input)
  }

  return (
    <form
    onSubmit={searchHandler}
      className=" max-w-xl w-full h-12 md:h-14 flex flex-row-reverse items-center bg-white border border-gray-500/80 rounded mx-auto">

      <img
        src="./src/assets/search_icon.svg" alt="search icon"
        className="w-10 md:w-auto px-3" />

      <input
      onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setInput(e.target.value)}}
        type="text" placeholder="جستجو برای دوره ها"
        className=" w-full h-full outline-none text-gray-500/80 text-right" />

      <button
        type="submit"
        className="bg-blue-600 rounded text-white px-7 md:px-10 py-2 md:py-3 mx-1">
        جستجو
      </button>
    </form>


  )
}

export default SearchBar