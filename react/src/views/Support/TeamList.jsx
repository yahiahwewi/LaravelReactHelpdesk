import React, { useEffect, useState } from 'react'
import Teams from './AddTeam';
import axiosClient from '../../axios-client';
import { Link } from 'react-router-dom';

export default function TeamList() {
  const [teams,  setTeams] = useState(['']);
  const [isLoading, setIsLoading] = useState(true);


  const [showTeams, setShowTeams] = useState(false);
  function handleAddTeamClick() {
    setShowTeams(!showTeams);
  }


  const handleDelete = (id) => {
    if (window.confirm("Voulez vous supprimer ce département ?")) {
      axiosClient.delete(`/deleteTeam/${id}`)
        .then(() => {
          // handle success
          setTeams(teams.filter(team => team.id !== id))
        })
        .catch(() => {
          // handle error
        })
    }
  }
  
  



  useEffect(() => {
    axiosClient.get('/allteams')
      .then(({ data }) => {
        setTeams(data.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(`Error fetching teams: ${error}`);
        setIsLoading(false);
      });
  }, []);
  
 
  if (isLoading) {
    return   <div className="flex items-center justify-center space-x-2 mt-12">
    <div
  className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
  </div>
  <div
  className="inline-block h-12 w-12 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
  role="status">
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
  </div>
  </div>;
  }
  // console.log(teams)

  return (
    <div>
    
    <div class="flex items-center justify-center ">
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

    
    <div className="py-6">
    <div className="py-6">
  <div className="max mx-auto sm:px-6 lg:px-8">
  <Link to="/my">
  <a href="/" className="  left-8  flex-none">
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

    <div className="bg-white overflow-hidden  sm:rounded-lg">
    <div>
  <button
    className="bg-[#017e84] hover:bg-[#335455] text-white px-4 py-2 mb-4 mt-6"
    onClick={handleAddTeamClick}
  >
    {showTeams ? 'Masquer' : 'Ajouter un département'}
  </button>
  {showTeams && <Teams />}
</div>


      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date de création</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>


          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        
  {teams.map((team) => (
    <tr key={team.id}>
      <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">{ team.title}</td>
      <td className="px-6 py-4 whitespace-nowrap  text-gray-900">{team.email}</td>
      <td className="px-6 py-4 whitespace-nowrap  text-gray-900">{team.description}</td>
      <td className="px-6 py-4 whitespace-nowrap  text-gray-900">{new Date(team.created_at).toLocaleDateString()}</td>
      <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
        <div className='flex'>
        {/* <Link className='text-left' to={`/resolveticket/${row.id}`}> */}

          <Link to={`/showteam/${team.id}`} type="button" className=" hover:bg-blue-200 text-white  py-1 px-1 rounded " >

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M12 3.5c-5.2 0-10.2 3.8-12 9 1.8 5.2 6.8 9 12 9s10.2-3.8 12-9c-1.8-5.2-6.8-9-12-9zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#555" />
            </svg>
          </Link>
          <Link to={`/editteam/${team.id}`} type="button" className=" hover:bg-green-200 text-white  py-1 px-1 rounded " >


            <svg height="20px" class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M834.3 705.7c0 82.2-66.8 149-149 149H325.9c-82.2 0-149-66.8-149-149V346.4c0-82.2 66.8-149 149-149h129.8v-42.7H325.9c-105.7 0-191.7 86-191.7 191.7v359.3c0 105.7 86 191.7 191.7 191.7h359.3c105.7 0 191.7-86 191.7-191.7V575.9h-42.7v129.8z" /><path d="M889.7 163.4c-22.9-22.9-53-34.4-83.1-34.4s-60.1 11.5-83.1 34.4L312 574.9c-16.9 16.9-27.9 38.8-31.2 62.5l-19 132.8c-1.6 11.4 7.3 21.3 18.4 21.3 0.9 0 1.8-0.1 2.7-0.2l132.8-19c23.7-3.4 45.6-14.3 62.5-31.2l411.5-411.5c45.9-45.9 45.9-120.3 0-166.2zM362 585.3L710.3 237 816 342.8 467.8 691.1 362 585.3zM409.7 730l-101.1 14.4L323 643.3c1.4-9.5 4.8-18.7 9.9-26.7L436.3 720c-8 5.2-17.1 8.7-26.6 10z m449.8-430.7l-13.3 13.3-105.7-105.8 13.3-13.3c14.1-14.1 32.9-21.9 52.9-21.9s38.8 7.8 52.9 21.9c29.1 29.2 29.1 76.7-0.1 105.8z" /></svg>
          </Link>


          <button type="button" className=" hover:bg-red-500 text-white  py-1 px-1 rounded" onClick={() => handleDelete(team.id)}>
            <svg height="20px"
              viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M862.2 630.4c-0.4 0.6-0.8 1.1-1.1 1.7 0.3-0.6 0.7-1.1 1.1-1.7zM893.7 567.4c-0.2 0.6-0.5 1.3-0.7 1.9 0.3-0.6 0.5-1.3 0.7-1.9zM859.9 633.9c-0.4 0.6-0.8 1.1-1.2 1.7 0.4-0.6 0.8-1.2 1.2-1.7zM910.2 489.1c0 0.7-0.1 1.3-0.2 2 0.1-0.7 0.1-1.4 0.2-2zM910.5 484.7c0 0.6-0.1 1.3-0.1 1.9 0-0.6 0-1.2 0.1-1.9zM901.2 543.5c-0.2 0.7-0.4 1.3-0.5 2 0.1-0.7 0.3-1.4 0.5-2zM895.1 563.5c-0.2 0.6-0.4 1.3-0.7 1.9 0.2-0.7 0.5-1.3 0.7-1.9zM900.1 547.5c-0.2 0.7-0.4 1.3-0.6 2 0.2-0.7 0.4-1.3 0.6-2zM910.9 471.7v0zM884.3 590.5c-0.3 0.6-0.6 1.2-0.9 1.9 0.3-0.7 0.6-1.3 0.9-1.9zM897.7 555.5c-0.2 0.7-0.4 1.3-0.6 2 0.2-0.7 0.4-1.3 0.6-2zM847.6 650.8c-0.4 0.5-0.9 1.1-1.3 1.6 0.5-0.6 0.9-1.1 1.3-1.6zM852.7 644.1c-0.4 0.6-0.8 1.1-1.2 1.7 0.3-0.6 0.8-1.2 1.2-1.7zM910.7 480.4c0 0.6-0.1 1.2-0.1 1.8 0-0.6 0.1-1.2 0.1-1.8zM855.1 640.7c-0.4 0.6-0.8 1.1-1.2 1.7 0.4-0.6 0.8-1.1 1.2-1.7zM910.8 476c0 0.6 0 1.1-0.1 1.7 0.1-0.5 0.1-1.1 0.1-1.7zM896.4 559.5c-0.2 0.6-0.4 1.3-0.6 1.9 0.2-0.6 0.4-1.2 0.6-1.9zM857.5 637.3c-0.4 0.6-0.8 1.1-1.2 1.7 0.4-0.6 0.8-1.1 1.2-1.7zM850.2 647.4c-0.4 0.5-0.8 1.1-1.3 1.6 0.4-0.5 0.8-1 1.3-1.6zM878.9 601.7l-0.9 1.8 0.9-1.8zM907.9 510.4c-0.1 0.7-0.2 1.3-0.3 2 0.1-0.7 0.2-1.3 0.3-2zM902.2 539.4c-0.2 0.7-0.3 1.3-0.5 2 0.2-0.7 0.3-1.3 0.5-2zM877 605.3c-0.3 0.6-0.6 1.2-1 1.8 0.3-0.5 0.7-1.1 1-1.8zM875 609c-0.3 0.6-0.7 1.2-1 1.8 0.4-0.6 0.7-1.2 1-1.8zM887.7 582.9c-0.3 0.6-0.5 1.3-0.8 1.9 0.2-0.7 0.5-1.3 0.8-1.9zM898.9 551.5c-0.2 0.6-0.4 1.3-0.6 1.9 0.2-0.6 0.4-1.2 0.6-1.9zM908.5 506.2c-0.1 0.7-0.2 1.3-0.3 2 0.1-0.7 0.2-1.4 0.3-2zM906.6 518.8c-0.1 0.7-0.2 1.3-0.4 2 0.1-0.7 0.2-1.3 0.4-2zM882.6 594.2l-0.9 1.8 0.9-1.8zM905.8 523c-0.1 0.7-0.3 1.3-0.4 2 0.1-0.7 0.3-1.4 0.4-2zM907.3 514.6c-0.1 0.7-0.2 1.3-0.3 2 0-0.7 0.1-1.3 0.3-2zM880.8 598l-0.9 1.8c0.2-0.6 0.6-1.2 0.9-1.8zM886 586.7c-0.3 0.6-0.6 1.2-0.8 1.9 0.3-0.7 0.5-1.3 0.8-1.9zM905 527.1c-0.1 0.7-0.3 1.3-0.4 2 0.1-0.7 0.3-1.3 0.4-2zM866.7 623.4c-0.4 0.6-0.7 1.2-1.1 1.7 0.3-0.6 0.7-1.2 1.1-1.7zM903.2 535.3c-0.2 0.7-0.3 1.3-0.5 2 0.2-0.6 0.3-1.3 0.5-2zM892.3 571.3c-0.2 0.6-0.5 1.3-0.7 1.9 0.2-0.6 0.4-1.3 0.7-1.9zM868.8 619.8c-0.4 0.6-0.7 1.2-1.1 1.8 0.4-0.6 0.8-1.2 1.1-1.8zM904.1 531.2c-0.1 0.7-0.3 1.3-0.5 2 0.2-0.6 0.4-1.3 0.5-2zM845 654.1c-0.4 0.5-0.9 1.1-1.3 1.6 0.4-0.6 0.9-1.1 1.3-1.6zM909.8 493.4c-0.1 0.7-0.1 1.3-0.2 2 0.1-0.7 0.2-1.4 0.2-2zM864.5 626.9c-0.4 0.6-0.7 1.2-1.1 1.7 0.3-0.6 0.7-1.1 1.1-1.7zM909 501.9c-0.1 0.7-0.2 1.3-0.2 2 0-0.7 0.1-1.3 0.2-2zM909.5 497.6c-0.1 0.7-0.1 1.3-0.2 2 0-0.6 0.1-1.3 0.2-2zM889.3 579c-0.3 0.6-0.5 1.3-0.8 1.9 0.2-0.6 0.5-1.2 0.8-1.9zM873 612.6c-0.3 0.6-0.7 1.2-1 1.8 0.3-0.6 0.7-1.2 1-1.8zM870.9 616.2c-0.3 0.6-0.7 1.2-1 1.8 0.4-0.6 0.7-1.2 1-1.8zM890.8 575.2c-0.2 0.6-0.5 1.3-0.8 1.9 0.3-0.7 0.5-1.3 0.8-1.9zM590.8 791.7c-0.8 0.1-1.6 0.3-2.4 0.4 0.7-0.1 1.5-0.3 2.4-0.4zM595.7 790.9c-0.8 0.1-1.6 0.3-2.4 0.4 0.8-0.1 1.6-0.2 2.4-0.4zM600.6 790.1c-0.8 0.1-1.6 0.3-2.4 0.4 0.8-0.1 1.6-0.3 2.4-0.4zM610.4 788.3c-0.8 0.2-1.6 0.3-2.4 0.5 0.8-0.2 1.6-0.4 2.4-0.5zM615.3 787.3c-0.8 0.2-1.6 0.3-2.4 0.5 0.8-0.2 1.6-0.3 2.4-0.5zM605.5 789.2c-0.8 0.1-1.6 0.3-2.4 0.4 0.8-0.1 1.6-0.2 2.4-0.4zM570.7 794.4c-0.8 0.1-1.6 0.2-2.5 0.3 0.8-0.1 1.6-0.2 2.5-0.3zM671.3 772.1c-0.7 0.3-1.5 0.5-2.2 0.8 0.7-0.3 1.5-0.6 2.2-0.8zM580.8 793.2c-0.8 0.1-1.6 0.2-2.5 0.3 0.8-0.1 1.6-0.2 2.5-0.3zM560.4 795.5c-0.8 0.1-1.6 0.2-2.5 0.2 0.9-0.1 1.7-0.2 2.5-0.2zM585.8 792.5l-2.4 0.3c0.7-0.1 1.6-0.2 2.4-0.3zM575.7 793.8c-0.8 0.1-1.6 0.2-2.5 0.3 0.9-0.1 1.7-0.2 2.5-0.3zM653.1 777.8c-0.8 0.2-1.5 0.4-2.3 0.7 0.8-0.2 1.5-0.4 2.3-0.7zM648.5 779.2c-0.8 0.2-1.5 0.4-2.3 0.6 0.7-0.2 1.5-0.4 2.3-0.6zM657.7 776.5c-0.8 0.2-1.5 0.5-2.3 0.7 0.8-0.3 1.5-0.5 2.3-0.7zM662.3 775c-0.8 0.2-1.5 0.5-2.3 0.7 0.8-0.2 1.5-0.4 2.3-0.7zM666.8 773.6c-0.7 0.2-1.5 0.5-2.2 0.7 0.7-0.2 1.5-0.5 2.2-0.7zM634.4 782.9c-0.8 0.2-1.5 0.4-2.3 0.6 0.8-0.2 1.5-0.4 2.3-0.6zM629.7 784.1l-2.4 0.6 2.4-0.6zM624.9 785.2c-0.8 0.2-1.6 0.4-2.4 0.5 0.8-0.1 1.6-0.3 2.4-0.5zM639.1 781.7c-0.8 0.2-1.5 0.4-2.3 0.6 0.8-0.2 1.5-0.4 2.3-0.6zM643.8 780.5c-0.8 0.2-1.5 0.4-2.3 0.6 0.8-0.2 1.5-0.4 2.3-0.6zM620.1 786.3c-0.8 0.2-1.6 0.3-2.4 0.5 0.8-0.2 1.6-0.4 2.4-0.5zM565.6 795c-0.8 0.1-1.6 0.2-2.5 0.3 0.8-0.2 1.6-0.3 2.5-0.3zM555.3 795.9c-0.8 0.1-1.6 0.1-2.5 0.2 0.9-0.1 1.7-0.1 2.5-0.2zM534.6 797.2c-0.8 0-1.7 0.1-2.5 0.1 0.8 0 1.7 0 2.5-0.1zM539.8 797c-0.8 0-1.7 0.1-2.5 0.1 0.8 0 1.7-0.1 2.5-0.1zM550.2 796.3c-0.8 0.1-1.7 0.1-2.5 0.2 0.8-0.1 1.7-0.1 2.5-0.2zM545 796.7c-0.8 0.1-1.7 0.1-2.5 0.2 0.8-0.1 1.7-0.2 2.5-0.2zM529.4 797.4c-0.9 0-1.7 0.1-2.6 0.1 0.9 0 1.7-0.1 2.6-0.1zM524.1 797.6c-0.8 0-1.7 0-2.5 0.1 0.8-0.1 1.6-0.1 2.5-0.1zM518.8 797.7h-2.5 2.5zM675.8 770.5c-0.7 0.3-1.5 0.5-2.2 0.8 0.7-0.3 1.4-0.5 2.2-0.8zM797.3 702.5c-0.5 0.5-1.1 0.9-1.7 1.4 0.6-0.5 1.1-0.9 1.7-1.4zM793.9 705.3c-0.6 0.5-1.1 0.9-1.7 1.3 0.6-0.4 1.2-0.9 1.7-1.3zM807.1 694.1c-0.5 0.5-1.1 0.9-1.6 1.4 0.5-0.5 1.1-1 1.6-1.4zM803.9 696.9c-0.5 0.5-1.1 0.9-1.6 1.4 0.5-0.5 1-0.9 1.6-1.4zM800.6 699.7c-0.5 0.5-1.1 0.9-1.6 1.4 0.5-0.5 1-0.9 1.6-1.4zM790.5 708c-0.6 0.4-1.1 0.9-1.7 1.3 0.6-0.4 1.2-0.9 1.7-1.3zM787.1 710.7c-0.6 0.4-1.1 0.9-1.7 1.3 0.6-0.5 1.1-0.9 1.7-1.3zM776.6 718.5c-0.6 0.4-1.2 0.8-1.8 1.3 0.6-0.5 1.2-0.9 1.8-1.3zM769.4 723.5l-1.8 1.2 1.8-1.2zM780.1 715.9c-0.6 0.4-1.2 0.9-1.8 1.3 0.7-0.4 1.2-0.9 1.8-1.3zM783.6 713.3c-0.6 0.4-1.2 0.9-1.7 1.3 0.6-0.4 1.2-0.9 1.7-1.3zM773 721l-1.8 1.2 1.8-1.2zM831.3 670.1c-0.5 0.5-0.9 1-1.4 1.5 0.5-0.5 0.9-1 1.4-1.5zM810.3 691.2c-0.5 0.5-1 1-1.6 1.4 0.5-0.5 1-1 1.6-1.4zM839.7 660.5c-0.4 0.5-0.9 1.1-1.4 1.6 0.5-0.5 0.9-1 1.4-1.6zM828.4 673.2c-0.5 0.5-1 1-1.4 1.5 0.5-0.5 1-1 1.4-1.5zM836.9 663.8c-0.5 0.5-0.9 1-1.4 1.6 0.5-0.6 1-1.1 1.4-1.6zM834.1 666.9c-0.5 0.5-0.9 1-1.4 1.6 0.5-0.5 1-1.1 1.4-1.6zM825.5 676.3l-1.5 1.5 1.5-1.5zM816.5 685.3l-1.5 1.5 1.5-1.5zM813.4 688.3c-0.5 0.5-1 1-1.5 1.4 0.5-0.5 1-1 1.5-1.4zM822.6 679.3l-1.5 1.5 1.5-1.5zM819.5 682.3l-1.5 1.5 1.5-1.5zM680.2 768.9c-0.7 0.3-1.5 0.5-2.2 0.8 0.8-0.3 1.5-0.5 2.2-0.8zM706.2 758.4l-2.1 0.9 2.1-0.9zM710.4 756.5l-2.1 0.9c0.7-0.2 1.4-0.5 2.1-0.9zM701.9 760.3l-2.1 0.9 2.1-0.9zM722.8 750.6c-0.7 0.3-1.3 0.7-2 1 0.7-0.3 1.4-0.6 2-1zM714.6 754.6c-0.7 0.3-1.4 0.6-2.1 1 0.7-0.3 1.4-0.7 2.1-1zM718.7 752.6c-0.7 0.3-1.4 0.7-2 1 0.7-0.3 1.4-0.6 2-1zM684.6 767.3c-0.7 0.3-1.4 0.5-2.2 0.8 0.8-0.3 1.5-0.6 2.2-0.8zM842.4 657.3c-0.4 0.5-0.9 1.1-1.3 1.6 0.4-0.5 0.8-1 1.3-1.6zM697.7 762.1l-2.1 0.9 2.1-0.9zM689 765.6c-0.7 0.3-1.4 0.6-2.2 0.8 0.8-0.3 1.5-0.5 2.2-0.8zM693.4 763.9l-2.1 0.9c0.6-0.4 1.3-0.7 2.1-0.9zM750.6 735.5c-0.6 0.4-1.3 0.8-1.9 1.1 0.7-0.4 1.3-0.7 1.9-1.1zM765.7 726l-1.8 1.2 1.8-1.2zM746.8 737.8c-0.6 0.4-1.3 0.7-1.9 1.1 0.6-0.4 1.2-0.8 1.9-1.1zM754.4 733.2c-0.6 0.4-1.3 0.8-1.9 1.1 0.7-0.4 1.3-0.7 1.9-1.1zM762 728.4l-1.8 1.2c0.5-0.4 1.2-0.8 1.8-1.2zM758.2 730.8zM742.9 740c-0.6 0.4-1.3 0.7-1.9 1.1 0.6-0.4 1.2-0.7 1.9-1.1zM735 744.4c-0.7 0.4-1.3 0.7-2 1.1 0.7-0.4 1.3-0.8 2-1.1zM731 746.5c-0.7 0.3-1.3 0.7-2 1 0.6-0.3 1.3-0.7 2-1zM726.9 748.6c-0.7 0.3-1.3 0.7-2 1 0.7-0.3 1.4-0.7 2-1zM738.9 742.2c-0.6 0.4-1.3 0.7-1.9 1.1 0.6-0.4 1.3-0.7 1.9-1.1z" /><path d="M712.1 959.8H311.9c-68.9 0-125-56.1-125-125V395.6c0-13.8 11.2-25 25-25s25 11.2 25 25v439.2c0 41.4 33.6 75 75 75H712c41.4 0 75-33.6 75-75V395.6c0-13.8 11.2-25 25-25s25 11.2 25 25v439.2c0.1 68.9-56 125-124.9 125zM901.9 277H122.1c-13.8 0-25-11.2-25-25s11.2-25 25-25h779.8c13.8 0 25 11.2 25 25s-11.2 25-25 25z" /><path d="M414.8 779.7c-13.8 0-25-11.2-25-25V395c0-13.8 11.2-25 25-25s25 11.2 25 25v359.7c0 13.8-11.2 25-25 25zM610.7 779.7c-13.8 0-25-11.2-25-25V395c0-13.8 11.2-25 25-25s25 11.2 25 25v359.7c0 13.8-11.2 25-25 25zM782.4 246.6h-50v-57.4c0-41.4-33.6-75-75-75H366.6c-41.4 0-75 33.6-75 75v53h-50v-53c0-68.9 56.1-125 125-125h290.9c68.9 0 125 56.1 125 125v57.4z" /></svg>
          </button>


        </div>
      
      </td>
    </tr>
  ))}
</tbody>
      </table>
      
    </div>
    <br />

  </div>
</div>
</div>
     
    </div>
  )
}
