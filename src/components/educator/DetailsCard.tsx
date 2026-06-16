

type Props = {
    title: string
    content: string | undefined
    contentStyles?: string
    styles: string
}

const DetailsCard = ({ title, content, styles, contentStyles }: Props) => {
    return (
        <div className={`bg-gradient-to-br font-MTNIrancell-Medium shadow-md  rounded-3xl p-6 ${styles}`}>

            <h3 className="text-lg">
                {title}
            </h3>

            <p
                className={`mt-4 font-bold  ${contentStyles ? contentStyles : 'text-4xl '}`}>
                {content}
            </p>

        </div>
    )
}

export default DetailsCard