import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import axiosClient from '../../axios-client';
import { useParams } from 'react-router-dom';

export default function 


() {
  const { id } = useParams();

const {user, token, setUser, setToken, notification} = useStateContext();
 const [tickets, setTickets] = useState(['']);
 const [filteredUsers, setFilteredUsers] = useState([]);
 const [admins, setAdmins] = useState([]);

  useEffect(() => {
    // setIsLoading(true);
    axiosClient.get(`/byid/${id}`)
      .then(({ data }) => {
        setTickets(data);

      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  }, []);
  
  useEffect(() => {
    axiosClient.get('/isAdmin')
      .then(({data}) => {
         setAdmins(data.admins)
      })
  }, [])

  // console.log(admins)
  
  
  
  
  
  
  return (
<div className="bg-[#f6f7fb] h-full w-full">

    
      <div className="container mx-auto px-4 py-8">

    



      <div className="flex">
  <div className=' bg-[#ffff]  ml-8 mr-8 shadow-xl h-auto p-4 w-1/4 rounded-2xl border-t-4 border-[#E400FF] '>

  <h1 className="mb-6 font-bold text-3xl flex gap-1 items-baseline font-mono">Détails<span className="text-sm text-purple-700">TICKET-{tickets.id}</span></h1>

    <div className="flex flex-col space-y-4 ">
    {/* <!-- Title --> */}
    {/* <label className="text-gray-500 font-medium" htmlFor="title">ID : #{tickets.id}</label> */}
    <input defaultValue={tickets.title} className="w-38 border border-gray-300  p-2" type="text" id="title" name="title" placeholder="Enter a title"/>
  
    {/* <!-- First line --> */}
    <div className="grid grid-cols-6 gap-4">
      {/* <!-- Équipe --> */}
      <label className="text-gray-500 font-medium col-span-2" htmlFor="team">Équipe</label>
      <input defaultValue={tickets.team && tickets.team.title} className="w-38 border border-gray-300  p-1 col-span-4" type="text" id="team" name="team" placeholder="Enter an equipe"/>
  
  
      {/* <!-- Assigné à --> */}        
      <label className="text-gray-500 font-medium col-span-2" htmlFor="assigned-to">Assigné à</label>
      {/* <input defaultValue={tickets.assigned_to && tickets.assigned_to.name} className="w-38 border border-gray-300  p-1 col-span-4" type="text" id="assigned-to" name="assigned-to" placeholder="Enter a name"/> */}
      <select  className="w-38 border border-gray-300  p-1 col-span-4">
  {admins.map((admin) => (
    <option key={admin.id} value={admin.id}>
     <p>{admin.name} </p> 
    </option>
  ))}
</select>

      {/* <!-- Priorité --> */}
      <label className="text-gray-500 font-medium col-span-2" htmlFor="priority">Priorité</label>
      <select  className="w-38 border border-gray-300  p-1 col-span-4" id="priority" name="priority">
        <option value="1">Priorité moyenne </option>
        <option value="2">Priorité élevée</option>
        <option value="3">Urgent</option>
      </select>
      
      {/* <!-- Type --> */}
      <label className="text-gray-500 font-medium col-span-2" htmlFor="type">Type</label>
      <select className="w-38 border border-gray-300  p-1 col-span-4" id="type" name="type">
        <option value="bug">Incident</option>
        <option value="feature">Question</option>
      </select>
  
      {/* <!-- Étiquettes --> */}
    </div>
  
    {/* <!-- Second line --> */}
    <div className="grid grid-cols-6 gap-4">
      {/* <!-- Client --> */}
      <label className="text-gray-500 font-medium col-span-2" htmlFor="client">Client</label>
      <input defaultValue={tickets.user_details && tickets.user_details.name} className="w-38 border border-gray-300  p-1 col-span-4" type="text" id="client" name="client" placeholder="Enter a client"/>
  
      {/* <!-- Nom du client --> */}
      {/* <label className="text-gray-500 font-medium col-span-2" htmlFor="client-name">Nom du client</label>
      <input className="w-38 border border-gray-300  p-1 col-span-4" type="text" id="client-name" name="client-name" placeholder="Enter a client name"/> */}
  
      {/* <!-- Email --> */}
      <label className="text-gray-500 font-medium col-span-2" htmlFor="email">Email</label>
      <input defaultValue={tickets.email} className="w-38 border border-gray-300  p-1 col-span-4" type="email" id="email" name="email" placeholder="Enter an email"/>
  
      <label className="text-gray-500 font-medium col-span-2" htmlFor="phone">Téléphone</label>
<input defaultValue={tickets.phone} className="w-38 border border-gray-300  p-1 col-span-4" type="tel" id="phone" name="phone" placeholder="Enter a phone number"/>
<label className="text-gray-500 font-medium col-span-2" htmlFor="tags">Étiquettes</label>
      <input className="w-38 border border-gray-300  p-1 col-span-4" type="text" id="tags" name="tags" placeholder="Enter tags"/>

{/* <!-- Description --> */}
  </div>

  <label className="text-gray-500 font-medium col-span-2" htmlFor="description">Description</label>
<textarea defaultValue={tickets.description} className="w-38 border border-gray-300  p-1 col-span-4" id="description" name="description" placeholder="Enter a description"/>

  <button className="bg-[#E400FF] hover:bg-[#cc00cc] text-white font-bold py-2 px-4 rounded">
  Enregistrer
</button>
</div>

  
</div> 
  <div className=' bg-white  mr-4 shadow-xl h-auto p-4 w-4/5 rounded-2xl border-t-4 border-[#E400FF] '>
    <p>This is a new div with some text.</p>
  </div>









</div> 






 </div>  
</div>  
      
  )
}
