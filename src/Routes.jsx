import { createBrowserRouter } from "react-router-dom";

import Main from "./Main/Main";
import Login from "./LoginAndRegistretion/Login/Login";
import Register from "./LoginAndRegistretion/Register/Register";
import Home from "./Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: "/",
            element: <Home />
        }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);
