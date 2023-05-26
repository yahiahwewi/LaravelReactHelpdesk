import React, { Children } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/User/Login";
import Notfound from "./views/User/Notfound";
import Signup from "./views/User/Signup";
import Users from "./views/User/Users";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/guestLayout";
import Dashboard from "./views/User/Dashboard";
import Navbar from "./components/Navbar";
import EditDetails from "./views/User/EditDetails";
import ShowForm from "./views/User/ShowForm";

import EditPwd from "./views/User/EditPwd";
import Footer from "./views/User/Footer";
import Form from "./views/User/Form";
import Form2 from "./views/User/Form2";
import Ticket from "./views/User/Ticket";
import Comment from "./views/User/Comment";
import SupportLogin from "./views/Support/SupportLogin";
import SupportSignup from "./views/Support/SupportSignup";
import AdminDashboard from "./views/Support/AdminDashboard";

import SupportTicketEdit from "./views/Support/ListeTicketsSupport";
import EditTicketSupport from "./views/Support/EditTicketSupport";
import Teams from "./views/Support/AddTeam";
import TeamList from "./views/Support/TeamList";
import SupportList from "./views/Support/SupportList";
import AddSupport from "./views/Support/AddSupport";
import UsersList from "./views/Support/UsersList";
import Access from "./views/Support/Access";
import ShowTeam from "./views/Support/ShowTeam";
import EditTeam from "./views/Support/EditTeam";
import ShowSupport from "./views/Support/ShowSupport";
import EditSupport from "./views/Support/EditSupport";

// import AdminContextProvider from "./contexts/AdminContextProvider";

// import AdminLayout from "./components/AdminLayout";

const router = createBrowserRouter([



    // {
       
    //     element : <AdminContextProvider/>,
    //     children: [


          
    //         {
    //             path: '/resolveticket',
    //             element: <EditTicketSupport/>
    //           },
             
            
            
    //         {
    //             path: '/ticketlist',
    //             element: <SupportTicketEdit/>
    //           },
    //         {
    //             path: '/tools',
    //             element: <AdminDashboard/>
    //           },




    //         ]},


    {
        path:'/',
        element : <DefaultLayout/>,
        children: [

          {
            path: '/editsupport/:id',
            element: <EditSupport/>
          },


          {
            path: '/showsupport/:id',
            element: <ShowSupport/>
          },
          {
            path: '/editteam/:id',
            element: <EditTeam/>
          },
          {
            path: '/showteam/:id',
            element: <ShowTeam/>
          },

          
          {
            path: '/accesscontroller',
            element: <Access/>
          },
          {
            path: '/userslist',
            element: <UsersList/>
          },
            {
                path: '/addsupport',
                element: <AddSupport/>
              },
            {
                path: '/support',
                element: <SupportList/>
              },
            {
                path: '/teamlist',
                element: <TeamList/>
              },
          
            {
                path: '/resolveticket/:id',
                element: <EditTicketSupport/>
              },
             
            
            
            {
                path: '/ticketlist',
                element: <SupportTicketEdit/>
              },
            {
                path: '/my',
                element: <AdminDashboard/>
              },

            {
                path: '/comment',
                element: <Comment/>
              },
            {
                path: '/tickets/',
                element: <Dashboard />
              },
            {
                path: '/tickets/:id',
                element: <Ticket />
              },

            {
                path:'/list',
                element : <ShowForm/>
                },
                {
                    path:'/form2',
                    element : <Form2/>
                    },
            {
                path:'/form',
                element : <Form/>
                },
            {
                path:'/password',
                element : <EditPwd/>
                },
            {
                path:'/edit',
                element : <EditDetails/>
                },
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


            //       {
            //     path: '/addadmin',
            //     element: <SupportSignup/>
            //   },
                {
                    path:'/',
                    element : <Footer/>
                    },
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

                    {
                        path:'/admin',
                        element : <SupportLogin/>
                    },

                    {
                        path:'/',
                        element : <SupportSignup/>
                        
                        
                        
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