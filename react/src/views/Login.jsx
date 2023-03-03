import React, { useState } from "react";
import { Link } from "react-router-dom";





const Login = () => {



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



 



  const onSubmit = (ev) => {
    ev.preventDefault();



  };
 

  return (


    
<div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://wallpaperaccess.com/full/5781536.jpg')]">
  <div className="bg-white w-96  p-14 rounded-lg shadow-lg">
    {/* <img src='\logo.png' alt="logo" className="mx-auto mb-4" /> */}
    <h1 className="text-2xl font-bold mb-4 text-center ">S'authentifier :</h1>
    <br />
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-1 ">
        <label className="block font-medium" htmlFor="email" >E-mail</label>
        <input className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300" id="email" type="email" placeholder="Email"/>
      </div>
      <div className="space-y-1">
        <label className="block font-medium">Mot de passe</label>
        <input  className="mb-6 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" id="password" type="password" placeholder="Mot de passe"/>
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
    
  );
};

export default Login;