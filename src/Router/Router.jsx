import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Orders from "../Components/Orders/Orders";
import PrivetRoute from "./PrivetRoute";
import Profile from "../Components/Profile/Profile";
import Dashboard from "../Components/Dashboard/Dashboard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/orders',
          element:<PrivetRoute> <Orders></Orders> </PrivetRoute>
        },
        {
          path:'/profile',
          element:<PrivetRoute> <Profile></Profile> </PrivetRoute>
        },
        {
          path:'/dashboard',
          element:<PrivetRoute> <Dashboard></Dashboard> </PrivetRoute>
        },
      ]
    },
  ]);

export default router;