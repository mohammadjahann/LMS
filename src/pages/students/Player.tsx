import type { ChapterContent } from "../../Types"


type PlayerProps = {
  lectureData: ChapterContent
}

const Player = ({ lectureData }: PlayerProps) => {

  return (
    <div
      className="dir flex flex-col w[90%] pr-3 pt-4 gap-2">
      <h3
        className=" font-MTNIrancell-Bold text-xl text-gray-600">
        {lectureData.lectureTitle}
      </h3>
      <div
        className="w-full h-96 rounded-xl overflow-hidden bg-gray-600">
        <video
          controls
          className=" w-full h-full object-contain rounded-lg"
          key={lectureData.lectureId}>
          <source src={lectureData.lectureUrl} type="video/mp4" className=" rounded-lg" />
        </video>
      </div>
    </div>
  )
}

export default Player