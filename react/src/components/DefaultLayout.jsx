import { useStateContext } from '../contexts/ContextProvider'
import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'

export default function defaultLayout() {
  const {user, token, setUser, setToken, notification} = useStateContext();

if(!token){

  return <Navigate to ="/login"/>
}
const onLogout = (ev) => {
ev.preventDefault()
}
  
  return (
    <div className='text-center'>
    <aside>
    <p>{user.name}</p>
    <h1 className='p-6 text-left'>Logout</h1>
    <a href="#" onClick={onLogout}></a>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard">.................Users</Link>

    </aside>
    <Outlet/>
    </div>
  )
}
