import type { RouteObject } from "react-router-dom";
import Home from "./pages/students/Home";
import CourseDetails from "./pages/students/CourseDetails";
import CoursesList from "./pages/students/CoursesList";
import MyCurses from "./pages/students/MyCurses";
import Player from "./pages/students/Player";
import Loading from "./components/students/Loading";
import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import MyStudents from "./pages/educator/MyStudents";
import StudentProtected from "./pages/students/StudentProtected";
import DashBoard from "./pages/students/DashBoard";
import StudentsLogIn from "./pages/students/StudentsLogIn";
import EducatorLogIn from "./pages/educator/EducatorLogIn";

const Routes: RouteObject[] = [
    { path: '/', element: <Home /> },
    { path: '/courses-list', element: <CoursesList /> },
    { path: '/courses-list/:input', element: <CoursesList /> },
    {path:'students-login', element:<StudentsLogIn/>},
    {path:'educator-login', element:<EducatorLogIn/>},
    {
        path: '/student', element: <StudentProtected />, children: [
            { path: 'my-curses', element: <MyCurses /> },
            { path: 'dashbord', element: <DashBoard /> },
        ]
    },
    { path: '/course/:id', element: <CourseDetails /> },

    { path: '/player/:courseId', element: <Player /> },
    { path: '/loading/:path', element: <Loading /> },
    {
        path: '/educator', element: <Educator />, children: [
            { path: 'educator', element: <Dashboard /> },
            { path: 'add-course', element: <AddCourse /> },
            { path: 'my-courses', element: <MyCurses /> },
            { path: 'my-students', element: <MyStudents /> },
        ]
    },
]

export default Routes