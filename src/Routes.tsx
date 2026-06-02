import type { RouteObject } from "react-router-dom";
import Home from "./pages/students/Home";
import CourseDetails from "./pages/students/CourseDetails";
import CoursesList from "./pages/students/CoursesList";
import MyCurses from "./pages/students/MyCurses";
import Loading from "./components/students/Loading";
import Dashboard from "./pages/educator/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import MyStudents from "./pages/educator/MyStudents";
import StudentProtected from "./pages/students/StudentProtected";
import DashBoard from "./pages/students/DashBoard";
import StudentsLogIn from "./pages/students/StudentsLogIn";
import EducatorLogIn from "./pages/educator/EducatorLogIn";
import StudentLayout from "./pages/students/StudentLayout";
import EducatorLayout from "./pages/educator/EducatorLayout";
import Cart from "./pages/students/Cart";


const Routes: RouteObject[] = [
    {
        element: <StudentLayout />, children: [
            { path: '/', element: <Home /> },
            { path: '/courses-list', element: <CoursesList /> },
            { path: '/courses-list/:input', element: <CoursesList /> },
            { path: 'students-login', element: <StudentsLogIn /> },

            {
                path: '/student', element: <StudentProtected />, children: [
                    { path: 'my-curses', element: <MyCurses /> },
                    { path: 'dashbord', element: <DashBoard /> },
                    { path: 'cart', element: <Cart /> },
                ]
            },
            { path: '/course/:id', element: <CourseDetails /> },
            { path: '/loading/:path', element: <Loading /> },
        ]
    },
    {
        element: <EducatorLayout />, children: [
            { path: 'educator-login', element: <EducatorLogIn /> },
            { path: 'educator', element: <Dashboard /> },
            { path: 'add-course', element: <AddCourse /> },
            { path: 'my-courses', element: <MyCurses /> },
            { path: 'my-students', element: <MyStudents /> },
        ]
    },
]

export default Routes