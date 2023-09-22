import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Dashboard from '../Dashboard/Dashboard';
import Main from '../Main Layout/Main';
import Profile from '../Profile/Profile';
import EditProfile from '../Profile/EditProfile';
import ProductDetails from '../Products/ProductDetails/ProductDetails';


  const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch(`https://dummyjson.com/products`)
            },
            {
                path : '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path: '/dashboard/editProfile',
                        element: <EditProfile></EditProfile>
                    }
                ]
            }
        ],
    },
  ]);


export default route;