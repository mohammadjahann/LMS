

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 md:px-36 text-right text-white w-full pt-10">

      <div
        className="flex flex-col justify-between items-start  gap-10 md:flex-row-reverse border-b border-white/30 py-5">
          

        <div
          className="flex w-[60%] md:w-[30%] items-center flex-col md:text-right ">

          <img src="./src/assets/logo_dark.svg" alt="" />

          <p
            className="mt-6 text-center md:text-right text-sm text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, repellendus libero laborum numquam eum quidem.
          </p>
          
        </div>

        <div
          className=" font-MTNIrancell-Medium flex flex-col justify-center items-center gap-4">

          <h3 className="font-MTNIrancell-Bold text-xl">ایدمی</h3>

          <ul
            className=" text-sm font-MTNIrancell-Light text-white/80 flex flex-col items-center">

            <li className=" hover:text-yellow-100 transition-colors duration-100 cursor-pointer">خانه</li>
            <li className=" hover:text-yellow-100 transition-colors duration-100 cursor-pointer">درباره ما</li>
            <li className=" hover:text-yellow-100 transition-colors duration-100 cursor-pointer">محصولات</li>
            <li className=" hover:text-yellow-100 transition-colors duration-100 cursor-pointer">پشتیبانی</li>

          </ul>

        </div>

        <div
        className="w-[60%] md:w-[30%] flex flex-col items-center gap-5">

          <h3 className="font-MTNIrancell-Bold text-[16px]">عضویت در خبرنامه</h3>

          <span className="text-sm font-MTNIrancell-Light text-white/80">
            با عضویت در خبرنامه ما ، از اخرین مقالات ، اطلاعیه ها و تخفیف  ها برخوردار شوید
          </span>

        </div>

      </div>

      <p className=" text-left py-4 text-xs md:text-sm text-white/60">
        Copyright 2026 - Design with ❤ by Jahan
      </p>

    </footer>
  )
}

export default Footer




{/* <div
        className=" flex flex-col items-end justify-end w-full md:items-start">

          <img src="./src/assets/logo_dark.svg" alt="logo"/>

          <p
          className=" mt-6 text-center md:text-right text-sm text-white/80">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae laborum modi rerum consequuntur tenetur! Nesciunt nisi, esse repudiandae tenetur laboriosam pariatur sunt maxime, in labore quis odio, quisquam accusamus! Et?</p>

        </div> */}
