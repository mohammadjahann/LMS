import { useRoutes } from "react-router-dom"
import Routes from "./Routes"
import { AuthProvider } from "./context/AuthContext"
import { AppContextProvider } from "./context/AppContext"

function App() {

  const router = useRoutes(Routes)

  return (
    <>
      <AppContextProvider>
        <AuthProvider>
          {router}
        </AuthProvider>
      </AppContextProvider>
    </>
  )
}

export default App
