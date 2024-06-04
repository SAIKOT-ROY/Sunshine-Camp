import { createBrowserRouter } from "react-router-dom";

import Main from "../Main/Main";
import Login from "../LoginAndRegistretion/Login/Login";
import Register from "../LoginAndRegistretion/Register/Register";
import Home from "../Pages/Home/Home";
import ErrrorPage from "../Pages/ErrorPage/ErrrorPage";
import InstaructerProfile from "../Pages/InstructerProfile/InstaructerProfile";
import SelectClass from "../Pages/SelectClass/SelectClass";
import DashboardPage from "../Pages/DashboardPage/DashboardPage";
import PrivateRoute from "./PrivateRoute";
import SelectedC from "../Components/SelectedC/SelectedC";
import AllUser from "../Pages/AllUser/AllUser";
import Payments from "../Pages/Payements/Payments";
import EnrolledClass from "../Pages/EnrolledClass/EnrolledClass";
import AddClass from "../Pages/AddClass/AddClass";
import MyClass from "../Pages/MyClass/MyClass";
import ManageClass from "../Pages/ManageClass/ManageClass";
import PaymentsHistory from "../Pages/PaymentsHistory/PaymentsHistory";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrrorPage />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/instructors',
          element: <InstaructerProfile />
        },
        {
          path: '/classes',
          element: <SelectClass />
        },
        {
          path: '/dashboard',
          element: <PrivateRoute><DashboardPage /></PrivateRoute>,
          children:[
            // Users/Student Routes
            {
                path:"/dashboard/select-class",
                element: <SelectedC />
            },
            {
              path: "/dashboard/payment/:id",
              element: <PrivateRoute><Payments /></PrivateRoute>,
              loader:({params}) => fetch(`https://assignment-12-server-one-blush.vercel.app/dashboard/payment/${params.id}`)
            },
            {
              path: '/dashboard/payment-history',
              element: <PrivateRoute><PaymentsHistory /></PrivateRoute>
            },
            {
              path: "/dashboard/enrolled",
              element: <EnrolledClass />
            },
            // Admins Routes
            {
              path: "/dashboard/allUser",
              element: <AdminRoute><AllUser /></AdminRoute>
            },
            {
              path: '/dashboard/manageClass',
              element: <AdminRoute><ManageClass /></AdminRoute>
            },
            // Instructor Routes
            {
              path: '/dashboard/addClass',
              element: <InstructorRoute><AddClass /></InstructorRoute>
            },
            {
              path: '/dashboard/myClass',
              element: <InstructorRoute><MyClass /></InstructorRoute>
            },
         
          ]
        },
    ]
  },
]);
