import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/static/FirstLayout";
import Landing from "../pages/auth/Landing";
import Register from "../pages/auth/Register";
import Signin from "../pages/auth/Signin";
import Layout from "../components/static/Layout";
import MainScreen from "../pages/screen/MainScreen";
import DetailScreen from "../pages/screen/DetailScreen";
import Checkout from "../pages/screen/Checkout";
import Category from "../pages/screen/Category";
import Help from "../pages/screen/Help";

export const mainRouter = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
  {
    path: "auth",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainScreen />,
      },
      {
        path: "/auth/detail",
        element: <DetailScreen />,
      },
      {
        path: "/auth/checkout",
        element: <Checkout />,
      },
      {
        path: "/auth/category",
        element: <Category />,
      },
      {
        path: "/auth/help",
        element: <Help />,
      },
    ],
  },
]);
