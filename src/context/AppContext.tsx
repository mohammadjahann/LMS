import { createContext, useState, type Dispatch,  type ReactNode, type SetStateAction } from "react";

type AppContextType = {
    isDark : boolean,
    setIsDark: Dispatch<SetStateAction<boolean>>
}

const AppContext = createContext<null | AppContextType>(null)

type Props = {
  children: ReactNode
}

const AppContextProvider = ({ children }: Props) => {

    const [isDark,setIsDark] = useState(false)

    return (
        <AppContext.Provider value={{isDark,setIsDark}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppContextProvider}