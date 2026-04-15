import { Outlet } from 'react-router-dom'
import { type ReactNode } from 'react'
import Navbar from '../../components/students/Navbar'
import Footer from '../../components/students/Footer'


const StudentLayout = (): ReactNode => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default StudentLayout