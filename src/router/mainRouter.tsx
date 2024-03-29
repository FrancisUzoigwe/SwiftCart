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
import Slick from "../pages/screen/Slick";
import PrivateRoute from "./PrivateRoute";
import ProductScreen from "../pages/screen/ProductScreen";
import AccountScreen from "../pages/screen/AccountScreen";

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
    path: "/api/:userID/:token/verify-account",
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
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
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
        path: "/auth/:productID/detail",
        element: <DetailScreen />,
      },
      {
        path: "/auth/checkout",
        element: <Checkout />,
      },
      {
        path: "/auth/detail",
        element: <Category />,
      },
      {
        path: "/auth/product",
        element: <ProductScreen />,
      },
      {
        path: "/auth/help",
        element: <Help />,
      },
      {
        path: "/auth/account",
        element: <AccountScreen />,
      },
      {
        path: "/auth/slick",
        element: <Slick />,
      },
    ],
  },
]);
