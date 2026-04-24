import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { CourseRatings } from "../Types";

type AppContextType = {
    isDark: boolean,
    setIsDark: Dispatch<SetStateAction<boolean>>
    ratingCalculator: (allRatings: CourseRatings[]) => number
}

const AppContext = createContext<null | AppContextType>(null)

type Props = {
    children: ReactNode
}

const AppContextProvider = ({ children }: Props) => {

    const ratingCalculator = (allRatings: CourseRatings[]): number => {
        if (allRatings.length === 0) return 0;

        let totalRating: number = 0

        allRatings.forEach(rate => {
            totalRating += rate.rating
        })

        totalRating = +(totalRating / allRatings.length).toFixed(1)

        return totalRating

    }

    const [isDark, setIsDark] = useState(false)

    return (
        <AppContext.Provider value={{ isDark, setIsDark, ratingCalculator }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }