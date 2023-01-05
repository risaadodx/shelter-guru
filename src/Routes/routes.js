import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Main from "../Layout/Main";
import ComingSoon from "../Pages/Shared/CommingSoon";
import Details from "../Pages/Shared/Details";
import SearchResult from "../Pages/SearchResult";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../Pages/Checkout";
import DashboardLayout from "../Layout/DashboardLayout";
import Welcome from "../Pages/Dashboard/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/service-details",
        element: <Details />,
      },
      {
        path: "/search-result",
        element: <SearchResult />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            {" "}
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Welcome />,
      },
    ],
  },
]);

export default router;
