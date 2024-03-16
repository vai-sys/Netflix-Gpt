import React from 'react';
import { createBrowserRouter,  Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import User from './components/User'
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [{ 
          path: "profile",
          element: <User />, 
        }]
      },  
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);

export { App,router};