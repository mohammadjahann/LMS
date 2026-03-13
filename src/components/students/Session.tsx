import { useState } from "react";


const Session = ({ data }) => {

    const [showChapters, setShowChapters] = useState<boolean>(false)

    console.log(data);

    return (
        <div
            className="w-full">

            <h5
                onClick={() => { setShowChapters(prev => !prev) }}
                className=" w-full py-2 px-3 bg-gray-300 cursor-pointer border-b border-black">
                {data.seassenTitle}
            </h5>
            {showChapters && data.seassenChapters.map(chapter => {
                return <h6
                    className="bg-gray-100 py-2 pr-5 border-b border-gray-400">
                    {chapter.chapterTitle}
                </h6>
            })}

        </div>
    )
}

export default Session