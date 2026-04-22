import type { ChangeEvent } from "react"
import type { FiltersDataTypes } from "../../../Types"

type Props = {
    filterData: FiltersDataTypes
    addFilter: (e: ChangeEvent<HTMLFormElement>) => void
}

const Filters = ({ filterData, addFilter }: Props) => {


    return (
        <div
            className=" w-[90%] flex flex-row-reverse md:flex-col items-center pt-2">

            <h4
                className=" text-center pb-1 font-MTNIrancell-Bold text-[10px] md:text-[16px] text-gray-700">
                {filterData.title}
            </h4>

            <form
                name={filterData.formName}
                onChange={(e: ChangeEvent<HTMLFormElement>) => addFilter(e)}
                className=" flex w-full md:flex-col items-end px-3 border-b md:border-black pb-2 text-[8px] md:text-[14px] gap-1">
                {filterData.filters.map(filter => {
                    return (
                        <div key={filter.id} className=" flex items-center justify-center gap-2">
                            <label htmlFor={filter.id}>{filter.title}</label>
                            <input id={filter.id} name={filterData.inputsName} type='radio' value={filter.value} />
                        </div>
                    )
                })}
            </form>

        </div>
    )
}

export default Filters