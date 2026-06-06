// Course Types

export type ChapterContent = {
  lectureId: string,
  lectureTitle: string,
  lectureDuration: number,
  lectureUrl: string,
  isPreviewFree: boolean,
  lectureOrder: number,
}

export type CourseContent = {
  chapterId: string,
  chapterOrder: number,
  chapterTitle: string,
  chapterContent: ChapterContent[]
}

export type CourseRatings = {
  userId: string,
  rating: number,
  _id: string,
}

export type CourseType = {
  _id: string,
  category: string
  courseTitle: string,
  courseDescription: string,
  coursePrice: number,
  isPublished: boolean,
  discount: number
  courseContent: CourseContent[]
  educator: string,
  enrolledStudents: string[],
  courseRatings: CourseRatings[],
  createdAt: string,
  updatedAt: string,
  __v: number,
  courseThumbnail: string,

}

////////////////////////////


// Filter Types

export type Filters = {
  title: string,
  value: string,
  id: string,
}


export type FiltersDataTypes = {
  title: string,
  formName: string,
  inputsName: string,
  filters: Filters[],
}

// User 

export type Checkout = {
  checkoutID: string,
  date: string,
  courses: string[]
}

export type EnroledData = {
  courseID: string,
  watchedLecture: string[]
}

export type UserProfileDataType = {
  id: string,
  name: string,
  family: string,
  phone: number,
  enrollments: EnroledData[],
  basket: string[],
  checkouts: Checkout[],
}
