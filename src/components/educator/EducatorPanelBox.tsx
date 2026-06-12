import type { ReactNode } from "react"

type Props = {
    children: ReactNode
    styles: string,
    title: string,
    data: number
}


const EducatorPanelBox = ({ children, styles, title, data }: Props) => {
    return (
        <div
            className={`border rounded-3xl p-6 ${styles}`}>

            {children}

            <h3 className="mt-4 text-slate-500">
                {title}
            </h3>

            <p className=" text-4xl font-bold mt-3 text-slate-800">
                {data}
            </p>

        </div>
    )
}

export default EducatorPanelBox