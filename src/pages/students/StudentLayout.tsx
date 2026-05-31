import { Outlet } from 'react-router-dom'
import { type ReactNode } from 'react'
import Navbar from '../../components/students/Navbar'
import Footer from '../../components/students/Footer'
import useAuth from '../../hooks/useAuth'
import Loading from '../../components/students/Loading'
import { Provider } from 'react-redux'
import studentStore from '../../redux/student/studentStore'
import { ToastContainer } from 'react-toastify';


const StudentLayout = (): ReactNode => {

    const { loading } = useAuth()

    return (
        <>
            <Navbar />
            {loading ? <Loading /> : <Provider store={studentStore}> <ToastContainer rtl /><Outlet /></Provider>}
            <Footer />
        </>
    )
}

export default StudentLayout