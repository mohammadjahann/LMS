import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="relative w-full overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 to-white" />
      <div className="absolute top-36 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-200/30 blur-3xl rounded-full" />

      <div className="relative flex flex-col items-center text-center gap-6 pt-20 pb-28 px-6 md:px-10 lg:px-20">

        {/* badge */}
        <span className="px-4 py-2 rounded-full bg-white/70 border border-cyan-100 text-cyan-700 text-sm shadow-sm backdrop-blur">
          یادگیری هوشمند
        </span>

        <h1 className="text-2xl md:text-4xl font-MTNIrancell-Bold text-slate-800 leading-snug">
          یادگیری مداوم، <span className="text-cyan-600">هر زمان</span>، هر کجا
        </h1>

        <p className="max-w-2xl text-slate-500 text-sm md:text-base leading-7 dir">
          آموزش آنلاین به همراه پشتیبانی مداوم از دوره‌ها، تجربه‌ای ایجاد می‌کند که
          یادگیری را سریع‌تر، عمیق‌تر و کاربردی‌تر می‌کند.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">

          <Link
            to={'courses-list'}
            className="px-10 py-3 rounded-2xl text-white  bg-gradient-to-r from-cyan-600 to-cyan-500  shadow-lg shadow-cyan-200  hover:scale-105 active:scale-100 transition">
            شروع کنید
          </Link>

          <button
            className="px-6 py-3 rounded-2xl flex items-center gap-2  text-slate-700 hover:text-cyan-600 transition">
            جزئیات بیشتر
            <img
              src="./src/assets/arrow_icon.svg"
              alt="arrow icon"
              className="w-4 h-4"
            />
          </button>

        </div>

      </div>
    </section>
  );
};

export default CallToAction;