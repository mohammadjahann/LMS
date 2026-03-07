

const CallToAction = () => {
  return (
    <div
      className=" bg-gradient-to-b bg-cyan-100/70 w-full flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">

      <h1
        className=" text-xl md:text-4xl text-gray-800 font-MTNIrancell-DemiBold">
        یاد گیری مداوم ، هر زمان ، هر کجا
      </h1>

      <p
        className=" text-gray-500 sm:text-sm font-MTNIrancell-Light">
        آموزش انلاین به همراه پشتیبانی مداوم از دوره ها ، امکان یادگیری با راندمان بالا را فراهم میکند تا شما بهنترین نتایج را بگیرید
      </p>

      <div
        className="flex items-center font-MTNIrancell-Medium gap-6 mt-4">

        <button
        className=" px-10 py-3 rounded-md text-white bg-blue-600">
          شروع کنید
        </button>

        <button
        className="flex items-center gap-2">
          جزئیات بیشتر <img src="./src/assets/arrow_icon.svg" alt="arrow icon" />
          </button>

      </div>


    </div>
  )
}

export default CallToAction