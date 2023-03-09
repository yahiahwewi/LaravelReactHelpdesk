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
    
//     <div class="bg-white w-auto p-14 rounded-lg shadow-lg absolute ">
    
//     <Link to="/">
    
//     <button class=" text-left absolute left-12">
//   <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-fuchsia-600 hover:text-green-600 transform " fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
//   </svg>
// </button>

//       </Link>
    
//     <h1 className='text-center mb-8 mr-8 text-4xl text-gray-600 font-bold'>Détails :</h1>
    
//       <form class="space-y-4">
//         <div class="flex justify-between">
//           <ul class="flex flex-nowrap">
    
    
    
//             <li class="mr-4">
//             <label class="block font-medium"  >Nom complet :</label>
//               <input type="text" htmlFor="email" name="name" class="border border-gray-400 rounded-md p-2 w-80" value={user.name}  />
//             </li>
    
//             <li>
//             <label class="block font-medium"  >E-mail</label>
//               <input type="text" name="email" htmlFor="email" class="border border-gray-400 rounded-md p-2 w-80" value={user.email} />
//             </li>
    
    
    
//           </ul>
//         </div>
    
//         <ul class="flex flex-nowrap">
//           <li class="mr-4">
//           <label class="block font-medium"  >Nom de la société</label>
//             <input type="text" name="societe" class="border border-gray-400 rounded-md p-2 w-80" />
//           </li>
    
    
    
//           <li>
//           <label class="block font-medium"  >Téléphone</label>
//             <input type="text" name="tel" class="border border-gray-400 rounded-md p-2 w-80"  />
//           </li>
    
    
//         </ul>
    
//         <ul class="flex flex-nowrap">
//           <li class="mr-4">
//           <label class="block font-medium"  >Rue</label>
//             <input type="text" name="rue" class="border border-gray-400 rounded-md p-2 w-80" />
//           </li>
    
    
//           <li>
//           <label class="block font-medium"  >Ville</label>
//             <input type="text" name="ville" class="border border-gray-400 rounded-md p-2 w-80" />
//           </li>
    
    
//         </ul>
    
//         <ul class="flex flex-nowrap">
//           <li class="mr-4">
//           <label class="block font-medium"  >Code postal</label>
//             <input type="text" name="zip" class="border border-gray-400 rounded-md p-2 w-80" />
    
            
//           </li>
          
//           <li>
//           <label class="block font-medium"  >Pays</label>
//             <input type="text" name="pays" class="border border-gray-400 rounded-md p-2 w-80"  value="Tunisie"/>
    
//           </li>
    
    
//         </ul>
//       </form>
//       <div class="flex justify-center mt-8">
//             <Link  to="/user">
//               <button type="submit" class=" bg-fuchsia-600	 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white  hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Mettre à jour </button>
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

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
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
      console.log(user.email)
      ev.preventDefault()
        axiosClient.put(`/users/${user.id}`, user)
          .then(() => {
            setNotification('User was successfully updated')
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


    <div>
    <form onSubmit={onSubmit}>
            <input value={user.name} onChange={ev => setUser({...user, name: ev.target.value})} placeholder="Name"/>
            <input value={user.email} onChange={ev => setUser({...user, email: ev.target.value})} placeholder="Email"/>
            <input type="password" onChange={ev => setUser({...user, password: ev.target.value})} placeholder="Password"/>
            <input type="password" onChange={ev => setUser({...user, password_confirmation: ev.target.value})} placeholder="Password Confirmation"/>
            <button className="btn">Save</button>
          </form>

   </div>
      )
}
