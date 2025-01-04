import {
    createBrowserRouter,

  } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Pages/Home";
import Allsports from "../Pages/Allsports";

import MyEquipment from "../Pages/MyEquipment";
import Authlayout from "../Layout.jsx/Authlayout";


import AddEquipment from "../Pages/AddEquipment";
import EquipmentDetails from "../Components/EquipmentDetails";

import Update from "../Components/Update";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/Errorpage";
import LoginRegister from "../Components/LoginRegister";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>,
            loader: ()=>fetch('https://athleon-server.vercel.app/equipments'),
        },
        {
            path: '/allSports',
            element: <Allsports/>,
            loader: ()=>fetch('https://athleon-server.vercel.app/allsports'),
        },
        {
          path: '/equipments/:id',
          element: <PrivateRoute><EquipmentDetails/></PrivateRoute>,
          loader: ({params})=>fetch(`https://athleon-server.vercel.app/equipments/${params.id}`)
        },
        {
          path: '/addEquipment',
          element: <PrivateRoute><AddEquipment/></PrivateRoute>,
        },
        {
          path: '/myEquipment',
          element: <PrivateRoute><MyEquipment/></PrivateRoute>,
         
         
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update/></PrivateRoute>,
          loader: ({params})=> fetch(`https://athleon-server.vercel.app/equipments/${params.id}`)
        },

        {
          path: '/auth',
          element: <Authlayout/>,
          children: [
            {
              path: '/auth/login',
              element: <LoginRegister/>
            },
            {
              path: '/auth/register',
              element: <LoginRegister/>
            }
          ]
        }
      ]
    },
  ]);

  export default router;