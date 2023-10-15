import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainOutlet from './Components/MainOutlet/MainOutlet.jsx';
import ErrorPage from './Components/SharedPage/ErrorPage.jsx';
import Home from './Components/HomePage/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
