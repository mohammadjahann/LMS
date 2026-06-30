import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { useAppSelector } from "../../redux/student/hooks";

const CouresSection = () => {
  const { products, status } = useAppSelector(
    (state) => state.productsData
  );

  return (
    <section className="w-full relative overflow-hidden pt-3 pb-6 bg-gradient-to-b from-white  via-cyan-100 to-cyan-50">

      {/* decorative background blur */}

      <div className="relative flex flex-col items-center text-center px-6 md:px-16 lg:px-32">

        {/* badge */}
        <span className="px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm">
          جدیدترین دوره‌ها
        </span>

        <h2 className="mt-6 text-3xl md:text-4xl font-MTNIrancell-Bold text-slate-800">
          آموزش از بهترین اساتید
        </h2>

        <p className="mt-4 text-slate-500 max-w-2xl leading-7">
          بهترین دوره‌های پروژه‌محور در حوزه‌های مختلف برنامه‌نویسی و کسب‌وکار،
          طراحی شده برای ورود سریع به بازار کار
        </p>

        {/* courses */}
        {status === "FULLFILED" ? (
          <div className="w-full mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.slice(0, 4).map((course) => (
              <div
                key={course._id}
                className="transition hover:-translate-y-2 duration-300"
              >
                <CourseCard courseData={course} />
              </div>
            ))}

          </div>
        ) : (
          <div className="w-full mt-14 flex flex-col items-center gap-4">
            <div className="w-14 h-14 border-4 border-slate-200 border-t-cyan-500 rounded-full animate-spin" />
            <p className="text-slate-500 text-sm">در حال بارگذاری دوره‌ها...</p>
          </div>
        )}

        {/* CTA */}
        <Link
          to={"/courses-list"}
          onClick={() => scrollTo(0, 0)}
          className="mt-12 inline-flex items-center gap-2 px-8 py-3 rounded-2xl  bg-gradient-to-r from-cyan-600 to-cyan-500  text-white shadow-lg shadow-cyan-200  hover:scale-105 active:scale-100 transition">
          مشاهده همه دوره‌ها
        </Link>

      </div>
    </section>
  );
};

export default CouresSection;