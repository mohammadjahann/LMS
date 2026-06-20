import React, { createContext, useReducer, useState, type Dispatch, type ReactNode } from "react"
import type { ChapterContent, CourseType } from "../Types"
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { supabase } from "../supabase";

type ActionProps =
    | { type: "SET_courseTitle"; payload: string }
    | { type: "SET_category"; payload: string }
    | { type: "SET_coursePrice"; payload: number }
    | { type: "SET_discount"; payload: number }
    | { type: "SET_courseThumbnail"; payload: string }
    | { type: "SET_courseDescription"; payload: string }
    | { type: "REMOVE_Chapter"; payload: string }
    | { type: "ADD_Chapter", payload: string }
    | {
        type: "ADD_Lecture";
        payload: {
            chapterIndex: number
            newLectureTitle: string
            newLectureDuration: string
            newLectureURL: string
            newLectureIsFree: boolean
        }
    }
    | { type: "REMOVE_Lecture"; payload: { chapterID: string, lectureID: string } }

type contextProps = {
    courseData: CourseType
    courseDataDispatch: Dispatch<ActionProps>
    validator: () => string | ReactNode
    addCourseToDatabase: () => void
    loading: boolean
}

// eslint-disable-next-line
export const AddCourseContext = createContext<contextProps | null>(null)


export const AddCourseContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [loading, setLoading] = useState<boolean>(false)

    const courseReducer = (state: CourseType, action: ActionProps) => {

        switch (action.type) {
            case "SET_courseTitle":
                return { ...state, courseTitle: action.payload };

            case "SET_category":
                return { ...state, category: action.payload };

            case "SET_coursePrice":
                return { ...state, coursePrice: action.payload }

            case "SET_discount":
                return { ...state, discount: action.payload }

            case "SET_courseThumbnail":
                return { ...state, courseThumbnail: action.payload }

            case "SET_courseDescription":
                return { ...state, courseDescription: action.payload }

            case "ADD_Chapter":
                return {
                    ...state, courseContent: [
                        ...state.courseContent,
                        {
                            chapterId: `chapter${state.courseContent.length + 1}`,
                            chapterOrder: state.courseContent.length + 1,
                            chapterTitle: action.payload,
                            chapterContent: []

                        }
                    ]

                }

            case "REMOVE_Chapter":
                return {
                    ...state,
                    courseContent: state.courseContent.filter(chapter => chapter.chapterId !== action.payload)
                }

            case "ADD_Lecture":

                // eslint-disable-next-line
                const updatedChapter: ChapterContent[] = [
                    ...state.courseContent[action.payload.chapterIndex].chapterContent,
                    {
                        lectureId: uuidv4(),
                        lectureTitle: action.payload.newLectureTitle,
                        lectureDuration: Number(action.payload.newLectureDuration),
                        lectureUrl: action.payload.newLectureURL,
                        isPreviewFree: action.payload.newLectureIsFree,
                        lectureOrder:
                            state.courseContent[action.payload.chapterIndex]
                                .chapterContent.length + 1
                    }
                ]
                // eslint-disable-next-line
                const updatedCourseContent = [
                    ...state.courseContent
                ]

                updatedCourseContent[action.payload.chapterIndex] = {
                    ...updatedCourseContent[action.payload.chapterIndex],

                    chapterContent: updatedChapter
                }

                return {
                    ...state,
                    courseContent: updatedCourseContent
                }

            case "REMOVE_Lecture":

                // eslint-disable-next-line
                const chapterIndex = state.courseContent.findIndex(chpter => chpter.chapterId === action.payload.chapterID)

                // eslint-disable-next-line
                let updatedCourseContents = [
                    ...state.courseContent
                ]

                updatedCourseContents[chapterIndex].chapterContent = updatedCourseContents[chapterIndex].chapterContent.filter(lecture => lecture.lectureId !== action.payload.lectureID)


                console.log(updatedCourseContents[chapterIndex]);

                return { ...state, courseContent: updatedCourseContents }


        }
    }

    const initialCourseData: CourseType = {
        _id: uuidv4(),
        category: "",
        courseTitle: "",
        courseDescription: "",
        coursePrice: 0,
        isPublished: false,
        discount: 0,
        courseContent: [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "معرفی دوره",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "HTML چیست ؟",
                        "lectureDuration": 600,
                        "lectureUrl": "https://caspian24.cdn.asset.aparat.com/aparat-video/6ba88fa53ead0a9770eeed684db0f05e67541479-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjZhNzYyNDZjOTNlODIyNzJmZTM1ZjQxNWQwNDJjZGIzIiwiZXhwIjoxNzgwMTAwNTc2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.N2LjqtMiHWg9bx4RnpplL4MzAPOawDznxBNLzaHNuVA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "آشنایی با ساختار صفحات",
                        "lectureDuration": 720,
                        "lectureUrl": "https://caspian24.cdn.asset.aparat.com/aparat-video/55d5a287170de1c2c3eaa88d4ac82d6b67322031-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjJmZDJkMTdlMTViMTIyM2YyY2IxN2IwNjhiZGM5Y2RlIiwiZXhwIjoxNzgwMTAwNjQxLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.g89OUt5xZDcLUIYOsawJfz24EtE4phmhEo-JSuqRCZ0",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "تگ ها",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "تگ های Heading",
                        "lectureDuration": 800,
                        "lectureUrl": "https://persian22.cdn.asset.aparat.com/aparat-video/3b9d5770876e32363d3b71fd2ec6593a67322727-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjBiMjg1NzhmMjZmMzJhY2Y4OGY0ZGU0YzQ2ZDdmMmJlIiwiZXhwIjoxNzgwMTAwNzQ4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.e7ka8cI5-HRcsngCN6lP99yKO5xzC2AnOjwx-KIvbys",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "تگ پاراگراف",
                        "lectureDuration": 850,
                        "lectureUrl": "https://persian24.cdn.asset.aparat.com/aparat-video/974ac188460fc19f3a0714df9c1c5e5d67322232-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImJiZTQ2OWFmNDJjYmFmNTQ2NWI5MzJlYjI2ZTE3ODAyIiwiZXhwIjoxNzgwMTAwNzkwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.stBOq0K3zs0jrje47wAPvLZdWtUcgvtlIFkSjJdzcno",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        educator: "",
        enrolledStudents: [],
        courseRatings: [],
        courseThumbnail: "",
    }


    const [courseData, courseDataDispatch] = useReducer(courseReducer, initialCourseData)

    const validator = (): ReactNode | string => {
        if (courseData.courseContent.length === 0) {
            return toast.error('دوره باید حداقل یک فصل داشته باشد')
        }

        if (courseData.courseDescription.trim().length < 20) {
            return toast.error('دوره باید توضیحات کافی داشته باشد')
        }

        if (courseData.coursePrice === 0) {
            return toast.error('دوره باید قیمت داشته باشد')
        }

        if (courseData.courseThumbnail.trim().length === 0) {
            return toast.error('دوره باید کاور مناسب داشته باشد')
        }

        if (courseData.courseTitle.trim().length === 0) {
            return toast.error('دوره باید عنوان داشته باشد')
        }

        return "VALID"
    }

    const addCourseToDatabase = async () => {

        setLoading(true)

        try {

            const { error } = await supabase
                .from('courses')
                .insert(courseData)

            if (error) throw error

            toast.success('دوره با موفقیت افزوده شد', {
                style: {
                    direction: 'rtl'
                }
            })

            return true

        } catch (error) {
            toast.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <AddCourseContext.Provider value={{ courseData, courseDataDispatch, validator, addCourseToDatabase, loading }}>

            {children}
        </AddCourseContext.Provider>
    )
}