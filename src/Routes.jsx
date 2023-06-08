import { createBrowserRouter } from "react-router-dom";

import Main from "./Main/Main";
import Login from "./LoginAndRegistretion/Login/Login";
import Register from "./LoginAndRegistretion/Register/Register";
import Home from "./Pages/Home/Home";
import ErrrorPage from "./Pages/ErrorPage/ErrrorPage";
import InstaructerProfile from "./Pages/InstructerProfile/InstaructerProfile";


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
        }
    ]
  },
]);
