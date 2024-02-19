



import React from 'react';
import {  BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Home from './components/Home';
const App = () => {
  return <BrowserRouter>
     
     <Routes>
     <Route path='/' element={<Home/>}>
      <Route path='body' element={<Body/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='*' element={<Error/>}/>
     </Route>
     </Routes>
     
     </BrowserRouter>
}

export default App;

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children:[
//       {path:"/Body",
//     element:<Body/>},
//       {
//         path: "/About",
//         element: <About />,
//       },
//       {
//         path:"/Contact",
//         element:<Contact/>,
//       },
//     ],
//     errorElement: <Error />,
//   },
 
// ]);

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={appRouter}>
//       <App />
//     </RouterProvider>
//   </React.StrictMode>
// );


