import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

type errorModalProps = {
    errorText: string,
    errorModalClose: () => void
}

const ErrorModal = ({ errorText, errorModalClose }: errorModalProps) => {

    const [isColsing, setIsColsing] = useState<boolean>(false)

    const closeModalHandler = () => {

        setIsColsing(true)

        setTimeout(() => {

            errorModalClose()

        }, 500);
    }

    return (
        <div
            className={`succsess-in absolute right-2 top-20 bg-white/60 rounded-md backdrop-blur-lg px-8 py-10 ${isColsing && 'modal-closer'}`}>

            <div className="w-full h-full relative">
                <MdOutlineClose
                    className=" absolute right-0 -top-7 cursor-pointer font-extrabold text-[20px]"
                    onClick={closeModalHandler} />
                <p>{errorText}</p>
            </div>

        </div>
    )
}

export default ErrorModal