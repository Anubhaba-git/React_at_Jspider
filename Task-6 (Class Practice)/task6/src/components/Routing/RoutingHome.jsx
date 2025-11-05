import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Register from './Pages/Register'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'

const RoutingHome = () => {

const routes=createBrowserRouter
([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/about",
        element:<About/>
    }
])
    
  return <RouterProvider router={routes}/>
    
}

export default RoutingHome
