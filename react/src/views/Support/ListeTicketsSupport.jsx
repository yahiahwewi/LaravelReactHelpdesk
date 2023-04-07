import React, { useEffect, useState } from 'react'
import Rating from 'react-rating-stars-component';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider';
import { Link } from 'react-router-dom';

export default function SupportTicketEdit() {
  const [isLoading, setIsLoading] = useState(true);
  const {user,  setUser} = useStateContext();
  const {token, setToken} = useStateContext();
  const [users, setUsers] = useState([]);

  const [tickets, setTickets] = useState(['']);
  useEffect(() => {
    setIsLoading(true);
    axiosClient.get(`/ticketsall`)
      .then(({ data }) => {
        setTickets(data.tickets);
        setIsLoading(false);
        
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    axiosClient.get('/user?role=1')
      .then(({data}) => {
         setUser(data)
      })
  }, [])
console.log(user)





  return (

<div>


    <div className="bg-[#f6f7fb] h-screen   w-screen ">
      <div className="container mx-auto px-4 py-8">


        <div className=' bg-white rounded-xl shadow-xl h-auto w-5/6 mx-auto '>

          <div className="container mx-auto px-4 py-8">     
                 {isLoading && <p className="pt-12 flex justify-center items-center h-full text-2xl font-bold text-gray-700 dark:text-white">Chargement...</p>}
                 {!isLoading && (
                      <div>
            <h1 className="text-2xl font-bold mb-4 text-[#675563]">Liste des tickets</h1>
            
            <div className="overflow-x-auto">
              <table className="table-auto border- w-full">
             
                <thead>
                  <tr>
                    <th className="   px-6 py-2 text-center  "> ID</th>
                    <th className="   px-4 py-2 text-left ">Priorité</th>
                    <th className="   px-4 py-2 text-left ">Nom</th>
                    <th className="   px-4 py-2 text-left ">Équipe</th>
                    <th className="   px-4 py-2 text-left ">Assigné à</th>
                    <th className="   px-4 py-2 text-left ">Client</th>
                    <th className="   px-4 py-2 text-center ">Étape</th>
                  </tr>
                </thead>
                <tbody>
        {tickets.map((row) => (
          <tr className='p-4' key={row.id}>
          <td className="px-4 py-2  bg-[#ffffff] relative">
          <Link className='text-left' to={`/resolveticket/${row.id}`}>
          <button className=" mr-2 bg-[#d4c2f8] hover:bg-gray-400 text-gray-800   rounded inline-flex items-center">
      <small className='p-1'>Editer</small>
    </button>
    
  </Link>
  {row.id}
</td>
<td className="px-4 py-2">
  <p className={`text-lg ${row.priority === 'Urgent' ? 'text-red-600' : row.priority === 'Priorité élevée' ? 'text-yellow-700' : row.priority === 'Priorité moyenne' ? 'text-green-800' : 'text-black'}`}>
    {row.priority}
  </p>
</td>
            <td className="   px-4 py-2 text-left ">{row.title}</td>
            <td className="   px-4 py-2 text-left ">{row.team && row.team.title}</td>
            <td className="   px-4 py-2 text-left ">{row.assigned_to && row.assigned_to.name}</td>
            <td className="   px-4 py-2 text-left "><b>{row.user_details && row.user_details.name}</b></td>
            <td className=" bg-[#c9febc]   px-4 py-2 text-center ">{row.step}</td>

          </tr>
        ))}
      </tbody>
              </table>
            </div>
          </div>
          )}
          </div>
        </div>
      </div>
    </div>
    
    </div>        
  )
}
