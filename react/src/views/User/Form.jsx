import React, { useState, useRef ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider';
import { toast, ToastContainer } from "react-toastify";


// 

export default function Form() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {user,  setUser} = useStateContext();
  const nameRef = useRef();
  // const idRef = useRef();
  const titleRef= useRef();
  const descriptionRef= useRef();
  // const photoRef = useRef(); // change fileRef to photoRef
  const [selectedFile, setSelectedFile] = useState('');
  const [tickets, setTickets] = useState([]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameRef.current.value || !titleRef.current.value || !descriptionRef.current.value ) {
      // Display error toast
      toast.error('Tous les champs sont obligatoires !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return; // Stop function execution
    }
  
    const formData = new FormData();
    formData.append('step','NOUVEAU');
    formData.append('name', nameRef.current.value);
    formData.append('title', titleRef.current.value);
    formData.append('description', descriptionRef.current.value);
    formData.append('user_id', user.id);


    if (selectedFile && !selectedFile.type.startsWith('image/')) {
      toast.error('Le fichier doit être une image', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    try {
      const response =  axiosClient.post('/tickets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      

      // Display success toast
      toast.success('Ticket ajoutée avec succés !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // Do something with the response
    } catch (error) {
      console.error(error);
      // Handle error
    }
    };

  return (
<div className='bg-gray-200 flex flex-col items-center justify-center min-h-screen'>


<form onSubmit={handleSubmit} className="mt-4 mb-4">

        <ToastContainer/>

<div className="bg-white w-auto p-20 rounded-lg shadow-lg mt-2 relative">
<Link to="/dashboard">
  <a href="/" className="absolute top-2 left-4">
    <svg
      fill="#68ea39"
      height="50px"
      width="50px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="-98.62 -98.62 416.39 416.39"
      xml:space="preserve"
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


    <h1 className="text-2xl font-bold  p-6 text-center">Ajouter un ticket</h1>
    <div className="space-y-4">
    <div className="flex flex-col space-y-1">

   <label htmlFor="name" className="font-medium">Email:</label>
   <input 
     
     type="text"
     id="email"
     name="email"
     value={user.email}
     readOnly
     className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
   />     
 </div>
      <div className="flex flex-col space-y-1">
   
        <label htmlFor="name" className="font-medium">Nom Complet:</label>
        <input 
          ref={nameRef} 
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />     
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="title" className="font-medium">Titre:</label>
        <input 
          ref={titleRef} 
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
      </div>
      <div className="flex flex-col space-y-1">
  <label htmlFor="description" className="font-medium">Description:</label>
  <textarea
    id="description"
    name="description"
    ref={descriptionRef}
    onChange={(e) => setDescription(e.target.value)}
    required
    className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 resize-vertical"
    style={{ height: 'auto' }}
  />
</div>





      <div className="flex flex-col space-y-1">
        <label htmlFor="photo" className="font-medium">Piéce jointe:</label>
        <input 
          type="file" 
          onChange={(e) => setSelectedFile(e.target.files[0])} 
          className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
      </div>

      <div className="flex justify-center">
        <button 
          type="submit" 
          className="bg-fuchsia-600 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Ajouter
        </button>
      </div>
    </div>
  </div>
</form>

  
</div>
 



  );
}
