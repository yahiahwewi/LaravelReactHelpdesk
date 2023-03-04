import React, { Children } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/Login";
import Notfound from "./views/Notfound";
import Signup from "./views/Signup";
import Users from "./views/Users";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/guestLayout";
import Dashboard from "./views/Dashboard";
import Navbar from "./components/Navbar";


const router = createBrowserRouter([


    {
        path:'/',
        element : <DefaultLayout/>,
        children: [
            // {

            //     path :'/',
            //         element:<Navigate to="/users"/>
    
            //     },
            {

            path :'/',
                element:<Navigate to="/dashboard"/>

            },

            // {
            //     path:'/users',
            //     element : <Users/>
        
            //     },
                {
                    path:'/dashboard',
                    element : <Dashboard/>
            
                    }
                

     ]
    
    },

       
        
        {
            path:'/',
            element : <GuestLayout/>,
            children :[

                {
   
                    path:'/',
                    element : <Navbar/>
                    
                    
                    },
                {
   
                    path:'/login',
                    element : <Login/>
                    
                    
                    },
                    
                        
                    {
                        path:'/signup',
                        element : <Signup/>
                        
                        
                        
                    },


            ]
            
        } , 
        { 
            path:'/notfound',
                element : <Notfound/> 
            
            }
            ,
  {
    path: "*",
    element: <Notfound/>
  }





   
                    
])


export default router;