import type { ReactNode } from "react"

type Props = {
    children: ReactNode
    styles: string,
    title: string,
    data: string | number
}


const EducatorPanelBox = ({ children, styles, title, data }: Props) => {
    return (
        <div
            className={`border rounded-3xl font-MTNIrancell-Medium p-6 flex flex-col items-center md:items-start ${styles}`}>

            {children}

            <h3 className="mt-4 text-sm md:text-[18px] text-slate-500">
                {title}
            </h3>

            <p className=" text-2xl md:text-3xl font-bold mt-3 text-slate-800">
                {data}
            </p>

        </div>
    )
}

export default EducatorPanelBox