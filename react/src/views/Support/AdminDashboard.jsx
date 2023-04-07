import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import axiosClient from '../../axios-client';

export default function AdminDashboard() {
    // const {user, token, setUser, setToken, notification} = useStateContext();
    const [user , setUser]=useState({});
    const [tickets, setTickets] = useState(['']);
    const [isLoading, setIsLoading] = useState(true);
    const [teams, setTeams] = useState(['']);


    // useEffect(() => {
    //   setIsLoading(true);
    //   axiosClient.get(`/teams/1/tickets`)
    //     .then(({ data }) => {
    //       setfilteredTickets(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }, []);



    useEffect(() => {
      setIsLoading(true);
      axiosClient.get(`/allteams`)
        .then(({ data }) => {
          setTeams(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);





    useEffect(() => {
      setIsLoading(true);
      axiosClient.get(`/ticketsall`)
        .then(({ data }) => {
          setTickets(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }, []);
  



   


    
  return (
<div className="bg-[#f6f7fb] h-full w-full">

<div className="container mx-auto  py-8">
<div className=' bg-[#d6c5c5] rounded-xl shadow-xl h-11 w-44 mx-auto '>
<div className='flex'>
<Link to="/teams" className="pt-2 ml-4 text-white font-bold">Équipes</Link>
<Link to="/types" className="pt-2 ml-9 text-white font-bold">Types</Link>
</div>
</div>  
</div> 

  <div className="container mx-auto px-4 py-4">

    <div className=' bg-white rounded-xl shadow-xl h-64 w-3/4 mx-auto '>
    
<h1 className='text-2xl ml-12  font-semibold mb-6 mt-4  '>Vue d'ensemble</h1> 
<hr />  
<table className="table-auto  mt-12 w-3/4 mx-auto ">
  <thead className="text-lg " >
    <tr>
      <b className=" text-left">Tickets ouverts</b>
      <th className="hover:bg-[#335455] px-0.5 py-0.5 bg-[#017e84] text-white border-4 border-white text-center text-sm"><Link to="/ticketlist">{tickets.count} Tickets</Link> </th>
      <th className="px-1 py-1 bg-[#f6f7fb] text-black border-4 border-white text-center relative">{tickets.semi_danger}<br/>
  <small className='mt-8'>Priorité élevée</small>
  <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Icon" className="absolute top-1 right-6 h-3 w-3 mt-1 mr-1"/>
  <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Icon" className="absolute top-1 right-2 h-3 w-3 mt-1 mr-1"/>
</th>
      
      <th className="px-1 py-1 bg-[#f6f7fb] text-black border-4 border-white text-center relative">{tickets.is_urgent}<br/>
  <small className='mt-8'>Urgent</small>
  <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Icon" className="absolute top-1 right-6 h-3 w-3 mt-1 mr-1"/>
  <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Icon" className="absolute top-1 right-2 h-3 w-3 mt-1 mr-1"/>
  <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Icon" className="absolute top-1 right-10 h-3 w-3 mt-1 mr-1"/>

</th>
   
    </tr>
  </thead>
  <tbody>
    <tr>
      <b className="px-1 py-1 border border-white">Tickets en échec</b>
      <th className="px-1 py-1 bg-[#f6f7fb] text-black border-4 border-white text-center">{tickets.is_cancelled}</th>
      {/* <th className="px-1 py-1 bg-[#f6f7fb] text-black border-4 border-white text-center">{tickets.is_cancelled+tickets.is_danger}</th>
      <th className="px-1 py-1 bg-[#f6f7fb] text-black border-4 border-white text-center">0</th> */}
    </tr>
  </tbody>
</table>
    </div>


    <div className="bg-white   p-6 w-3/4 mx-auto mt-8 rounded-xl shadow-xl">
  {teams.map((team) => (
    <div key={team.id}>
      <h2 className="text-2xl ml-8 font-semibold text-left">Équipe : {team.title}</h2>
      <div className="flex items-center justify-start ml-8 mb-8">
        <p className="text-gray-700 ml-1">Email: {team.email}</p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className="bg-blue-100 text-center rounded-md p-2">
          <span className="text-xl font-semibold">{team.count}</span>
          <p className="text-sm font-medium text-gray-700">ouverts</p>
        </div>
        <div className="bg-green-100 text-center rounded-md p-2">
          <span className="text-xl font-semibold">{team.is_assigned}</span>
          <p className="text-sm font-medium text-gray-700">attribués</p>
        </div>
        <div className="bg-yellow-100 text-center rounded-md p-2">
          <span className="text-xl font-semibold">{team.is_urgent}</span>
          <p className="text-sm font-medium text-gray-700">urgents</p>
        </div>
        <div className="bg-red-100 text-center rounded-md p-2">
          <span className="text-xl font-semibold">{team.is_canceled}</span>
          <p className="text-sm font-medium text-gray-700">échoués</p>
        </div>
      </div>
      <div className='text-center'>
        <button className="bg-[#017e84] hover:bg-[#335455] text-white px-4 py-2 mb-4 mt-6">TICKETS</button>
      </div>
    </div>
  ))}
</div>
{/* end */}



    </div>
    
    </div>
  )
}
