import React, { createContext, useState, type Dispatch, type SetStateAction } from "react";
import type { EducatorProfileDataType } from "../Types";

type EducatorAuthContextTypes = {
    educatorData: EducatorProfileDataType | null,
    setEducatorData: Dispatch<SetStateAction<EducatorProfileDataType | null>>
}


//eslint-disable-next-line
export const EducatorAuthContext = createContext<EducatorAuthContextTypes | null>(null)

export const EducatorAuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [educatorData, setEducatorData] = useState<EducatorProfileDataType | null>(null)

    return (
        <EducatorAuthContext.Provider value={{ educatorData, setEducatorData }}>
            {children}
        </EducatorAuthContext.Provider>
    )
}