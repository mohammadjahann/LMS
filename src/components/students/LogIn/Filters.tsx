import type { ChangeEvent } from "react"
import type { FiltersDataTypes } from "../../../Types"

type Props = {
    filterData: FiltersDataTypes
    addFilter: (e: ChangeEvent<HTMLInputElement>) => void
    activeFilters: {
        category: 'ALL' | 'FRONT_END' | 'BACK_END',
        price: '' | 'highest' | 'lowest',
        date: '' | 'newest' | 'oldest'
    }
}

const Filters = ({ filterData, addFilter, activeFilters }: Props) => {
    return (
        <div
            className="
                w-full
                bg-slate-50
                border
                border-slate-200
                rounded-2xl
                p-4
                shadow-sm
            "
        >
            <h4
                className="text-right font-MTNIrancell-Bold text-slate-800 text-base mb-4">
                {filterData.title}
            </h4>

            <form
                name={filterData.formName}
                className=" flex flex-col gap-3"
            >
                {filterData.filters.map(filter => (
                    <label
                        key={filter.id}
                        htmlFor={filter.id}
                        className=" flex flex-row-reverse items-center justify-between cursor-pointer rounded-xl border border-slate-200  bg-white px-4  py-3 transition-all hover:border-cyan-400 hover:bg-cyan-50 ">
                        <span
                            className=" text-sm text-slate-700">
                            {filter.title}
                        </span>

                        <input
                            onChange={(e: ChangeEvent<HTMLInputElement>) => addFilter(e)}
                            id={filter.id}
                            name={filterData.inputsName}
                            type="radio"
                            value={filter.value}
                            checked={activeFilters[filterData.inputsName as keyof typeof activeFilters] === filter.value}
                            className=" h-4 w-4 accent-cyan-600 cursor-pointer" />
                    </label>
                ))}
            </form>
        </div>
    )
}

export default Filters