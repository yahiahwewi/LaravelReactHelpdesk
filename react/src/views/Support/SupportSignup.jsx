import React, { useRef, useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import axiosClient from '../../axios-client';
import { toast, ToastContainer } from 'react-toastify';

export default function SupportSignup() {
  
    const nameRef = useRef();
    const posteRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const [errors, setErrors] = useState(null);
    const [noerrors, setnoErrors] = useState(false);
    const {setUser, setToken} = useStateContext();
    
    const handleSubmit = (ev) => {
      ev.preventDefault()
      const payload={
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        password_confirmation: passwordConfirmationRef.current.value,
        poste: posteRef.current.value,
        role:1
      }
    
      axiosClient.post('/signup', payload)
        .then(async ({data})=>{
          setUser(data.user)
          setToken(data.token);
          // const response = await axiosClient.put(`/users/${user.id}`, { role: 1 });

          // if (response.status === 200) {
          //   setTimeout(() => {
          //     setnoErrors(true);
          //   }, 2000);
          // }
    
          
        })
        .catch(err=>{
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
        });
    }
    
    
    
  
  
    
  return (
<div className="flex items-center justify-center h-screen bg-gray-200">
<ToastContainer/>

<div className="bg-white p-12 rounded-lg shadow-md">
  <h2 className="text-2xl font-medium mb-6 text-center">Inscription - Support</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block font-medium mb-2" htmlFor="name">Nom</label>
      <input
        required ref={nameRef}
        className="border border-gray-300 p-2  w-full"
        type="text"
        id="name"
        
      />
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-2" htmlFor="email">Email</label>
      <input
         ref={emailRef}
        className="border border-gray-300 p-2  w-96"
        type="email"
        id="email"
        required
      />
      
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-2" >Votre poste</label>
      <input
      ref={posteRef}
      placeholder='Exemple: Service IT'
        className="border border-gray-300 p-2  w-96"
        type="poste"
        id="poste"
        required
      />
      
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-2" htmlFor="password">Mot de passe</label>
      <input
         ref={passwordRef}
        className="border border-gray-300 p-2  w-full"
        type="password"
        id="password"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-2" htmlFor="password">Mot de passe</label>
      <input
        ref={passwordConfirmationRef}  
        className="border border-gray-300 p-2  w-full"
        type="password"
        required
      />

    </div>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">S'inscrire</button>
  </form>
</div>
</div>  )
}
