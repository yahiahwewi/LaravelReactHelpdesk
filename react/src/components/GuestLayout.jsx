import { useStateContext } from '../contexts/ContextProvider'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function () {
// const token =useStateContext();
const { user, token } = useStateContext();

    if (token){

return <Navigate to ='/'/>

    }


  return (
    
    <div>

{/* <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://wallpaperaccess.com/full/5781536.jpg')]"> */}
{/* <p>for guest users only</p> */}

    
    <Outlet/>

    </div>
    
  )
}
