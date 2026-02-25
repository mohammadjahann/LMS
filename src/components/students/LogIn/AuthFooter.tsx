
type AuthFooterProps = {
modeHandler : ()=>void,
title: string,
callToAction:string
}

const AuthFooter = ({modeHandler,title,callToAction}:AuthFooterProps) => {
    return (
        <div
            className=" w-full flex justify-center items-center flex-col gap-2">

            <div className=" w-[90%] h-[1px] bg-black"></div>

            <p
                className="text-[12px]">
               {title}<span
                    onClick={() => modeHandler()}
                    className="text-blue-500 cursor-pointer">
                     {callToAction}
                </span>
            </p>

        </div>
    )
}

export default AuthFooter