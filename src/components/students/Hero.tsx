import SearchBar from "./SearchBar"

const Hero = () => {
  return (

    <section
      className="
       dir relative overflow- w-full bg-gradient-to-b from-cyan-100/70 via-cyan-50 to-white px-4  py-6
       sm:px-10
       md:px-14
       lg:px-36 lg:py-20
      "
    >


      <div
        className="
         relative flex flex-col-reverse lg:flex-row items-center gap-12
        ">

        {/* Text */}

        <div
          className="
           w-full text-center dir
           lg:w-[55%] lg:text-right
          "
        >

          <span
            className="
             inline-flex px-4 py-2 rounded-full bg-white/70 border border-cyan-200 text-cyan-700 text-sm
            ">
            🚀 آموزش پروژه‌محور برنامه‌نویسی
          </span>

          <h1
            className="
             mt-6 text-4xl leading-10 font-MTNIrancell-Bold text-slate-900
             md:text-5xl
            "
          >

            <span
              className="
               inline-block text-cyan-600 bg-cyan-100 px-3 rounded-2xl
              ">
              یادگیری
            </span>

            {" "}رو از امروز شروع کن

            <br />

            و مسیر شغلیت رو بساز

          </h1>

          <p
            className="
             mt-6 text-slate-500 leading-9 max-w-[700px] mx-auto 
            ">
            با آموزش‌های پروژه‌محور و فارسی، قدم‌به‌قدم
            مهارت واقعی کسب کن، پروژه بساز و آماده ورود
            به بازار کار شو.
          </p>

          {/* Search */}

          <div
            className="
             mt-8
            "
          >
            <SearchBar />
          </div>

          {/* Stats */}

          <div
            className="
             mt-10 flex flex-wrap justify-center gap-4
             lg:justify-start
            "
          >

            <div
              className="
               border bg-white/80 rounded-3xl px-6 py-4
              ">

              <p className="text-2xl font-bold text-slate-800">
                +۲۰۰
              </p>

              <span
                className="text-slate-500 text-sm"
              >
                دوره آموزشی
              </span>

            </div>

            <div
              className="   
               border bg-white/80 rounded-3xl px-6 py-4
              ">
              <p className="text-2xl font-bold text-slate-800">
                +۱۰K
              </p>

              <span
                className="text-slate-500 text-sm"
              >
                دانشجو
              </span>

            </div>

            <div
              className="
               border bg-white/80 rounded-3xl px-6 py-4
              ">
              <p className="text-2xl font-bold text-slate-800">
                +۳۰
              </p>

              <span
                className="text-slate-500 text-sm"
              >
                مدرس فعال
              </span>

            </div>

          </div>

        </div>

        {/* Image */}

        <div
          className="
           w-full relative flex justify-center
           lg:w-[45%]
          ">

          <div
            className="
             absolute inset-0 bg-cyan-200/30 blur-[100px]
            "/>

          <img
            src="./src/assets/hero.png"
            alt="hero"
            className="
             relative w-full max-w-[650px] object-contain animate-float
            "/>

        </div>

      </div>

    </section>

  )
}

export default Hero