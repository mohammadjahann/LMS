

type AuthHeaderProps = {
    title: string,
    text: string,
}

const AuthHeader = ({ title, text }: AuthHeaderProps) => {
    return (
        <div className=" w-full flex justify-center items-center flex-col gap-2">

            <h4
                className="">
               {title}
            </h4>

            <span className="text-[10px]">
                {text}
            </span>

            <div className=" w-[90%] h-[1px] bg-black"></div>

        </div>
    )
}

export default AuthHeader