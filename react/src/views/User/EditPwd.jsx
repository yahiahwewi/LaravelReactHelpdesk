
import {React , Component, useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider';
import 'react-toastify/dist/ReactToastify.css';

export default function EditPwd() {
  const [errors, setErrors] = useState(false)

  const [user, setUser] = useState({
    // name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

    useEffect(() => {
      axiosClient.get(`/user`)
        .then(({data}) => {
          setUser(data)
        })
        .catch(() => {
        })
    }, [])
    

    const onSubmit = ev => {
      ev.preventDefault()

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
        toast.error('Le mot de passe doit contenir 8 caractères avec des lettres et des chiffres', {
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
      
      
      

      // else {
      //   setErrors(null)
      // }
      
      
      

      axiosClient.put(`/user`, user)
        .then(() => {
          // setNotification('User was successfully updated')
          toast.success('Votre mot de passe a été mis à jour', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate('/dashboard')
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
    }

    return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://wallpaperaccess.com/full/5781536.jpg')]">
<ToastContainer/>
   {/* {errors && (

<p className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 flex'>{errors}</p>
)} */}
    <div className="flex items-center justify-center h-screen wt-96">
   

    <form required onSubmit={onSubmit} className="bg-white p-20 rounded-lg shadow-lg relative">
    <Link to="/dashboard" />
    <a href='/' className="absolute top-4 left-4">
    <svg fill="#68ea39" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-98.62 -98.62 416.39 416.39" xmlSpace="preserve" stroke="#68ea39">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575 C0.002,169.995,49.157,219.151,109.576,219.151z M109.576,15c52.148,0,94.573,42.426,94.574,94.575 c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577C15.003,57.427,57.428,15,109.576,15z"></path>
          <path d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008 c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825 c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628 c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"></path>
        </g>
      </g>
    </svg>
  </a>
  <Link/>

      <h1 className="text-2xl font-bold mb-4 text-center">Modifier le mot de passe :</h1>
     
      <div className="space-y-4">
   

        {/* <div>
          <label className="block font-medium mb-1" htmlFor="name">Nom complet</label>
          <input value={user.name} readOnly  id="name" className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300" placeholder="Name" />
        </div> */}
        <div>
          <label className="block font-medium mb-1" htmlFor="email">Email</label>
          <input value={user.email} readOnly  id="email" className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300" placeholder="Email" />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="password">Mot de passe *</label>
          <input required value={user.password} onChange={ev => setUser({...user, password: ev.target.value})} id="password" type="password" className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300" placeholder="Password" />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="password_confirmation">Confirmation *</label>
          <input required value={user.password_confirmation} onChange={ev => setUser({...user, password_confirmation: ev.target.value})} id="password_confirmation" type="password" className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300" placeholder="Password Confirmation" />
        </div>
        <br />
        <button type="submit" className="w-full  bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue ">
          Sauvegarder
        </button>
      </div>
    </form>
    </div>
    </div>
  
      )
}
