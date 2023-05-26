import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import axiosClient from '../../axios-client';

export default function ShowTeam() {
  const [team,  setTeam] = useState(['']);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();


  
  useEffect(() => {
    axiosClient.get(`/teams/${id}`)
      .then(({ data }) => {
        setTeam(data.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(`Error fetching teams: ${error}`);
        setIsLoading(false);
      });
  }, []);
// console.log(team)







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


  return (
    <div>
          <a href="#" className="mt-12 block max-w-xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <Link to="/teamlist">
            <a href="/" className=" top-4 left-4 flex-none">
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
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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

      <div className="bg-gray-100 rounded-md p-4 m-4">
        <h3 className="font-bold text-lg text-center ">Service technique</h3>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="font-bold">NOM</div>
          <div>{team.title}</div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="font-bold">EMAIL</div>
          <div>{team.email}</div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="font-bold">DESCRIPTION</div>
          <div>{team.description && team.description}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="font-bold">DATE DE CRÉATION</div>
          <div>{new Date(team.created_at).toLocaleString()}</div>
        </div>
      </div>
    </a>

    </div>

    
  )
}
