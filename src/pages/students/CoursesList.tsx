import CourseCard from "../../components/students/CourseCard"


const coursesData = [
  {
    id: 245436,
    courseTitle: 'Pro React',
    author: 'Jahan abadi',
    category: 'FRONT',
    description: 'text',
    rate: 4.5,
    price: 1800000,
    courseBanner: './src/assets/course_1.png',
    seassens: [
      {
        seassenTitle: 'base', seassenChapters: [
          { chapterTitle: 'install react', chapterSrc: 'https:asd', iswatched: false },
          { chapterTitle: 'base react structure', chapterSrc: 'https:asd', iswatched: false },
        ]
      },
      {
        seassenTitle: 'how to code', seassenChapters: [
          { chapterTitle: 'jsx', chapterSrc: 'https:asd', iswatched: false },
          { chapterTitle: 'condetinalrendering', chapterSrc: 'https:asd', iswatched: false },
        ]
      },
    ]
  },
  {
    id: 4678,
    courseTitle: 'Pro React',
    author: 'Jahan abadi',
    category: 'FRONT',
    description: 'text',
    rate: 4.5,
    price: 1800000,
    courseBanner: './src/assets/course_1.png',
    seassens: [
      {
        seassenTitle: 'base', seassenChapters: [
          { chapterTitle: 'install react', chapterSrc: 'https:asd', iswatched: false },
          { chapterTitle: 'base react structure', chapterSrc: 'https:asd', iswatched: false },
        ]
      },
      {
        seassenTitle: 'how to code', seassenChapters: [
          { chapterTitle: 'jsx', chapterSrc: 'https:asd', iswatched: false },
          { chapterTitle: 'condetinalrendering', chapterSrc: 'https:asd', iswatched: false },
        ]
      },
    ]
  },
  {
    id: 7567,
    courseTitle: 'Pro React',
    author: 'Jahan abadi',
    category: 'FRONT',
    description: 'text',
    rate: 4.5,
    price: 1800000,
    courseBanner: './src/assets/course_1.png',
    seassens: [
      {
        seassenTitle: 'base', seassenChapters: [
          { chapterTitle: 'install react', chapterSrc: 'https:asd', iswatched: false },
          { chapterTitle: 'base react structure', chapterSrc: 'https:asd', iswatched: false },
        ]
      },
      {
        seassenTitle: 'how to code', seassenChapters: [
          { chapterTitle: 'jsx', chapterSrc: 'https:asd', iswatched: false },
          { chapterTitle: 'condetinalrendering', chapterSrc: 'https:asd', iswatched: false },
        ]
      },
    ]
  },
]

const CoursesList = () => {
  return (
    <div
      className="min-h-[100vh] md:h-[650px] bg-gradient-to-b from-cyan-200/70 py-3 px-3 flex flex-col-reverse md:flex-row justify-between items-start gap-3 md:gap-0">


      <div
        className=" w-[90%] md:h-[700px] md:w-[73%] overflow-auto bg-white/50 backdrop-blur-3xl shadow-xl border border-white/20  rounded-b-2xl md:rounded-none md:rounded-tl-2xl md:rounded-bl-2xl p-3 flex flex-col gap-3">

        <h3
          className="font-MTNIrancell-Bold text-[12px] md:text-[18px] text-right">
          لیست دوره ها
        </h3>
        <div
          className="flex flex-wrap justify-center items-center gap-6">

          {coursesData.map(course => (<CourseCard id={course.id} src={course.courseBanner} rating={course.rate} title={course.courseTitle} author={course.author} price={course.price} />))}

        </div>
      </div>

      {/* Filter Section */}

      <div
        className=" md:h-[700px] w-[90%] md:w-[25%] bg-white/50 backdrop-blur-3xl shadow-sm md:shadow-lg border border-white/20 rounded-t-2xl md:rounded-t-none md:rounded-tr-2xl md:rounded-br-2xl py-5 px-4 flex flex-col items-center">

        <h3
          className=" border-b border-black w-[90%] text-center pb-1 font-MTNIrancell-Bold text-[12px] md:text-[18px]">
          اعمال فیلتر ها
        </h3>

        <div
          className=" w-[90%] flex flex-row-reverse md:flex-col items-center pt-2">

          <h4
            className=" text-center pb-1 font-MTNIrancell-Bold text-[10px] md:text-[16px] text-gray-700">
            کتگوری
          </h4>

          <form
            className=" flex w-full md:flex-col items-end px-3 border-b md:border-black pb-2 text-[8px] md:text-[14px] gap-1">
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="all">همه</label>
              <input type='radio' />
            </div>
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="all">فرانت اند</label>
              <input type='radio' />
            </div>
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="all">بک اند</label>
              <input type='radio' />
            </div>
          </form>

        </div>

        <div
          className=" w-[90%] flex flex-row-reverse md:flex-col items-center pt-2">

          <h4
            className="text-center pb-1 font-MTNIrancell-Bold text-[10px] md:text-[16px] text-gray-700 ">
            قیمت
          </h4>

          <form
            className=" flex w-full md:flex-col items-end px-3 border-b md:border-black pb-2 text-[8px] md:text-[14px] gap-1">
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="all">گران ترین</label>
              <input type='radio' />
            </div>
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="all">ارزان ترین</label>
              <input type='radio' />
            </div>

          </form>

        </div>

        <div
          className=" w-[90%] flex flex-row-reverse md:flex-col items-center justify-end pt-2">

          <h4
            className=" text-center md:pb-1 font-MTNIrancell-Bold text-[10px] md:text-[16px] text-gray-700">
            ترتیب تاریخ
          </h4>

          <form
            className=" flex w-full md:flex-col items-end px-3 border-b md:border-black pb-2 text-[8px] md:text-[14px] gap-1">
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="all"> جدید ترین</label>
              <input type='radio' />
            </div>
            <div className=" flex items-center justify-center gap-2">
              <label htmlFor="all"> قدیمی ترین</label>
              <input type='radio' />
            </div>

          </form>

        </div>

      </div>



    </div>
  )
}

export default CoursesList