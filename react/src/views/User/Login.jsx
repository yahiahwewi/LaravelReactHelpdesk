import {Link} from "react-router-dom";
import axiosClient from '../../axios-client';
import {createRef} from "react";
import { useStateContext } from '../../contexts/ContextProvider';
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {

  const emailRef = createRef()
  const passwordRef = createRef()
  const { setUser, setToken } = useStateContext()

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    axiosClient.post('/login', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);

      })
      .catch((err) => {
        const response = err.response;

        if (response && response.status === 422) {
          toast.error("Veuillez vérifier vos informations et réessayer", {
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
  }

  return (


















    

      <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://wallpaperaccess.com/full/5781536.jpg')]">
        <ToastContainer/>

        <div className="bg-white w-96  p-14 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center ">S'authentifier :</h1>
          <br />
       


<br />
  
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-1 ">
        <label className="block font-medium" htmlFor="email" >E-mail</label>
        <input required ref={emailRef} className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300" id="email" type="email" placeholder="Email"/>
      </div>
      <div className="space-y-1">
        <label className="block font-medium" htmlFor="password">Mot de passe</label>
        <input required ref={passwordRef} className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300" id="password" type="password" placeholder="Mot de passe"/>
      </div>

      <div className="flex justify-center mt-8">
          <button type="submit" className=" bg-fuchsia-600	 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white  hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Se connecter</button>
 
      </div>


      <div className="flex justify-center ">
<Link to="/Signup">
<p className="text-center	">Vous n'avez pas de compte ?</p>
</Link>

    </div>
    
    </form>
  </div>



  




</div>
    
  );
};

