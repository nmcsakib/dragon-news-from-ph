import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../components/AuthLayoutComp/Login";
import Register from "../components/AuthLayoutComp/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "auth",
    element: <AuthLayout/>,
    children: [
      {
        path: '/auth/Login',
        element: <Login/>
      },
      {
        path: '/auth/Register',
        element: <Register/>
      }
    ]
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
