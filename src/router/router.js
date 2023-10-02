import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Car from "../Pages/Car/Car";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Car></Car>,
          loader:()=>fetch("Cardata.json")
        }
      ]
    },
  ]);