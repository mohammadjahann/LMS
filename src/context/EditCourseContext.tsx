import { createContext, useReducer, type Dispatch, type ReactNode } from "react";
import type { CourseType } from "../Types";

type ActionProps =
    { type: "SET_DATA", payload: CourseType }




type ContextTypes = {
    courseState: CourseType | null,
    Dispatch: Dispatch<ActionProps>
}

// eslint-disable-next-line
export const EditCourseContext = createContext<ContextTypes | null>(null)

export const EditCourseContextProvider = ({ children }: { children: ReactNode }) => {

    const initialState: CourseType | null = null


    const editCourseReducer = (state: CourseType | null, action: ActionProps) => {

        switch (action.type) {

            case "SET_DATA":
                return action.payload


        }


    }

    const [courseState, Dispatch] = useReducer(editCourseReducer, initialState)

    return (

        <EditCourseContext.Provider value={{ courseState, Dispatch }}>
            {children}
        </EditCourseContext.Provider>

    )
}