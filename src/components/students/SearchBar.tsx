import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IoSearch } from "react-icons/io5"

const SearchBar = () => {

  const [input, setInput] = useState("")

  const navigate = useNavigate()

  const searchHandler = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault()

    if (!input.trim()) return

    navigate("/courses-list/" + input)

  }

  return (

    <form
      onSubmit={searchHandler}
      className="
       group w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-xl border border-cyan-100 rounded-[30px] p-2 shadow-[0_20px_60px_-25px_rgba(6,182,212,0.35)] flex flex-col gap-2 transition-all duration-300 focus-within:border-cyan-400 focus-within:shadow-cyan-200
       sm:flex-row-reverse
      ">

      {/* Input */}

      <div
        className="
         flex-1 flex flex-row-reverse items-center rounded-[22px] bg-gradient-to-b from-cyan-50 to-white px-4
        ">

        <IoSearch
          className="
           text-cyan-600 text-[22px] shrink-0
          "/>

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          type="text"
          placeholder="دنبال چه دوره‌ای می‌گردی؟"

          className="
           w-full h-[58px] bg-transparent px-4 outline-none text-right text-slate-700 placeholder:text-slate-400 text-[14px] 
           md:text-[16px]
          "/>

      </div>

      {/* Button */}

      <button
        type="submit"
        className="
         h-[58px] px-8 rounded-[22px] bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-MTNIrancell-Bold shadow-lg shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition
        ">

        جستجو

      </button>

    </form>

  )
}

export default SearchBar