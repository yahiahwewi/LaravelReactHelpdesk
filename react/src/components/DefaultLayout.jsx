import { useStateContext } from '../contexts/ContextProvider'
import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import axiosClient from '../axios-client';
import {useEffect} from "react";
import Navbar from './Navbar';

export default function defaultLayout() {
  const {user, token, setUser, setToken, notification} = useStateContext();

if(!token ){

  return <Navigate to ="/login"/>
}


// -------------bring user deatils ---------------- 
useEffect(() => {
  axiosClient.get('/user')
    .then(({data}) => {
       setUser(data)
    })
}, [])




const onLogout = (ev) => {
  ev.preventDefault()


  axiosClient.post('/logout')
    .then(() => {
      setUser({})
      setToken(null)
    })

}
  
  return (


    
    <div className=''>
    {/* <Navbar/> */}
    <Navbar/>
    <aside>
    
  {/* <a  onClick={onLogout} className="btn-logout bg-black" href="#">Logout</a> */}
          
  

    </aside>
    <Outlet/>
    </div>
  )
}
