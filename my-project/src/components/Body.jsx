import React from 'react'
import Browse from './Browse'
import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import Login from './Login';
const Body = () => {
  // routers padho routers imp hai
  const appRouter=createBrowserRouter([
   {
    path:"/",
    element:<Login/>
   },
   {
    path:"/browser",
    element:<Browse/>
   }

  ])
  return (
    <div >
  
      <RouterProvider router={appRouter}/>
      
      
    </div>
  )
}

export default Body;

