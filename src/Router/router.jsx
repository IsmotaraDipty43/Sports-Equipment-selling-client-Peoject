import * as React from "react";

import {
  createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import AddEquipment from "../Components/AddEquipment";
import About from "../Components/About";
import Register from "../Components/Register";
import Login from "../Components/Login";
import Equipmentlist from "../Components/Equipmentlist";
import Allequipment from "../Components/Allequipment";
import PrivatRoutes from '../Router/PrivatRoutes';
import Details from "../Components/Details";
import Update from "../Components/Update";
import Error from "../Components/Error";
const router = createBrowserRouter([
    {
      path: "/",
   
      element: <HomeLayout></HomeLayout>,
    },
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path: "/addequipment",
      element: <PrivatRoutes>  <AddEquipment></AddEquipment></PrivatRoutes> ,
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/equipmentlist",
      element: <PrivatRoutes> <Equipmentlist></Equipmentlist> </PrivatRoutes>,
    },
    {
      path:"/equipment",
      element:<Allequipment></Allequipment>
    },
    {
      path:"/details/:id",
      element:<Details ></Details>,
      loader: ({ params }) => fetch(`https://sport-server-side.vercel.app/equipment/${params.id}`)
    },
    {
      path:"/equipment/details/:id",
      element:<Details ></Details>,
      loader: ({ params }) => fetch(`https://sport-server-side.vercel.app/equipment/${params.id}`)
    },
    {
      path:"/equipmentlist/update/:id",
      element:<PrivatRoutes><Update></Update> </PrivatRoutes>,
      loader: ({ params }) => fetch(`https://sport-server-side.vercel.app/equipment/${params.id}`)
    },
    {
      path: '*',
      element:<Error></Error>,
    }
  ]);

  export default router;