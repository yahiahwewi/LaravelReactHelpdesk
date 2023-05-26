import {React , Component, useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider';

export default function EditDetails() {

  const [user, setUser] = useState({
    name: '',
    email: '',
     company_name: '',
     phone : '',
      street :'',
      city :'',
      postal_code : '',
      country :'',

  })

    useEffect(() => {
    

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
      ev.preventDefault()
        axiosClient.put(`/user`, user)
          .then(() => {
            toast.success('Votre profil a été mis à jour', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });


          })
          .catch(err => {
            const response = err.response;

            if (response && response.status === 422) {
              // toast.error("Veuillez vérifier vos informations et réessayer", {
              //   position: "top-center",
              //   autoClose: 5000,
              //   hideProgressBar: true,
              //   closeOnClick: true,
              //   pauseOnHover: true,
              //   draggable: true,
              //   progress: undefined,
              //   theme: "light",
              // });        
              
              
              if (!user.name || user.name.length <= 5) {
                toast.error("Le nom doit être supérieur à 5 caractères", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light"
                });
              } else if (!user.company_name) {
                toast.error("Le nom de la société est requis", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light"
                });
              } else if (!user.phone || isNaN(user.phone) || user.phone.length < 8) {
                toast.error("Le téléphone doit être numérique et avoir au moins 8 chiffres", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light"
                });
              } else if (!user.street || user.street.length <= 5) {
                toast.error("La rue doit être supérieure à 5 caractères", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light"
                });
              } else if (!user.city || user.city.length <= 5) {
                toast.error("La ville doit être supérieure à 5 caractères", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light"
                });
              } else if (!user.postal_code || user.postal_code.length < 3) {
                toast.error("Le code postal doit avoir au moins 3 caractères", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light"
                });
              } else if (!user.country) {
                toast.error("Le pays est requis", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light"
                });
              } 
              
               }
          })
      
  
    }

    let options = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Deps", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Rep", "Chad",
    "Chile", "China", "Colombia", "Comoros", "Congo", "Congo {Democratic Rep}", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", 
    "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland {Republic}", "Palestine", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar",
     "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar, {Burma}", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", 
     "Portugal", "Qatar", "Romania", "Russian Federation", "Rwanda", "St Kitts & Nevis", "St Lucia", "Saint Vincent & the Grenadines", "Samoa", "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland",
      "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
 
  return (

<div>
{/* ---------- background --------- */}
<div className=" flex flex-col items-center justify-center min-h-screen bg-[url('https://wallpaperaccess.com/full/5781536.jpg')]">
{/* -----------Card------------ */}

<ToastContainer/>

<div className="bg-white w-auto p-14 rounded-lg shadow-lg relative">
<Link to="/dashboard">
  <a href="/" className="absolute top-2 left-2">
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


<h1 className='text-center mb-8 mr-8 '>Détails :</h1>

  <form onSubmit={onSubmit} className="space-y-4 relative">


    <div className="flex justify-between">
      <ul className="flex flex-nowrap">



        <li className="mr-4">
        <label className="block font-medium"  >Nom complet :</label>
          <input value={user.name}  onChange={ev => setUser({...user, name: ev.target.value})} type="text" name="name" className="border border-gray-400 rounded-md p-2 w-80"  />
        </li>

        <li>
        <label className="block font-medium"  >E-mail</label>
          <input readOnly value={user.email}  onChange={ev => setUser({...user, email: ev.target.value})} type="text" name="email" className="border border-gray-400 rounded-md p-2 w-80" />
        </li>



      </ul>
    </div>

    <ul className="flex flex-nowrap">
      <li className="mr-4">
      <label className="block font-medium"  >Nom de la société</label>
        <input value={user.company_name} onChange={ev => setUser({...user, company_name: ev.target.value})} type="text" name="societe" className="border border-gray-400 rounded-md p-2 w-80" />
      </li>



      <li>
      <label className="block font-medium"  >Téléphone</label>
      <input value={user.phone}  onChange={ev => setUser({...user, phone: ev.target.value})} className="border border-gray-400 rounded-md p-2 w-80" /> 
      </li>


    </ul>

    <ul className="flex flex-nowrap">
      <li className="mr-4">
      <label className="block font-medium"  >Rue</label>
      <input value={user.street} onChange={ev => setUser({...user, street: ev.target.value})}  className="border border-gray-400 rounded-md p-2 w-80"/> 
      </li>


      <li>
      <label className="block font-medium"  >Ville</label>
      <input value={user.city} onChange={ev => setUser({...user, city: ev.target.value})}  className="border border-gray-400 rounded-md p-2 w-80"/> 
      </li>


    </ul>

    <ul className="flex flex-nowrap">
      <li className="mr-4">
      <label className="block font-medium"  >Code postal</label>

      <input value={user.postal_code} onChange={ev => setUser({...user, postal_code: ev.target.value})}  className="border border-gray-400 rounded-md p-2 w-80"/> 

        
      </li>
      
      <li>
      <label className="block font-medium" htmlFor="country">Pays</label>
<select id="country" value={user.country} onChange={ev => setUser({...user, country: ev.target.value})} className="border border-gray-400 rounded-md p-2 w-80">
  <option value="">Votre pays :</option>
  {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
</select>

      </li>


    </ul>
    <button type="submit" className="mt-4 bg-fuchsia-600 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-white font-medium rounded-md px-4 py-2 inline-flex items-center justify-center border border-transparent text-base">Sauvegarder</button>

  </form>
  <div className="flex justify-center mt-8">



      </div>


</div>
 

{/* ----------Card----------- */}








  </div>

      
      
      
      



      </div>
      )
}
