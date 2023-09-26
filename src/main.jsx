/* eslint-disable no-dupe-keys */
import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
// import Errorpage from './components/ErrorPage/Errorpage';
import Home from './components/Home/Home';
import DonationDetails from './components/DonationDetails/DonationDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement:<Errorpage></Errorpage>,
    children: [
      {
        path: "/donation",
        // element: <Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/donationDetails/:id',
        element: <DonationDetails></DonationDetails>,
        loader:()=> fetch('donation.json')
      },
      {
        path:'/donation/:id',
        element:<Donation></Donation>,
        loader:()=> fetch('/donation.json')
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
