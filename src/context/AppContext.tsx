import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { ChapterContent, CourseContent, CourseRatings } from "../Types";
import humanizrDuration from "humanize-duration"

type AppContextType = {
    isDark: boolean,
    setIsDark: Dispatch<SetStateAction<boolean>>,
    ratingCalculator: (allRatings: CourseRatings[]) => number,
    humanizeTime: (time: number) => string,
    chapterDurationCalculator: (chapters: ChapterContent[]) => number,
    courseDurationCalculator: (courseContent: CourseContent[]) => string,
    lectureCountCalculator: (chapters: CourseContent[]) => number,

}

const AppContext = createContext<null | AppContextType>(null)

type Props = {
    children: ReactNode
}

const AppContextProvider = ({ children }: Props) => {

    // function to calculate average rating of course

    const ratingCalculator = (allRatings: CourseRatings[]): number => {
        if (allRatings.length === 0) return 0;

        let totalRating: number = 0

        allRatings.forEach(rate => {
            totalRating += rate.rating
        })

        totalRating = +(totalRating / allRatings.length).toFixed(1)

        return totalRating

    }

    //Humanize time
    const humanizeTime = (time: number): string => {

        return humanizrDuration(time * 60 * 1000, { units: ['h', 'm'], language: 'fa' })

    }

    //Function to calculate course chapter time
    const chapterDurationCalculator = (chapters: ChapterContent[]): number => {
        let time = 0

        chapters.map((lecture: ChapterContent) => time += lecture.lectureDuration)

        return time
    }

    // Function to calculate course duration 

    const courseDurationCalculator = (courseContent: CourseContent[]): string => {
        let time = 0
        courseContent.forEach(course => time += chapterDurationCalculator(course.chapterContent))

        return humanizeTime(time)
    }

    // Function to calculate total numbers of chapters

    const lectureCountCalculator = (chapters: CourseContent[]): number => {

        let lectureCount = 0

        chapters.forEach(chapter => {
            chapter.chapterContent.forEach(() => ++lectureCount)
        })

        return lectureCount
    }

    const [isDark, setIsDark] = useState(false)

    return (
        <AppContext.Provider value={{ isDark, setIsDark, ratingCalculator, humanizeTime, chapterDurationCalculator, courseDurationCalculator, lectureCountCalculator }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }