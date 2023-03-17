// import {React , Component, useEffect} from 'react'
// import { Link } from "react-router-dom";
// import axiosClient from '../axios-client';
// import { useStateContext } from '../contexts/ContextProvider';

// export default function EditDetails() {

//     const {user, token, setUser, setToken, notification} = useStateContext();
//     useEffect(() => {
//         axiosClient.get('/user')
//           .then(({data}) => {
//              setUser(data)
//           })
//       }, [])
//   return (


//     <div>
    
//     {/* ---------- background --------- */}
//           <div className=" flex flex-col items-center justify-center min-h-screen bg-[url('https://wallpaperaccess.com/full/5781536.jpg')]">
//     {/* -----------Card------------ */}
    
//     <div className="bg-white w-auto p-14 rounded-lg shadow-lg absolute ">
    
//     <Link to="/">
    
//     <button className=" text-left absolute left-12">
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fuchsia-600 hover:text-green-600 transform " fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
//   </svg>
// </button>

//       </Link>
    
//     <h1 className='text-center mb-8 mr-8 text-4xl text-gray-600 font-bold'>Détails :</h1>
    
//       <form className="space-y-4">
//         <div className="flex justify-between">
//           <ul className="flex flex-nowrap">
    
    
    
//             <li className="mr-4">
//             <label className="block font-medium"  >Nom complet :</label>
//               <input type="text" htmlFor="email" name="name" className="border border-gray-400 rounded-md p-2 w-80" value={user.name}  />
//             </li>
    
//             <li>
//             <label className="block font-medium"  >E-mail</label>
//               <input type="text" name="email" htmlFor="email" className="border border-gray-400 rounded-md p-2 w-80" value={user.email} />
//             </li>
    
    
    
//           </ul>
//         </div>
    
//         <ul className="flex flex-nowrap">
//           <li className="mr-4">
//           <label className="block font-medium"  >Nom de la société</label>
//             <input type="text" name="societe" className="border border-gray-400 rounded-md p-2 w-80" />
//           </li>
    
    
    
//           <li>
//           <label className="block font-medium"  >Téléphone</label>
//             <input type="text" name="tel" className="border border-gray-400 rounded-md p-2 w-80"  />
//           </li>
    
    
//         </ul>
    
//         <ul className="flex flex-nowrap">
//           <li className="mr-4">
//           <label className="block font-medium"  >Rue</label>
//             <input type="text" name="rue" className="border border-gray-400 rounded-md p-2 w-80" />
//           </li>
    
    
//           <li>
//           <label className="block font-medium"  >Ville</label>
//             <input type="text" name="ville" className="border border-gray-400 rounded-md p-2 w-80" />
//           </li>
    
    
//         </ul>
    
//         <ul className="flex flex-nowrap">
//           <li className="mr-4">
//           <label className="block font-medium"  >Code postal</label>
//             <input type="text" name="zip" className="border border-gray-400 rounded-md p-2 w-80" />
    
            
//           </li>
          
//           <li>
//           <label className="block font-medium"  >Pays</label>
//             <input type="text" name="pays" className="border border-gray-400 rounded-md p-2 w-80"  value="Tunisie"/>
    
//           </li>
    
    
//         </ul>
//       </form>
//       <div className="flex justify-center mt-8">
//             <Link  to="/user">
//               <button type="submit" className=" bg-fuchsia-600	 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white  hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Mettre à jour </button>
//             </Link>
    
    
//           </div>
    
    
//     </div>
     
    
//     {/* ----------Card----------- */}
    
    
    
    
    
    
    
    
//       </div>
    
          
          
          
          
    
    
    
//           </div>
//       )
// }












import {React , Component, useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function EditDetails() {
  const [loading, setLoading] = useState(false)
  const {setNotification} = useStateContext()
  const [errors, setErrors] = useState(false)

  const [user, setUser] = useState({
    name: '',
    email: '',
    // password: '',
    // password_confirmation: ''
     company_name: '',
     phone : '',
      street :'',
      city :'',
      postal_code : '',
      country :'',

  })

    useEffect(() => {
    

      // setLoading(true)
      axiosClient.get(`/user`)
        .then(({data}) => {
          // setLoading(false)
          setUser(data)
        })
        .catch(() => {
          // setLoading(false)
        })
    }, [])
    

    const onSubmit = ev => {
      console.log('aaaaa')
      ev.preventDefault()
        axiosClient.put(`/users/${user.id}`, user)
          .then(() => {
            setNotification('User was successfully updated')
            navigate('/users')
          })
          .catch(err => {
            const response = err.response;
            console.log(response);

            if (response && response.status === 422) {
              setErrors(response.data.errors)
              console.log(response.data.errors);
            }
          })
      
  
    }
  return (


<div className="flex justify-center">
  <div>
    <form onSubmit={onSubmit} className='block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <div className="grid grid-cols-2 gap-6">
        {/* <input value={user.name} onChange={ev => setUser({...user, name: ev.target.value})} placeholder="Name" className=" border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input value={user.email} onChange={ev => setUser({...user, email: ev.target.value})} placeholder="Email" className="w-auto p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/> */}
        {/* <input type="password" onChange={ev => setUser({...user, password: ev.target.value})} placeholder="Password" className="w-auto p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input type="password" onChange={ev => setUser({...user, password_confirmation: ev.target.value})} placeholder="Password Confirmation" className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input type="password" onChange={ev => setUser({...user, password: ev.target.value})} placeholder="Password" className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input type="password" onChange={ev => setUser({...user, password_confirmation: ev.target.value})} placeholder="Password Confirmation" className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/> */}
      <input  onChange={ev => setUser({...user, country: ev.target.value})}  className="w-auto p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/> 
      <input  onChange={ev => setUser({...user, city: ev.target.value})}  className="w-auto p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/> 
      <input  onChange={ev => setUser({...user, phone: ev.target.value})}  className="w-auto p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/> 
      <input  onChange={ev => setUser({...user, postal_code: ev.target.value})}  className="w-auto p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/> 
      <input  onChange={ev => setUser({...user, street: ev.target.value})}  className="w-auto p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/> 

        <button type="submit" className="mt-4 bg-fuchsia-600 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-white font-medium rounded-md px-4 py-2 inline-flex items-center justify-center border border-transparent text-base">Se connecter</button>

      </div>
    </form>
  </div>
</div>
      )
}
