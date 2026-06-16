const AddCourse = () => {
  return (
    <div
      className="font-MTNIrancell-Medium dir min-h-screen  p-4 md:p-8">

      {/* Header */}

      <div
        className=" mb-8 flex flex-col lg:flex-row justify-between gap-5">

        <div>

          <h1 className="text-3xl font-MTNIrancell-Bold text-slate-800">
            افزودن دوره جدید
          </h1>

          <p
            className="text-slate-500 mt-2">
            اطلاعات دوره، فصل‌ها و جلسات را ثبت کنید
          </p>

        </div>

        <div
          className="px-5 py-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700">
          وضعیت: پیش نویس
        </div>

      </div>

      <div className=" grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">

        {/* Right */}

        <div
          className="flex flex-col gap-6">

          {/* General */}

          <section
            className=" bg-gradient-to-b  from-cyan-50 via-slate-50 to-white rounded-[30px] border border-slate-200 p-6 shadow-sm">

            <h2
              className="text-xl font-MTNIrancell-Bold mb-6">
              اطلاعات دوره
            </h2>

            <div
              className="grid md:grid-cols-2 gap-5 ">

              <div>

                <label className="text-slate-600">
                  عنوان دوره
                </label>

                <input
                  className=" w-full mt-2 rounded-2xl border border-slate-200 p-4 outline-none focus:border-cyan-500" />

              </div>

              <div>

                <label>
                  دسته بندی
                </label>

                <select
                  className="w-full mt-2 rounded-2xl border p-4">

                  <option>
                    فرانت اند
                  </option>

                  <option>
                    بک اند
                  </option>

                </select>

              </div>

              <div>

                <label>
                  قیمت
                </label>

                <input
                  className="w-full mt-2 rounded-2xl border p-4" />

              </div>

              <div>

                <label>
                  تخفیف
                </label>

                <input
                  className="w-full mt-2 rounded-2xl border p-4" />

              </div>

            </div>

          </section>

          {/* Thumbnail */}

          <section
            className="bg-gradient-to-b  from-cyan-50 via-slate-50 to-white rounded-[30px] p-6 border">

            <h2
              className="text-xl font-MTNIrancell-Bold">
              تصویر دوره
            </h2>

            <div
              className="mt-6 border-2 border-dashed rounded-3xl h-[260px] flex flex-col items-center justify-center text-slate-400">

              <span className="text-5xl">
                +
              </span>

              <p>
                آپلود تصویر
              </p>

            </div>

          </section>

          {/* Description */}

          <section
            className="bg-gradient-to-b  from-cyan-50 via-slate-50 to-white rounded-[30px] p-6 border">

            <h2
              className=" text-xl mb-5 font-MTNIrancell-Bold">
              توضیحات دوره
            </h2>

            <div
              className="h-[300px] rounded-3xl border bg-slate-50" />

          </section>

          {/* Chapters */}

          <section
            className="bg-gradient-to-b  from-cyan-50 via-slate-50 to-white rounded-[30px] p-6 border">

            <div
              className=" flex justify-between items-center">

              <h2
                className=" text-xl font-MTNIrancell-Bold">
                ساختار دوره
              </h2>

              <button
                className=" px-5 py-3 rounded-xl bg-cyan-600 text-white">
                افزودن فصل
              </button>

            </div>

            {/* Chapter */}

            <div
              className=" mt-6 rounded-3xl border p-5">

              <div
                className=" flex justify-between  mb-5">

                <input
                  placeholder="نام فصل"
                  className=" rounded-xl border p-3 flex-1" />

                <button
                  className=" px-5 text-red-500">
                  حذف
                </button>

              </div>

              {/* Lectures */}

              <div
                className="flex flex-col gap-3">

                <div
                  className=" rounded-2xl border p-4 bg-slate-50">

                  <div
                    className=" grid md:grid-cols-3 gap-4">

                    <input
                      placeholder="عنوان جلسه"
                      className=" rounded-xl border p-3 " />

                    <input
                      placeholder="لینک ویدیو"
                      className="rounded-xl border p-3 " />

                    <input
                      placeholder="مدت"
                      className="rounded-xl border p-3" />

                  </div>

                  <div
                    className=" mt-4 flex justify-between">

                    <label
                      className="flex items-center gap-2">

                      <input
                        type="checkbox"
                      />

                      پیش نمایش

                    </label>

                    <button
                      className="text-red-500">
                      حذف جلسه
                    </button>

                  </div>

                </div>

              </div>

              <button
                className="mt-5 w-full py-3 rounded-xl border border-cyan-400 text-cyan-600">
                افزودن جلسه
              </button>

            </div>

          </section>

        </div>

        {/* RIGHT */}

        <aside
          className="h-fit sticky top-5 flex flex-col gap-5 " >

          <div
            className="bg-white rounded-[30px] p-6 border">

            <h3
              className=" text-xl mb-5 font-MTNIrancell-Bold">
              خلاصه
            </h3>

            <div
              className=" space-y-4">

              <div
                className="flex justify-between"
              >
                <span>فصل</span>
                <span>۳</span>
              </div>

              <div
                className="flex justify-between"
              >
                <span>جلسه</span>
                <span>۲۱</span>
              </div>

              <div
                className="flex justify-between"
              >
                <span>قیمت</span>
                <span>
                  ۴٬۹۰۰٬۰۰۰
                </span>
              </div>

            </div>

          </div>

          <button
            className="w-full py-4 rounded-2xl bg-cyan-600 text-white text-lg">
            ذخیره دوره
          </button>

          <button
            className="w-full py-4 rounded-2xl border">
            پیش نمایش
          </button>

        </aside>

      </div>

    </div>
  )
}

export default AddCourse