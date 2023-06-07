import { createBrowserRouter } from "react-router-dom";

import Main from "./Main/Main";
import Login from "./LoginAndRegistretion/Login/Login";
import Register from "./LoginAndRegistretion/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
