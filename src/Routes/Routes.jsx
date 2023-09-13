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
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from './AdminRoute';
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from '../pages/Dashboard/Payment/Payment';
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "menu",
      element: <Menu />
    },
    {
      path: "order",
      element: <Order />
    },
    {
      path: "login",
      element: <Login />
    },
    {
      path: 'signup',
      element: <SignUp />
    },
    {
      path: 'secret',
      element: <PrivateRoute><Secret /></PrivateRoute>
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
      children: [
        {
          path: 'userhome',
          element: <UserHome />
        },
        {
          path: 'mycart',
          element: <MyCart />
        },
        {
          path: 'payment',
          element: <Payment />
        },

        
        // admin routes
        {
          path: 'adminhome',
          element: <AdminRoute><AdminHome /></AdminRoute>
        },
        {
          path: 'allusers',
          element: <AdminRoute><AllUsers /></AdminRoute>
        },
        {
          path: 'addItem',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: 'manageitems',
          element: <AdminRoute><ManageItems /></AdminRoute>
        }
      ]
    }
    ]
  }
])
