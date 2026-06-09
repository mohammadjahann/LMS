import { useContext } from 'react'
import { EducatorAuthContext } from '../context/EducatorAuthContext'

const useEducatorAuth = () => {

    const context = useContext(EducatorAuthContext)

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider")
    }

    return context

}

export default useEducatorAuth