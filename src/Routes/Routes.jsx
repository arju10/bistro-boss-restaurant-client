import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from './../pages/SignUp/SignUp';
import Secret from './../pages/shared/Secret/Secret';
import PrivateRoute from "./PrivateRoute";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Dashboard from "../Layout/Dashboard";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[{
            path:"/",
            element:<Home/>
        },
        {
            path:"menu",
            element:<Menu/>
        },
        {
            path:"order",
            element:<Order/>
        },
        {
            path:"login",
            element:<Login/>
        },
        {
            path: 'signup',
            element: <SignUp/>
          },
          {
            path: 'secret',
            element: <PrivateRoute><Secret/></PrivateRoute>
          },
          {
            path: 'dashboard',
            element: <Dashboard/>,
            children: [
              {
                path: 'mycart', 
                element: <MyCart/>
              }
            ]
          }
    ]
    }
])
    