import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function Signup() {
const nameRef = useRef();
const emailRef = useRef();
const passwordRef = useRef();
const passwordConfirmationRef = useRef();

const {setUser,setToken} =useStateContext()
  const onSubmit = (ev) => {
    ev.preventDefault()
    const payload={
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value

    }
console.log(payload);
axiosClient.post('/signup', payload)
.then(({data})=>{

setUser(user.token);
setToken(data.token);


}).catch(err=>{
  console.log(err)
const response=err.response;
if(response && response.status==422){
response.data.errors;
console.log(response.data.errors);
}


})


  };





  return (


   <div >
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://wallpaperaccess.com/full/5781536.jpg')]">
  <div className="bg-white w-96  p-14 rounded-lg shadow-lg">
    {/* <img src='\logo.png' alt="logo" className="mx-auto mb-4" /> */}
    <h1 className="text-2xl font-bold mb-4 text-center ">S'inscrire :</h1>
    <br />
    <form onSubmit={onSubmit} className="space-y-4">
      
      <div className="space-y-1 ">
        <label className="block font-medium" htmlFor="email" >Nom complet</label>
        <input ref={nameRef}  className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"  type="name" placeholder="name"/>
      </div>
      <div className="space-y-1 ">
        <label className="block font-medium" htmlFor="email" >E-mail</label>
        <input ref={emailRef} className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"  type="email" placeholder="Email"/>
      </div>
      <div className="space-y-1 ">
        <label className="block font-medium" htmlFor="email" >Password</label>
        <input ref={passwordRef} className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"  type="password" placeholder="password"/>
      </div>
      <div className="space-y-1">
        <label className="block font-medium">Confrim</label>
        <input ref={passwordConfirmationRef}  className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"  type="password" placeholder="password"/>
      </div>




      <div className="flex justify-center mt-8">
        {/* <Link  to="/user"> */}
          <button type="submit" className=" bg-fuchsia-600	 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white  hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Se connecter</button>
        {/* </Link> */}


       
      </div>


      <br />
      <div className="flex justify-center ">
<Link to="/Signup">
<p className="text-center	">Vous n'avez pas de compte ?</p>
</Link>
<Link to="/reset">
<p className= "ml-2 text-center">Réinitialiser le mot de passe </p>
</Link>
    </div>
    
    </form>
  </div>



  <br />




</div>
</div>
  )
}
