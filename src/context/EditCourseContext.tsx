import { createContext, useReducer, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { CourseType } from "../Types";
import { supabase } from "../supabase";
import { toast } from "react-toastify";

type ActionProps =
    { type: "SET_DATA", payload: CourseType }
    | { type: "SET_TITLE", payload: string }
    | { type: "SET_PRICE", payload: number }
    | { type: "SET_DISCOUNT", payload: number }
    | { type: "SET_THUMBNAIL", payload: string }
    | { type: "SET_DESCRTPTION", payload: string }
    | { type: "SET_DELETE_CHAPTER", payload: string }





type ContextTypes = {
    courseState: CourseType | null,
    Dispatch: Dispatch<ActionProps>
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
    updateDatabase: (courseID: string) => Promise<number>
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>,
    validator: () => ReactNode | "VALID",
    refresh: number
    setRefresh: Dispatch<SetStateAction<number>>,
}

// eslint-disable-next-line
export const EditCourseContext = createContext<ContextTypes | null>(null)

export const EditCourseContextProvider = ({ children }: { children: ReactNode }) => {

    const [showModal, setShowModal] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [refresh, setRefresh] = useState<number>(0)

    const initialState: CourseType | null = null


    const editCourseReducer = (state: CourseType | null, action: ActionProps) => {

        switch (action.type) {

            case "SET_DATA":
                return action.payload

            case "SET_TITLE":

                if (!state) return null;

                return {
                    ...state,
                    courseTitle: action.payload
                }

            case "SET_PRICE":

                if (!state) return null;

                return {
                    ...state,
                    coursePrice: action.payload
                }

            case "SET_DISCOUNT":

                if (!state) return null;

                return {
                    ...state,
                    discount: action.payload
                }

            case "SET_THUMBNAIL":

                if (!state) return null;

                return {
                    ...state,
                    courseThumbnail: action.payload
                }

            case "SET_DESCRTPTION":
                if (!state) return null;

                return {
                    ...state,
                    courseDescription: action.payload
                }
            case "SET_DELETE_CHAPTER":
                if (!state) return null;

                return {
                    ...state,
                    courseContent: state.courseContent.filter(chapter => chapter.chapterId !== action.payload)
                }

        }


    }

    const [courseState, Dispatch] = useReducer(editCourseReducer, initialState)

    const validator = (): ReactNode | "VALID" => {

        if (!courseState) return

        if (courseState.courseContent.length === 0) {
            toast.error('دوره باید حداقل یک فصل داشته باشد')
            return
        }

        if (courseState.courseDescription.trim().length < 20) {
            toast.error('دوره باید توضیحات کافی داشته باشد')
            return
        }

        if (courseState.coursePrice === 0) {
            toast.error('دوره باید قیمت داشته باشد')
            return
        }

        if (courseState.courseThumbnail.trim().length === 0) {
            toast.error('دوره باید کاور مناسب داشته باشد')
            return
        }

        if (courseState.courseTitle.trim().length === 0) {
            toast.error('دوره باید عنوان داشته باشد')
            return
        }

        return "VALID"
    }

    const updateDatabase = async (courseID: string): Promise<number> => {


        setLoading(true)

        let isSuccess = false

        try {
            const { error } = await supabase
                .from('courses')
                .update(courseState)
                .eq('_id', courseID)


            if (error) throw error

            isSuccess = true


        } catch (error) {

            console.log(error);

        } finally {
            setLoading(false)
        }

        if (isSuccess) {
            toast.success('به روز رسانی با موفقیت انجام شد')
            return 1
        }


        return 0

    }

    return (

        <EditCourseContext.Provider value={{ courseState, Dispatch, showModal, setShowModal, updateDatabase, loading, setLoading, validator, refresh, setRefresh }}>
            {children}
        </EditCourseContext.Provider>

    )
}