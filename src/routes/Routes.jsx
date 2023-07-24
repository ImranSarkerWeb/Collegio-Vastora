import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import Colleges from "../pages/Home/Colleges/Colleges";
import Login from "../pages/Home/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Home/Login/Register";
import Details from "../pages/Home/Colleges/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/college-details",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
