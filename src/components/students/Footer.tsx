import React from "react";

const Footer = () => {
  return (
    <footer
      className="dir bg-slate-900 text-[#ecfeff] w-full pt-12 px-6 md:px-16 lg:px-36 border-t-4 border-[#cffafe]"
      dir="rtl"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-[#cffafe]/20 pb-10">

        <div className="flex w-full md:w-1/3 flex-col items-start gap-4">
          <div className="flex items-center gap-2">

            <div className="w-10 h-10 bg-[#b7f1f6] rounded-lg flex items-center justify-center text-slate-900 font-bold text-xl">
              {"</>"}
            </div>
            <h2 className="font-MTNIrancell-Bold text-2xl text-[#cffafe]">آکادمی ایدمی</h2>
          </div>

          <p className="mt-4 text-sm text-[#ecfeff]/70 leading-loose text-justify font-MTNIrancell-Light">
            ما اینجا هستیم تا مسیر یادگیری برنامه‌نویسی را برای شما هموار کنیم.
            با آموزش‌های پروژه محور و قدم‌به‌قدم، از سطح مبتدی تا ورود به بازار
            کار در کنار شما خواهیم بود. زمان را از دست ندهید و ساختن آینده را از
            همین امروز شروع کنید.
          </p>
        </div>

        <div className="w-full md:w-1/4 flex flex-col items-start gap-5">
          <h3 className="font-MTNIrancell-Bold text-lg text-[#cffafe]">
            دسترسی سریع
          </h3>

          <ul className="text-sm font-MTNIrancell-Light text-[#ecfeff]/80 flex flex-col gap-3">
            <li className="hover:text-[#cffafe] hover:translate-x-[-4px] transition-all duration-300 cursor-pointer">
              خانه
            </li>
            <li className="hover:text-[#cffafe] hover:translate-x-[-4px] transition-all duration-300 cursor-pointer">
              دوره‌های آموزشی
            </li>
            <li className="hover:text-[#cffafe] hover:translate-x-[-4px] transition-all duration-300 cursor-pointer">
              مقالات و آموزش‌ها
            </li>
            <li className="hover:text-[#cffafe] hover:translate-x-[-4px] transition-all duration-300 cursor-pointer">
              درباره ما
            </li>
            <li className="hover:text-[#cffafe] hover:translate-x-[-4px] transition-all duration-300 cursor-pointer">
              پشتیبانی دانشجویان
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-start gap-4">
          <h3 className="font-MTNIrancell-Bold text-lg text-[#cffafe]">
            عضویت در خبرنامه
          </h3>

          <p className="text-sm font-MTNIrancell-Light text-[#ecfeff]/70 leading-relaxed">
            با عضویت در خبرنامه ما، از آخرین مقالات، دوره‌های جدید و تخفیف‌های
            ویژه زودتر از بقیه باخبر شوید.
          </p>

          <div className="flex w-full h-12 mt-2 shadow-sm">
            <input

              type="email"
              placeholder="ایمیل خود را وارد کنید..."
              className=" text-right w-full h-full px-4 bg-[#ecfeff]/10 text-[#ecfeff] placeholder-[#ecfeff]/50 outline-none rounded-r-md border border-transparent focus:border-[#cffafe] transition-colors font-sans"
              dir="rtl"
            />
            <button className="h-full px-6 bg-[#93eef6] text-slate-600 font-MTNIrancell-Bold text-sm rounded-l-md hover:bg-white transition-colors whitespace-nowrap">
              عضویت
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-6 text-xs md:text-sm text-[#ecfeff]/50 font-MTNIrancell-Light">
        <p>تمامی حقوق برای آکادمی محفوظ است.</p>
        <p className="mt-3 md:mt-0 font-sans tracking-wider" dir="ltr">
          Copyright 2026 - Design with ❤ by Jahan
        </p>
      </div>
    </footer>
  );
};

export default Footer;