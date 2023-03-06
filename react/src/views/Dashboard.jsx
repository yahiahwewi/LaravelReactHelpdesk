import React from 'react'
import { Link } from "react-router-dom";

import {useEffect} from "react";
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios-client';


// const name="Houaoui Yahya"
// const email ="yahiahwewi@gmail.com"
  // const {user, token, setUser, setToken, notification} = useStateContext();

export default function Dashboard() {
  const {user, token, setUser, setToken, notification} = useStateContext();


  // -------------get user details ---------------- 
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

<div  className=" m-16 block  p-8 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

    <p className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">Assistance :</p>
   
   
    <div class="items-center ">
    <a href="#" className=" mt-2 block p-2  border-2  rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">Ajouter un ticket

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
<metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
<g><path d="M500,990c-66.1,0-130.3-13-190.7-38.5c-58.4-24.7-110.8-60-155.7-105c-45-45-80.3-97.4-105-155.7C23,630.3,10,566.1,10,500s13-130.3,38.5-190.7c24.7-58.4,60-110.8,105-155.7c45-45,97.4-80.3,155.7-105C369.7,23,433.9,10,500,10c66.1,0,130.3,13,190.7,38.5c58.4,24.7,110.8,60,155.7,105c45,45,80.3,97.4,105,155.7C977,369.7,990,433.9,990,500c0,66.1-13,130.3-38.5,190.7c-24.7,58.4-60,110.8-105,155.7c-45,45-97.4,80.3-155.7,105C630.3,977,566.1,990,500,990z M500,52.6C253.3,52.6,52.6,253.3,52.6,500c0,246.7,200.7,447.4,447.4,447.4c246.7,0,447.4-200.7,447.4-447.4S746.7,52.6,500,52.6z"/><path d="M580.2,356.9H354.9c-11.9,0-21.6-9.7-21.6-21.7c0-12,9.7-21.7,21.6-21.7h225.3c11.9,0,21.6,9.7,21.6,21.7C601.8,347.2,592.1,356.9,580.2,356.9z M580.2,529.1H354.9c-11.9,0-21.6-9.7-21.6-21.7c0-12,9.7-21.7,21.6-21.7h225.3c11.9,0,21.6,9.7,21.6,21.7C601.8,519.4,592.1,529.1,580.2,529.1z M477.8,621.8H355c-11.9,0-21.6-9.7-21.6-21.7c0-12,9.6-21.7,21.6-21.7h122.8c11.9,0,21.6,9.7,21.6,21.7S489.7,621.8,477.8,621.8z M551.1,449.7H354.9c-11.9,0-21.6-9.7-21.6-21.7c0-12,9.7-21.7,21.6-21.7h196.2c11.9,0,21.6,9.7,21.6,21.7C572.7,439.9,563,449.7,551.1,449.7z"/><path d="M663.1,618.3v109.2H307.7V276h355.4v200.4l37.7-32.7V241H270v521.5h430.8V589L663.1,618.3L663.1,618.3z M738.6,427.4l-24,21.7l51.4,46.6l24-21.8L738.6,427.4L738.6,427.4z M592.3,559.8l51.4,46.5l116.7-105.7L709,454.2L592.3,559.8z M634.8,614.5L583.4,568l-5.6,5.1l-14.5,59.6l65.9-13.1L634.8,614.5z"/></g>
</svg>
</a>
    <a href="#" className="mt-2  block p-4  border-2  rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">Live chat

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
<metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
<g><path d="M848,380.3c0-5.6,0-11.1,0-16.7C848,168.7,683.7,10,483.3,10c-200.5,0-364.7,158.7-364.7,353.6c0,8.4,0,16.7,0,25.1c-41.8,22.3-64,75.2-64,161.5c0,114.1,39,169.8,116.9,169.8c78,0,116.9-55.7,116.9-169.8c0-97.4-27.8-153.1-86.3-167c0-5.6,0-11.1,0-16.7c0-153.1,128.1-275.6,284-275.6c155.9,0,284,122.5,284,275.6c0,11.1,0,19.5-2.8,30.6c-36.2,25.1-55.7,75.2-55.7,153.1c0,97.4,27.8,153.1,83.5,167c-55.7,100.2-158.7,169.8-281.2,181c-5.6-39-41.8-69.6-83.5-69.6c-47.3,0-83.5,36.2-83.5,80.7c0,44.5,39,80.7,83.5,80.7c27.8,0,52.9-13.9,69.6-33.4c161.5-8.4,300.7-105.8,361.9-242.2c55.7-16.7,83.5-69.6,83.5-164.3C945.5,447.1,912,391.4,848,380.3z"/></g>
</svg></a>
</div>

</div>

<div  className="flex-1 h-136 m-16 block  p-8 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">




<p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Mes tickets :</p>
<a href="#" class="mb-4 block p-4 bg-purple-200 border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
  ticket 1
  <small class="absolute top-0 right-0 px-2 py-1 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">24/03/2023</small>

</a>

<a href="#" class=" block p-4 bg-purple-200 border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
  ticket 1
  <small class="absolute top-0 right-0 px-2 py-1 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">24/03/2023</small>

</a>
<a href="#" class="mt-4 block p-4 bg-purple-200 border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
  ticket 1
  <small class="absolute top-0 right-0 px-2 py-1 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">24/03/2023</small>

</a>



</div>



{/* -------------block 2 ----------------- */}

<div  className=" flex-1  h-116 m-16 block max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<div className="flex justify-start">
<h5 className="flex justify-start mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Détails</h5>
<Link to="/edit">

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



{/* ------------- Footer ------------- */}

    {/* <div>
      
      <footer className="p-2 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="pl-10 text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://tac-tic.net/" className="hover:underline">TAC-TIC</a>. All Rights Reserved.
    </span>
    <ul className="pr-10 flex  items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://tac-tic.net/" className="ml-6 hover:underline md:mr-6 ">About</a>
        </li>
        
        </ul>
        </footer>

      
      </div>   */}
      
        </div>
  )
}
