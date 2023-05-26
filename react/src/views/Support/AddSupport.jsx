import { useState } from 'react';
import axiosClient from '../../axios-client';
import { Link } from 'react-router-dom';

 export default function AddSupport() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [done, setDone] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    
    const payload = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value,
      password: event.target.elements.password.value,
      role: true 
    };
  
    axiosClient.post('/addsupport', payload)
      .then(response => {
        // handle success
        console.log(response.data);
        setDone(true)
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  }
  

  return (
<div>

<div class="flex items-center justify-center  ">
  <div className="container w-96 ">
    <div className="bg-[#d6c5c5] text-center justify-center rounded-b-lg shadow-xl h-11 w-auto mx-auto">
      <div className="flex-initial pt-2">
        <Link to="/teamlist" className="pt-2 ml-4 text-white font-bold">Départements</Link>
        <Link to="/support" className="pt-2 ml-6 text-white font-bold">Support</Link>
        <Link to="/userslist" className="pt-2 ml-6 text-white font-bold">Utilisateurs</Link>
        
      </div>
    </div>
  </div>
</div>



    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-12 my-4 bg-white rounded p-6 shadow-md">
    <Link to="/my">
  <a href="/" className="  m flex-none">
    <svg
      fill="#68ea39"
      height="50px"
      width="50px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-98.62 -98.62 416.39 416.39"
      xmlSpace="preserve"
      stroke="#68ea39"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575 C0.002,169.995,49.157,219.151,109.576,219.151z M109.576,15c52.148,0,94.573,42.426,94.574,94.575 c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577C15.003,57.427,57.428,15,109.576,15z"></path>
          <path d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008 c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825 c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628 c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"></path>
        </g>
      </g>
    </svg>
  </a>
</Link>

      <h2 className="text-lg font-medium mb-4">Ajouter un membre support</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-2">Nom</label>
        <input required type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded" />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-2">Email</label>
        <input required type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block font-medium mb-2">Numero</label>
        <input required  type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block font-medium mb-2">Mot de passe</label>
        <div className="flex items-center justify-between">
          <input required type="text" id="password" name="password"  onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded mr-2"  />
        </div>
      </div>
      <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-medium px-4 py-2 rounded">Ajouter</button>
    {done && <p className='text-center font-semibold'>Membre support ajouté</p> }
    <Link  className='text-blue-800' to='/support'> Voir les membres</Link>
    </form>

    </div>
  );
}
