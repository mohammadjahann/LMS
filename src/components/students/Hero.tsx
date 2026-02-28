

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-20 md:pt-36 px-7 md:px-0 space-y-7 bg-gradient-to-b from-cyan-100/70 text-center">

      <h1
        className=" text-[14px] esm:text-[16px] sm:text-[20px] md:text-[32px] relative font-MTNIrancell-Bold text-gray-800 max-w-3xl mx-auto">
        آینده خود را با دوره های آموزشی مناسب ، سکه با هدف رشد و پیشرفت شما طراحی شده  
        <span
          className="text-blue-600">
                 ,تضمین کنید
        </span>
        <img
          className="md:block hidden absolute -bottom-7 right-0"
          src="./src/assets/sktech.svg" alt="sketch" />
      </h1>

      <p
      className="text-gray-500 text-[10px] esm:text-[12px] sm:text-[14px] md:text-[20px]">
         ما در کنار هم محتوا های به روز ، سطح بالا ،با پیگیری های منظم ، به روزرسانی های دائمی را فراهم میکنیم تا شما در رسیدن به اهدافتان موفق شوید</p>

    </div>
  )
}

export default Hero