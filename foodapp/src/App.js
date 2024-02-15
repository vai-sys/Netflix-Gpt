
// import './App.css';
// import { ReactDOM } from 'react';
// import Header from './components/Header';
// import Body from './components/Body';
// import About from './components/About';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Body/>

//     </div>
//   );
// }
// const appRouter=createBrowserRouter([
// {  path:"/",
//   element: <App/>
// },
// {  path:"/about",
//   element: <About/>
// },


// ]);
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RouterProvider router={appRouter}/>);


// export default App;



import React from 'react';
import { createRoot } from 'react-dom';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<Error/>
  },
  {
    path: '/about',
    element: <About />,
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

export default App;
