import { createContext, useReducer, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { CourseType } from "../Types";

type ActionProps =
    { type: "SET_DATA", payload: CourseType }




type ContextTypes = {
    courseState: CourseType | null,
    Dispatch: Dispatch<ActionProps>
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>
}

// eslint-disable-next-line
export const EditCourseContext = createContext<ContextTypes | null>(null)

export const EditCourseContextProvider = ({ children }: { children: ReactNode }) => {

    const [showModal, setShowModal] = useState<boolean>(false)

    const initialState: CourseType | null = null


    const editCourseReducer = (state: CourseType | null, action: ActionProps) => {

        switch (action.type) {

            case "SET_DATA":
                return action.payload


        }


    }

    const [courseState, Dispatch] = useReducer(editCourseReducer, initialState)

    return (

        <EditCourseContext.Provider value={{ courseState, Dispatch, showModal, setShowModal }}>
            {children}
        </EditCourseContext.Provider>

    )
}