import { createContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"
import { supabase } from "../supabase"
import { type User } from "@supabase/supabase-js"
import type { UserProfileDataType } from "../Types"

type AuthContextType = {
  user: User | null,
  loading: boolean,
  logout: () => Promise<void>,
  userData: UserProfileDataType | null,
  setUserData: Dispatch<SetStateAction<UserProfileDataType | null>>

}
// eslint-disable-next-line
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState<UserProfileDataType | null>(null)

  useEffect(() => {
    // Get curent session data
    const getSession = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
      setLoading(false)
    }

    getSession()

    // Login and logout Listener
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  //   Logout functionF

  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }


  return (
    <AuthContext.Provider value={{ user, loading, logout, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

