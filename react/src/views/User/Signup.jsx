import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider';

export default function Signup() {
const nameRef = useRef();
const emailRef = useRef();
const passwordRef = useRef();
const passwordConfirmationRef = useRef();
const [errors, setErrors] = useState(null);
const [noerrors, setnoErrors] = useState(false);
const {setUser, setToken} = useStateContext();

  const onSubmit = (ev) => {
    ev.preventDefault()
    const payload={
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
      poste: "Client",
      role:true,

    }

axiosClient.post('/signup', payload)
.then(({data})=>{

  setUser(data.user)
  setToken(data.token);
  console.log(user.id)

// if (response.status === 200) {
//   setTimeout(() => {
//     setnoErrors(true);
//   }, 2000);
// }

}).catch(err=>{
  console.log(err)
const response=err.response;
if(response && response.status==422){
  setErrors(response.data.errors)

response.data.errors;
console.log(response.data.errors);
}
console.log(response);
if(response && response.status==500){
  setErrors(response.data.errors)

}

const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

// Check if name is less than 5 characters or contains special characters
if (name.trim().length < 5 || specialChars.test(name)) {
  toast.error('Le nom doit contenir au moins 5 caractères et ne doit pas contenir de caractères spéciaux.', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light", 
  });
  return;
}

if (user.password !== user.password_confirmation) {
  toast.error('Les mots de passe ne correspondent pas',
   {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
              });

  // setErrors('Les mots de passe ne correspondent pas.')
  return
}
if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(user.password) || !/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(user.password_confirmation)) {
  toast.error('Le mot de passe doit contenir au moins un chiffre', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return;
}



})


  };





  return (


    
   <div >
           <ToastContainer/>

    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://wallpaperaccess.com/full/5781536.jpg')]">
  <div className="bg-white w-96  p-14 rounded-lg shadow-lg mt-2">
    {/* <img src='\logo.png' alt="logo" className="mx-auto mb-4" /> */}
    <h1 className="text-2xl font-bold mb-2 text-center ">S'inscrire :</h1>
<div>


 
{noerrors && (
  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 flex" role="alert">
    <div>
      <p>Validation successful!</p>
    </div>
  </div>
)}




</div>

    <br />
    <form onSubmit={onSubmit} className="space-y-4">
      
      <div className="space-y-1 ">
        <label className="block font-medium" htmlFor="email" >Nom complet</label>
        <input required ref={nameRef}  className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"  type="name" placeholder="Nom complet"/>
      </div>
      <div className="space-y-1 ">
        <label className="block font-medium" htmlFor="email" >E-mail</label>
        <input required ref={emailRef} className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"  type="email" placeholder="Email"/>
      </div>
      <div className="space-y-1 ">
        <label className="block font-medium" htmlFor="email" >Mot de passe :</label>
        <input required ref={passwordRef} className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"  type="password" placeholder="Mot de passe"/>
      </div>
      <div className="space-y-1">
        <label className="block font-medium">Confirmer mot de passe :</label>
        <input required ref={passwordConfirmationRef}  className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"  type="password" placeholder="Confirmer mot de passe"/>
      </div>




      <div className="flex justify-center mr-2">
          <button type="submit" className=" bg-fuchsia-600	 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white  hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">S'inscrire</button>

     
      </div>
      <br />
      <div className="flex justify-center ">
<Link to="/login">
<p className="text-center	">Déja membre ?</p>
</Link>
    </div>
    </form>
  </div>
  <br />
</div>
</div>
  )
}
