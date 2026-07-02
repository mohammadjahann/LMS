import Marquee from "react-fast-marquee";
import microsoft from "../../assets/microsoft_logo.svg"
import walmart from "../../assets/walmart_logo.svg"
import accenture from "../../assets/accenture_logo.svg"
import adobe from "../../assets/adobe_logo.svg"
import paypal from "../../assets/paypal_logo.svg"

type CompanyData = {
  src: string;
  alt: string;
};

const companiesData: CompanyData[] = [
  { src: microsoft, alt: "microsoft" },
  { src: walmart, alt: "walmart" },
  { src: accenture, alt: "accenture" },
  { src: adobe, alt: "adobe" },
  { src: paypal, alt: "paypal" },
];

const Companies = () => {
  return (
    <section className="w-full overflow-hidden py-12 px-4 sm:px-10 md:px-14 lg:px-36">

      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-flex px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm">
          اعتماد برندهای مطرح
        </span>

        <h2 className="mt-5 text-3xl md:text-5xl font-MTNIrancell-Bold text-slate-900">
          هزاران دانشجو <br />
          در مسیر رشد حرفه‌ای
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-slate-500 leading-8">
          مهارت‌هایی که یاد می‌گیری بر پایه نیاز بازار کار و استاندارد شرکت‌های مطرح دنیاست.
        </p>
      </div>

      {/* Marquee */}
      <Marquee
        className=" mask"
        autoFill
        pauseOnHover
        speed={60}
        gradient={false}
      >
        <div className="flex items-center gap-2">
          {companiesData.map((company) => (
            <div
              key={company.alt}
              className="flex-shrink-0 h-[100px] w-[180px] flex items-center justify-center  bg-white/70 backdrop-blur-xl border border-slate-100  rounded-2xl shadow-sm transition hover:-translate-y-1 hover:shadow-cyan-100">
              <img
                src={company.src}
                alt={company.alt}
                className="w-[110px] opacity-70 grayscale transition hover:grayscale-0 hover:opacity-100 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Marquee>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          ["+۱۰K", "دانشجوی فعال"],
          ["+۲۰۰", "دوره آموزشی"],
          ["۹۶٪", "رضایت کاربران"],
          ["+۳۰", "مدرس متخصص"],
        ].map(([num, label]) => (
          <div
            key={label}
            className="bg-gradient-to-b from-white to-cyan-50 border rounded-2xl py-7 text-center"
          >
            <p className="text-3xl font-MTNIrancell-Bold text-cyan-700">
              {num}
            </p>
            <p className="mt-2 text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;