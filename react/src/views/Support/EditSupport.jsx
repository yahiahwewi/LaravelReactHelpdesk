import React from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosClient from '../../axios-client';
import { useState } from 'react';

export default function EditSupport() {
    const [support,  setSupport] = useState(['']);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [teams,  setTeams] = useState(['']);
    const [name, setName] = useState(support.name);
    const [email, setEmail] = useState(support.email);
    const [team, setTeam] = useState(teams.title);
    const [teamId, setTeamId] = useState(team && team.id);




    const handleNameChange = (event) => {
        setName(event.target.value);
      }

      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }
      const handleTeamChange = (event) => {
        setTeamId(event.target.value);
      }


      function handleUpdate() {
        axiosClient.put(`/supportupdate/${id}`, {
          name: name,
          email:email,
          // team:team,
          team_id: teamId,

      
      
        })
          .then(response => {
            window.location.reload();
            console.log('Ticket updated successfully:', response.data);
            // console.log(ticketData);
      
          })
          .catch(error => {
            console.error('Error updating ticket:', error);
            console.log(title);
            
          });
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

    useEffect(() => {
        axiosClient.get(`/support/${id}`)
          .then(({ data }) => {
            setSupport(data);
            setIsLoading(false);
          })
          .catch(error => {
            console.log(`Error fetching support: ${error}`);
            setIsLoading(false);
          });
      }, []);


      
  return (
    <div>
    
    <div>
          <a href="#" className="mt-12 block max-w-xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <Link to="/support">
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
        <h3 className="font-bold text-lg text-center ">{support.name}</h3>
      </div>
      <div className="p-4">
      <div className="flex items-center justify-between mb-4">
          <div className="font-bold">ID</div>
          <input disabled  className="text-right w-64 px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            defaultValue={support.id}
            // onChange={handleTitleChange}
></input>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="font-bold">NOM</div>
          <input  className=" text-right w-64 px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            defaultValue={support.name}
            onChange={handleNameChange}
></input>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="font-bold">EMAIL</div>
          <input             className="text-right w-64 px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
           defaultValue={support.email}
            onChange={handleEmailChange}
            >


</input>
        </div>


        <div className="flex items-center justify-between mb-4">
        <div className="font-bold">Département</div>
        <select   onChange={handleTeamChange}
          value={teamId}


  id="team"
  name="team"
  className="w-64 px-4 py-2 text-right rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//   value={teamId}
  >
    <option value={teams.title && teams.title}>{support.team_id && support.team_id}</option>

  {teams.map((team) => (
    <option key={team.id} value={team.id}>
      {team && team.title}
    </option>
  ))}
</select>

  </div>

        <div className="flex items-right justify-between">
          <div className="font-bold">DATE D'INSCRIPTION</div>
          <div className="text-right w-64 px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500">{new Date(support.created_at).toLocaleString()}</div>
        </div>
      </div>
      <button onClick={handleUpdate}
    //    onClick={handleUpdate}
    className="bg-[#017e84] hover:bg-[#335455] text-white px-4 py-2 mb-4 mt-6 ml-4"
  >Enregistrer
  </button>
    </a>

    </div>

    
    
    </div>
  )
}
