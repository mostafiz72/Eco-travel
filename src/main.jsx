import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import 'animate.css';

import Home from './Home.jsx'
import Login from './Components/Security/Login.jsx';
import Register from './Components/Security/Register.jsx';
import Singleplace from './Components/AllPlacesCard/Singleplace.jsx';
import About from './Components/Pages/About.jsx';
import Camping from './Components/Pages/Camping.jsx';
import Error from './Components/Pages/Error.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import MyProfile from './Components/Profile/MyProfile.jsx';
import ForgetPassWord from './Components/ForgetPassWord/ForgetPassWord.jsx';
import UpdateProfile from './Components/Profile/UpdateProfile.jsx';
import Root from './Components/Root/Root.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bungeejumping",
        element: <About />,
      },
      {
        path: "/camping",
        element: <Camping />,
      },
      {
        path: "/profile",
        element: <MyProfile />,
      },
      {
        path: "/updata",
        element: <UpdateProfile />,
      },
      {
        path: "/forget",
        element: <ForgetPassWord />,
      },
    ],
  },

  {
    path: "/singleplace/:id",
    element: <PrivateRoute><Singleplace /></PrivateRoute>,
    loader: async ({ params }) => {
      const response = await fetch(`/AllData.json`);
      const data = await response.json();
      const singleData = data.find(d => d.id == params.id);
      return singleData
    }
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
