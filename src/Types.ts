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
  courseTitle: string,
  courseDescription: string,
  coursePrice: number,
  isPublished: boolean,
  discount: number
  courseContent: CourseContent[]
  educator: string,
  enrolledStudents: string[],
  courseRatings: CourseRatings[],
  createdAt:string,
  updatedAt:string,
  __v:number,
  courseThumbnail:string,

}
