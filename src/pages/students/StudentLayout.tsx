import { Outlet } from 'react-router-dom'
import { type ReactNode } from 'react'
import Navbar from '../../components/students/Navbar'
import Footer from '../../components/students/Footer'
import useAuth from '../../hooks/useAuth'
import Loading from '../../components/students/Loading'


const StudentLayout = (): ReactNode => {

    const { loading } = useAuth()

    return (
        <>
            <Navbar />
            {loading ? <Loading /> : <Outlet />}
            <Footer />
        </>
    )
}

export default StudentLayout