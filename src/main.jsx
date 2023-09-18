import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home></Home> </div>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },

      {
        path: '/users',
        element: <Users></Users>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
