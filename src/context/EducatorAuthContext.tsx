import React, { createContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { EducatorProfileDataType } from "../Types";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../supabase";

type EducatorAuthContextTypes = {
    educatorData: EducatorProfileDataType | null,
    setEducatorData: Dispatch<SetStateAction<EducatorProfileDataType | null>>
    educator: User | null,
    loading: boolean,
}


//eslint-disable-next-line
export const EducatorAuthContext = createContext<EducatorAuthContextTypes | null>(null)

export const EducatorAuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [educator, setEducator] = useState<User | null>(null)
    const [educatorData, setEducatorData] = useState<EducatorProfileDataType | null>(null)
    const [loading, setLoading] = useState(false)

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


    return (
        <EducatorAuthContext.Provider value={{ educatorData, setEducatorData, educator, loading }}>
            {children}
        </EducatorAuthContext.Provider>
    )
}