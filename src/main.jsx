import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/mainLayout/MainLayOut.jsx';
import Home from './layout/Home/Home.jsx';
import Products from './layout/Products/Products.jsx';
import Services from './layout/Services/Services.jsx';
import Contact from './layout/Contact/Contact.jsx';
import Dashboard from './layout/dashboard/Dashboard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
