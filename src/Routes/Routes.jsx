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
              element: <Payments />,
              loader:({params}) => fetch(`http://localhost:5000/dashboard/payment/${params.id}`)
            },
            {
              path: "/dashboard/enrolled",
              element: <EnrolledClass />
            },
            // Admins Routes
            {
              path: "/dashboard/allUser",
              element: <AllUser />
            },
            // Instructor Routes
            {
              path: '/dashboard/addClass',
              element: <AddClass />
            },
            {
              path: '/dashboard/myClass',
              element: <MyClass />
            },
            {
              path: '/dashboard/manageClass',
              element: <ManageClass />
            },
            {
              path: '/dashboard/payment-history',
              element: <PaymentsHistory />
            }
          ]
        },
    ]
  },
]);
