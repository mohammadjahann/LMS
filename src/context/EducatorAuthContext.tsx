import React, { createContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { ChapterContent, CourseContent, EducatorProfileDataType, EnrolledStydentType } from "../Types";
import humanizrDuration from "humanize-duration"
import type { User } from "@supabase/supabase-js";
import { supabase } from "../supabase";

type EducatorAuthContextTypes = {
    educatorData: EducatorProfileDataType | null,
    setEducatorData: Dispatch<SetStateAction<EducatorProfileDataType | null>>
    educator: User | null,
    loading: boolean,
    logout: () => void,
    enrollmentsData: EnrolledStydentType[] | null,
    setEnrollmentsData: Dispatch<SetStateAction<EnrolledStydentType[] | null>>
    courseDurationCalculator: (courseContent: CourseContent[]) => string,
}


//eslint-disable-next-line
export const EducatorAuthContext = createContext<EducatorAuthContextTypes | null>(null)

export const EducatorAuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [educator, setEducator] = useState<User | null>(null)
    const [educatorData, setEducatorData] = useState<EducatorProfileDataType | null>(null)
    const [loading, setLoading] = useState(false)
    const [enrollmentsData, setEnrollmentsData] = useState<EnrolledStydentType[] | null>(null)

    useEffect(() => {
        // Get curent session data
        const getSession = async () => {
            const { data } = await supabase.auth.getUser()
            setEducator(data.user)
            setLoading(false)
        }

        getSession()

        // Login and logout Listener
        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setEducator(session?.user ?? null)
            }
        )

        return () => {
            listener.subscription.unsubscribe()
        }
    }, [])


    const logout = async () => {
        setLoading(true)
        await supabase.auth.signOut()
        setEducator(null)
        setEducatorData(null)
        setLoading(false)
    }

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


    return (
        <EducatorAuthContext.Provider value={{ educatorData, setEducatorData, educator, loading, logout, enrollmentsData, setEnrollmentsData, courseDurationCalculator }}>
            {children}
        </EducatorAuthContext.Provider>
    )
}