import { MdOutlineClose } from "react-icons/md";

type errorModalProps = {
    errorText: string,
    errorModalClose: () => void
}

const ErrorModal = ({ errorText, errorModalClose }: errorModalProps) => {
    return (
        <div
            className=" absolute right-2 top-20 bg-white/60 rounded-md backdrop-blur-lg px-8 py-10">

            <div className="w-full h-full relative">
                <MdOutlineClose
                    className=" absolute right-0 -top-7 cursor-pointer font-extrabold text-[20px]"
                    onClick={errorModalClose} />
                <p>{errorText}</p>
            </div>

        </div>
    )
}

export default ErrorModal