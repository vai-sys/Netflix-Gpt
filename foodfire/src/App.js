import React from 'react';
import { createBrowserRouter,  Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer/>
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
        path: 'About',
        element: <About />, 
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