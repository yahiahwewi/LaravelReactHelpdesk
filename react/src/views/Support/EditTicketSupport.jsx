import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import axiosClient from '../../axios-client';
import { Link, useParams } from 'react-router-dom';
import { useRef } from 'react';


export default function EditTicketSupport() {
  const { id } = useParams();
  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [body, setBody] = useState('');
  const bodyRef = useRef();

const {user, token, setUser, setToken, notification} = useStateContext();
 const [tickets, setTickets] = useState(['']);
 const [filteredUsers, setFilteredUsers] = useState([]);
 const [admins, setAdmins] = useState([]);
 const [teams,  setTeams] = useState(['']);


 const [title, setTitle] = useState(tickets.title);
 const [teamId, setTeamId] = useState(tickets.team && tickets.team.id);
 const [assigned_to, setAssigned_to] = useState(tickets.assigned_to && tickets.assigned_to.id);
 const [priority, setPriority] = useState(tickets.priority);
 const [type, setType] = useState(tickets.type);
 const [tag, setTag] = useState(tickets.tag);
 const [description, setDescription] = useState(tickets.tag);
 const [clicked, setClicked] = useState(false);
 const [clicked2, setClicked2] = useState(false);

 const [selectedFile, setSelectedFile] = useState('');




  function handleClick1() {
    axiosClient.put(`/editTicketByAdmin/${id}`, {
      step: 'NOUVEAU',
    }).
      then(response => { window.location.reload(); })
  }


  function handleClick2() {
    axiosClient.put(`/editTicketByAdmin/${id}`, {
      step: 'EN ATTENTE',
    }).
      then(response => { window.location.reload(); })
  }

  function handleClick3() {
    axiosClient.put(`/editTicketByAdmin/${id}`, {
      step: 'EN COURS',
    }).
      then(response => { window.location.reload(); })
  }

  function handleClick4() {
    axiosClient.put(`/editTicketByAdmin/${id}`, {
      step: 'ANNULÉ',
    }).
      then(response => { window.location.reload(); })
  }


  function handleClick5() {
    axiosClient.put(`/editTicketByAdmin/${id}`, {
      step: 'RÉSOLU',
    }).
      then(response => { window.location.reload(); })
  }








 const onSubmit = async (ev) => {
  ev.preventDefault();

  const input = bodyRef.current.value;
  if (!input || input.length > 50) {
    setError("Le message doit contenir entre 2 et 20 caractères");
    return;
  }
  const formData = new FormData();
  formData.append('body', bodyRef.current.value);
  formData.append('photo', selectedFile);
  if (selectedFile && !selectedFile.type.startsWith('image/')) {
    setError("Le fichier doit être une image");
 return;
  }
 
  try {
    const response = await axiosClient.post(`/addComment/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });


    // console.log(response.data);
  } catch (error) {
    console.error(error);
  } finally {
window.location.reload()  
}
};









 function handleDeleteTicket() {
  const confirmation = window.confirm('Voulez-vous vraiment supprimer ce ticket ?  ');

  if (confirmation) {
    axiosClient.delete(`/deleteticket/${id}`)
      .then(response => {
        console.log('Ticket deleted successfully:', response.data);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error deleting ticket:', error);
      });
  } else {
    console.log('Ticket deletion canceled.');
  }
}


 const handleTitleChange = (event) => {
  setTitle(event.target.value);
}

const handleTeamChange = (event) => {
  setTeamId(event.target.value);
}
const handleAssigned_toChange = (event) => {
  setAssigned_to(event.target.value);
}

const handlePriorityChange = (event) => {
  setPriority(event.target.value);
}


const handleTypeChange = (event) => {
  setType(event.target.value);
}

const handleTagChange = (event) => {
  setTag(event.target.value);
}
const handleDescriptionChange = (event) => {
  setDescription(event.target.value);
}



function handleClick() {
  axiosClient.put(`/editTicketByAdmin/${id}`, {
    title: title,
    team_id: teamId,
    assigned_to:assigned_to,
    priority:priority,
    type:type,
    tag:tag,
    description:description,


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
  if (user && user.id) {
    
    axiosClient.get(`/comments2/${id}`)
      .then(data => {
          setComment(data.data);
      })
      .catch(error => {
        console.log(`Error fetching comments: ${error}`);
      });
  }
}, [user, id]);

// console.log(comment)

  useEffect(() => {
    setIsLoading(true);
    axiosClient.get(`/byid/${id}`)
      .then(({ data }) => {
        setTickets(data);

      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        window.location.href = '/ticketlist'
      });
  }, []);
  
  useEffect(() => {
    axiosClient.get('/isAdmin')
      .then(({data}) => {
         setAdmins(data.admins)
      })
  }, [])


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
  // console.log(admins)
  
  

  
  function formatDate(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diff = now - date;
    const msInDay = 24 * 60 * 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInMinute = 60 * 1000;
  
    if (diff < msInMinute) {
      return "il y'a moins d'une minute";
    } else if (diff < msInHour) {
      const minutes = Math.floor(diff / msInMinute);
      return `il y'a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else if (diff < msInDay) {
      const hours = Math.floor(diff / msInHour);
      return `il y'a ${hours} heure${hours > 1 ? 's' : ''}`;
    } else {
      const days = Math.floor(diff / msInDay);
      return `il y'a ${days} jour${days > 1 ? 's' : ''}`;
    }
  }
  

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

<div className="bg-[#f6f7fb] h-full w-full">
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

      <div className="container mx-auto px-4 py-8">

      <div className="flex mt-">
      

<div className=' bg-[#ffff] mr-2 ml-6  shadow-xl h-full p-4 w-2/5 rounded-2xl border-t-4 border-[#d6c5c5] overflow-y-auto '>

<div className='flex relative'>
<Link to="/ticketlist">
  <a href="/" className=" top-2 m flex-none">
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

<h1 className="mt-6 mb-6 font-bold text-center justify-center items-center text-3xl flex gap-1 items-baseline font-mono">Détails<span className="text-sm text-purple-700">TICKET-{tickets.id} ({tickets.step})

</span></h1>
  
    </div>
<div className="grid grid-cols-3 gap-1">
  <div className="flex flex-col">
    <label htmlFor="title" className="font-medium mb-0">Titre</label>
    <input
  defaultValue={tickets.title}
  onChange={handleTitleChange}

  type="text"
  id="title"
  name="title"
  className="border rounded-lg py-2 px-3"
/>
  </div>
  <div className="flex flex-col">
    <label htmlFor="team" className="font-medium mb-0">Équipe</label>
    <select
  id="team"
  name="team"
  className="border rounded-lg py-2 px-3"
  value={teamId}
  onChange={handleTeamChange}>
    <option value={tickets.team && tickets.team.id}>{tickets.team && tickets.team.title}</option>

  {teams.map((team) => (
    <option key={team.id} value={team.id}>
      {team && team.title}
    </option>
  ))}
</select>

  </div>
  <div className="flex flex-col">
    <label htmlFor="assigne" className="font-medium mb-0">Assigné à</label>
    <select onChange={handleAssigned_toChange}  id="assigned_to" name="assigned_to" className="border rounded-lg py-2 px-3">
  <option value={tickets.assigned_to && tickets.assigned_to.name}>{tickets.assigned_to && tickets.assigned_to.name}</option>
  {admins.map((admin) => (
    <option key={admin.id} value={admin.id}>{admin.name}</option>
  ))}
</select>

  </div>
  <div className="flex flex-col">
    <label htmlFor="priorite" className="font-medium mb-0">Priorité</label>
    <select onChange={handlePriorityChange} id="priorite" name="priorite" className="border rounded-lg py-2 px-3">
      <option  value={tickets.priority}>{tickets.priority && tickets.priority}</option>
      <option value="Priorité moyenne">Priorité moyenne </option>
    <option value="Priorité élevée">Priorité élevée</option>
    <option value="Urgent">Urgent</option>
    </select>
  </div>
  <div className="flex flex-col">
    <label htmlFor="type" className="font-medium mb-0">Type</label>
    <select onChange={handleTypeChange}  id="type" name="type" className="border rounded-lg py-2 px-3">
    <option value={tickets.type}>{tickets.type}</option>
    <option value="Incident">Incident</option>
    <option value="Question">Question</option>
    </select>
  </div>
 
  <div className="flex flex-col">
    <label htmlFor="etiquettes" className="font-medium mb-0">Étiquettes</label>
    <input onChange={handleTagChange} defaultValue={tickets.tag} placeholder='#TAG'  type="text" id="etiquettes" name="etiquettes" className="border rounded-lg py-2 px-3"/>
  </div>
  <div className="flex flex-col">
  <div className="flex flex-col">
    <label htmlFor="client" className="font-medium mb-0">Client</label>
    <input disabled defaultValue={tickets.user_details && tickets.user_details.name} type="text" id="client" name="client" className="border rounded-lg py-2 px-3"/>
  </div>
</div>
  <div className="flex flex-col">
    <label htmlFor="email" className="font-medium mb-0">Email</label>
    <input disabled defaultValue={tickets.email} type="email" id="email" name="email" className="border rounded-lg py-2 px-3"/>
  </div>

  <div className="flex flex-col">
    <label htmlFor="telephone" className="font-medium mb-0">Téléphone</label>
    <input disabled defaultValue={tickets.phone} type="tel" id="telephone" name="telephone" className="border rounded-lg py-2 px-3"/>
  </div>



<div className="flex flex-col col-span-2">
    <label htmlFor="description" className="font-medium mb-0">Description</label>
<textarea  onChange={handleDescriptionChange}
  defaultValue={tickets.description}
  id="description"
  name="description"
  className="border rounded-lg py-2 px-3 resize-none"
  rows="8"
  cols="90"
></textarea>

  </div>
</div>
<div className='mt-4'>
  <button onClick={handleClick} className="bg-[#017e84] hover:bg-[#335455] text-white px-4 py-2 mb-4 mt-6">
    Enregistrer
  </button>




  <button onClick={handleDeleteTicket} className="bg-[#017e84] ml-1 hover:bg-[#335455] text-white px-4 py-2 mb-4 mt-6">
    Cloturer
  </button>
</div>



</div> 




  <div className=' bg-white ml-2 mr- shadow-xl h-full p-4 w-3/5 rounded-2xl border-t-4 border-[#d6c5c5]  '>
    {/* <p>This is a new div with some text.</p> */}
    <div className="flex items-center justify-center h-auto">
  <div className="container w-96 absolute">
    <div className="bg-[#d6c5c5] text-center justify-center rounded-b-lg  h-11 w-auto mx-auto">
      <div className="flex-initial pt-2 mt-1">
        <button onClick={() => setClicked2(!clicked2)} className="pt-0 mr-  text-white font-bold">Étape</button>

       
        <button
        className="pt-0 ml-6 text-white font-bold"
        onClick={() => setClicked(!clicked)}
      >
         Envoyer un message 
      </button>
      </div>
    </div>
  </div>
</div>

{clicked && (
        <div className="mt-9 ml-4 mr-4 ">
          <textarea
          ref={bodyRef}
          onChange={(e) => setBody(e.target.value)}
            name="reviews"
            minLength={2}
            required
            placeholder="Envoyer un message..."
            className="w-full p-auto py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          ></textarea>


<div className="flex">
  <button onClick={onSubmit} className="bg-[#017e84] rounded-sm hover:bg-[#335455] mt-1 mr-1 h-9 w-36 text-white px-0 py-0">
    Envoyer
  </button>

  <label className="bg-[#e0dede] hover:bg-gray-200 rounded-sm py-2 px-3 w-10 mt-1 h-9 cursor-pointer">
    <input  onChange={(e) => setSelectedFile(e.target.files[0])}  type="file" className="hidden w-36" />
    <svg height="20px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 280.067 280.067" xmlSpace="preserve">
<g>
	<path clasname="fill:#D07C40;" d="M149.823,257.142c-31.398,30.698-81.882,30.576-113.105-0.429
		c-31.214-30.987-31.337-81.129-0.42-112.308l-0.026-0.018L149.841,31.615l14.203-14.098c23.522-23.356,61.65-23.356,85.172,0
		s23.522,61.221,0,84.586l-125.19,123.02l-0.044-0.035c-15.428,14.771-40.018,14.666-55.262-0.394
		c-15.244-15.069-15.34-39.361-0.394-54.588l-0.044-0.053l13.94-13.756l69.701-68.843l13.931,13.774l-83.632,82.599
		c-7.701,7.596-7.701,19.926,0,27.53s20.188,7.604,27.88,0L235.02,87.987l-0.035-0.026l0.473-0.403
		c15.682-15.568,15.682-40.823,0-56.39s-41.094-15.568-56.776,0l-0.42,0.473l-0.026-0.018l-14.194,14.089L50.466,158.485
		c-23.522,23.356-23.522,61.221,0,84.577s61.659,23.356,85.163,0l99.375-98.675l14.194-14.089l14.194,14.089l-14.194,14.098
		l-99.357,98.675C149.841,257.159,149.823,257.142,149.823,257.142z"/>
</g>
</svg>
  </label>

    </div>
</div>

        
      )}





      {clicked2 && (

      <div className='flex relative text-center justify-center mt-8'>
<h1 className="mt-6 mb-2 font-bold text-3xl flex gap-1 items-baseline font-mono"><span className="text-sm text-purple-700">
<p>Étape  : {tickets.step   }</p>

<div className=' flex mt-4'>

  <button onClick={handleClick1} className='ml-2 hover:bg-[#dacaca] cursor-pointer font font-light'> NOUVEAU </button>
  <p className='ml-2'> - </p>

  <button onClick={handleClick2} className='ml-2 hover:bg-[#dacaca] cursor-pointer font-light'> EN ATTENTE </button>
  <p className='ml-2'> - </p>

  <button onClick={handleClick3} className='ml-2 hover:bg-[#dacaca]  cursor-pointer font-light'> EN COURS </button>
  <p className='ml-2'> - </p>

  <button onClick={handleClick4} className='ml-2 hover:bg-[#dacaca] cursor-pointer font-light'> ANNULÉ</button>

  <p className='ml-2'> - </p>

<button onClick={handleClick5} className='ml-2 hover:bg-[#dacaca] cursor-pointer font-light'> RÉSOLU</button>


</div> 

</span></h1>
  
    </div> 

      )}
<br />


{comment.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((comment) => (
  // rest of the code

  
  <div key={comment.id} className=' p-3 rounded-xl mb-2 relative'>
 
  <div className="relative flex py-3 items-center">
  
    <div className="flex-grow border-t border-gray-400"></div>
    <small className="flex-shrink mx-4 font-extralight text-gray-400">
  {new Date(comment.created_at).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })}
</small>
    <div className="flex-grow border-t border-gray-400"></div>
</div>
    <div className='flex items-center '>
      {comment.user.role && comment.user.role == 1 ? (
        <img className='w-6 h-6 mr-2' src='https://www.pngall.com/wp-content/uploads/4/Mic-Chat-Support-PNG-Free-Download.png'></img>

      ) : (
                <img className='w-6 h-6 mr-2' src='https://cdn.onlinewebfonts.com/svg/img_308642.png'></img>

      )}
      <p className='font-bold'>{comment.user.name}</p>
      <small className='text-gray-500  ml-2'>{formatDate(comment.created_at)}</small>
    </div>
    <p className='mt-0 '>{comment.body}</p>
    {comment.photo && (

<div className="p-2 mr-4 absolute right-0 top-6 ">
<a href='#' className="block ">
<small>{comment.photo}</small></a>
  <a href={`${axiosClient.defaults.baseURL}/comments/photos/${comment.photo}`} target="_blank">
    <img className='h-188 w-12 block ml-3' src={`${axiosClient.defaults.baseURL}/comments/photos/${comment.photo}`} alt="" />
  </a>
</div>
)}

  </div>
))}
<hr className="m-12  border-dashed border-1 border-black "/>
<div className='m-4'>
{/* <hr className="m-4 bg-black border-2 "/> */}


    <div className='flex items-center'>
      <img className='w-6 h-6 mr-2' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2DqXAik25bjpqibXr0CBRgURitjEDIXEs1S5BnQML8VwBMHsU'></img>
      <p className='font-bold'>BOT <small className='mt-14 font-light'>généré automatiquement</small></p>
      <small className='text-gray-500 mt-1 ml-2'>{formatDate(tickets.created_at)}</small>
    </div>
    <p className='mt-2'>Bonjour {tickets.user_details && tickets.user_details.name} ,</p>
    <p className='mt-2 font-extralight'>Votre demande {tickets.name} a été reçue et est en cours d'examen par notre équipe Service Clientèle.<br/> La référence de votre ticket est {tickets.id}.<br/> Pour ajouter des commentaires supplémentaires, répondez à cette message , ou envoyez un mail.<br/>Merci,<br/>L'équipe Service Clientèle.
</p>
<br />
  <div className=' border-gray-200 p-2 rounded-xl'>
    <div className='flex items-center'>
      <img className='w-6 h-6 mr-2' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2DqXAik25bjpqibXr0CBRgURitjEDIXEs1S5BnQML8VwBMHsU'></img>
      <p className='font-bold'>BOT</p>
      <small className='text-gray-500  ml-2'>{formatDate(tickets.created_at)}</small>
    </div>
    <p className='mt-2 mb-2'>Ticket créé ✅</p>

  </div>



  

</div>






</div>









</div> 






 </div>  
</div>  
      
  )
    }