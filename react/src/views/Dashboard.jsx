import React from 'react'
import { Link } from "react-router-dom";
import { useStateContext } from '../contexts/ContextProvider'

import axiosClient from '../axios-client';
import {useEffect} from "react";

// const name="Houaoui Yahya"
// const email ="yahiahwewi@gmail.com"
  // const {user, token, setUser, setToken, notification} = useStateContext();

export default function Dashboard() {
  const {user, token, setUser, setToken, notification} = useStateContext();


  // -------------bring user deatils ---------------- 
useEffect(() => {
  axiosClient.get('/user')
    .then(({data}) => {
       setUser(data)
    })
}, [])
  return (
    <div>
<div className="bg-[url('https://wallpaperaccess.com/full/5781536.jpg')] ">

{/* <Header/> */}










<div className="flex justify-start md:justify-between mr-4 mt-7 ml-6">

{/* -------------block 1----------------- */}


<div  className="flex-1 h-136 m-16 block max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tickets</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Mes Tickets : </p>
    <a href="#" className="  block max-w-sm p-4 bg-white border border-gray-200 rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">ticket 1
</a>
<br />


    <a href="#" className="  block max-w-sm p-4 bg-white border border-gray-200 rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">ticket 2
</a>
<br />
    <a href="#" className="  block max-w-sm p-4 bg-white border border-gray-200 rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">ticket 3
</a>



</div>


{/* -------------block 2 ----------------- */}

<div  className=" flex-1  h-116 m-16 block max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<div className="flex justify-start">
<h5 className="flex justify-start mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Détails</h5>
<Link to="edit">

<a  role="button" ><i className="fa fa-pencil text-sm mt- mr-2"></i> Modifier</a>
</Link>
</div>
<hr className=" bg-black border-2 "/>



<div className="flex items-center pt-6  ">

  <img src="https://w7.pngwing.com/pngs/595/338/png-transparent-icon-email-email-miscellaneous-angle-text.png" alt="" className="h-4 w-5" />
  <p className=" ml-4">{user.email}</p>
  

</div>


<div className="flex items-center">
<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" className="h-6 w-6 mt-2" />

<p className="mt-3 ml-3">{user.name}</p>
</div>



<br className="flex justify-between mb-2 "  />
<div>
<h5 className="flex justify-start mt-6 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sécurité du compte</h5>
<hr className=" bg-black border-2 mb-6"/>
<Link to="editpwd">
<p className='m'>Éditer les configurations de sécurité</p>

</Link>
</div>
</div>

</div>





</div>

    </div>
  )
}
