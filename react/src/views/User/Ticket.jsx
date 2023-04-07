import React, { useState, useRef ,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider';



export default function ({ ticketId }) {
const [body, setBody] = useState('');
const {user,  setUser} = useStateContext();
const [comment, setComment] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(true);

const { id } = useParams();
const bodyRef = useRef();
const [tickets, setTickets] = useState(['']);
const [selectedFile, setSelectedFile] = useState('');

const handleDelete = async () => {
  const confirmed = window.confirm("Êtes-vous sûr de vouloir continuer ?  ");
  if (!confirmed) {
    return; // If the user cancels the confirmation, do nothing
  }

  try {
    const response = await axiosClient.delete(`/tickets/${id}`);
    // console.log(response.data);
    window.location.href = '/dashboard'; 
    // Do something with the response, e.g. update state to remove the deleted ticket
  } catch (error) {
    console.error(error);
    // Handle error
  }
}

  
useEffect(() => {
  
  setIsLoading(true);
  axiosClient.get(`/userTickets/${id}`)
    .then(({ data }) => {
      setTickets(data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(true);
      window.location.href = '/dashboard'; 
      
    });
}, []);


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
window.location.reload()  }
};


useEffect(() => {
  axiosClient.get(`/comments/${id}`)
    .then(response => {
        setComment(response.data);
        
      
    })
    .catch(error => {
      console.log(`Error fetching comments: ${error}`);
    });
}, []);

  return (

    <div>
            <ToastContainer/>

    {isLoading ? (
      <div className="flex items-center justify-center space-x-2 mt-12">
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
</div>
    ) : (
      <div>

  {/* //  // background  */}
    <div className="bg-gray-200 " >




{/* user details card  */}
<div className="flex relative">
<Link to="/dashboard" />
    <a href='/' className="absolute top-0 left-7">
    <svg fill="#68ea39" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-98.62 -98.62 416.39 416.39" xml:space="preserve" stroke="#68ea39">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575 C0.002,169.995,49.157,219.151,109.576,219.151z M109.576,15c52.148,0,94.573,42.426,94.574,94.575 c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577C15.003,57.427,57.428,15,109.576,15z"></path>
          <path d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008 c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825 c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628 c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"></path>
        </g>
      </g>
    </svg>
  </a>
  <Link/>

    {/* <div>
      {comment.map(comment => (
        <div key={comment.id}>
          <p>User ID: {comment.user_id}</p>
          <p>Comment: {comment.body}</p>
          <p>Created At: {comment.created_at}</p>
        </div>
      ))}
    </div> */}


  <div className="bg-white rounded-lg shadow-xl p-4 w-64 h-full mt-12 ml-10 mr-10 mb-10 ">
  <button onClick={handleDelete} className="mt-2 bg-fuchsia-600 text-white py-2 px-4 rounded-lg hover:bg-black w-full mb-4">Clôturer le tickets</button>
  <hr className="h-px mt-4 bg-black border-0 "/>


  <div className='mt-6'>
  <h1 className='font-bold mt-2 items-center'>Assigné à :</h1>
  <div className="flex items-center mb-2 mt-4">
  <svg className="mr-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 107.38"><title>customer-care</title><path d="M81.75,54.65l-.53,1.64-.08.14-.07.09a7.23,7.23,0,0,1-2,.23,12.84,12.84,0,0,0,.61-5.63h0a1.53,1.53,0,0,1,.61-1.35,6.82,6.82,0,0,0,2.38-3.39L83,43.77a4.93,4.93,0,0,0-.19-1.05c0-.12-.08-.21-.11-.29l-.26,0A1.53,1.53,0,0,1,81,40.91c.05-4.92-.47-8-1.37-10.13-1.52-2.57-3.87-3.87-6.67-5.27-.49-.21-1-.44-1.5-.7-9.13,9.54-16.69-2.73-27.52,15.75h-.37c-.14.32-.29.64-.43,1l-.08.16a1.53,1.53,0,0,1-2.09.56q-.37-.21-.42-.18c-.06,0-.13.16-.22.37A4.7,4.7,0,0,0,40,44c-.11,2.16.59,5,2,6.37a1.51,1.51,0,0,1,.47,1.06c.16,6.6,3.09,9.12,6.65,12.19l1.5,1.3c3.57,3.18,7.34,4.82,11,4.82S68.81,68.2,72.13,65h2.42l.26,0c.49,0,1.11,0,1.81,0l-.81.77-1.48,1.4c-4,3.81-8.26,5.65-12.64,5.65s-8.92-1.91-13.07-5.6l-1.46-1.28c-3.51-3-6.49-5.59-7.42-11.21l-4.82.39a3.58,3.58,0,0,1-4.05-2.93L29,37.41a3.55,3.55,0,0,1,3.21-3.91l1.57-.13a1.78,1.78,0,0,1-.16-.65c-.94-15.35,5.68-25,14.63-29.63A29.77,29.77,0,0,1,77.36,4.6c8.18,5.27,13.52,14.91,11.12,28.32a2.45,2.45,0,0,1-.18.54l2.39.27A3.81,3.81,0,0,1,94.08,38L92.23,52.06a3.93,3.93,0,0,1-4.39,3.29h0a28.24,28.24,0,0,1-1,3.13,7,7,0,0,1-1.5,2.33c-2,2.06-8.46,2.06-10.75,2.06h-6a7,7,0,0,1-5.25,2c-3.32,0-6-1.76-6-3.93s2.68-3.93,6-3.93A7.06,7.06,0,0,1,68.4,59h6.15c1.8,0,7.14,0,8.06-.93a3,3,0,0,0,.64-1l.68-2.12-2.18-.25ZM38,27.17c3.4-15.86,21.89-25.75,39.44-15.68a18.7,18.7,0,0,1,4.27,3.36,21.12,21.12,0,0,0-6.82-7A24.84,24.84,0,0,0,62.82,4,24.39,24.39,0,0,0,50.4,6.53C43.82,9.89,38.72,16.65,38,27.17ZM44.78,73,54,97.19,58.64,84l-2.27-2.48c-1.71-2.5-1.12-5.33,2-5.84a22.86,22.86,0,0,1,3.43-.07,18.09,18.09,0,0,1,3.77.15c2.94.64,3.25,3.49,1.78,5.76L65.12,84l4.63,13.2L78.1,73c6,5.42,27.21,6.51,33.84,10.2,9.18,5.14,8.93,15,10.94,24.2H0c2-9.11,1.79-19.14,10.94-24.2C19.09,78.65,38.11,79,44.78,73Z"/></svg></svg>


    <div>
      <h1 className="text-lg font-medium">{user.name}</h1>
      <p className="text-gray-500 text-sm">{user.email}</p>

    </div>
  </div>
</div>


<div className='mt-6'>
  <h1 className='font-bold mt-2 items-center'>Client :</h1>
  <div className="flex items-center mb-2 mt-4">
  <svg className="mr-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
  <path d="M843.282963 870.115556c-8.438519-140.515556-104.296296-257.422222-233.908148-297.14963C687.881481 536.272593 742.4 456.533333 742.4 364.088889c0-127.241481-103.158519-230.4-230.4-230.4S281.6 236.847407 281.6 364.088889c0 92.444444 54.518519 172.183704 133.12 208.877037-129.611852 39.727407-225.46963 156.634074-233.908148 297.14963-0.663704 10.903704 7.964444 20.195556 18.962963 20.195556l0 0c9.955556 0 18.299259-7.774815 18.962963-17.73037C227.745185 718.506667 355.65037 596.385185 512 596.385185s284.254815 122.121481 293.357037 276.195556c0.568889 9.955556 8.912593 17.73037 18.962963 17.73037C835.318519 890.311111 843.946667 881.019259 843.282963 870.115556zM319.525926 364.088889c0-106.287407 86.186667-192.474074 192.474074-192.474074s192.474074 86.186667 192.474074 192.474074c0 106.287407-86.186667 192.474074-192.474074 192.474074S319.525926 470.376296 319.525926 364.088889z" />
</svg>
    <div>
      <h1 className="text-lg font-medium">{user.name}</h1>
      <p className="text-gray-500 text-sm">{user.email}</p>

    </div>
  </div>
</div>

</div>

{/* end  */}



{/* card 2 start :  */}

<div className=" bg-white relative w-full h-full mr-16 mt-10 ml-2 mb-4 justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-2 lg:p-8 ">



<div className=' w-0 pt-4 pl-8 absolute left-0 top-0' >



</div>
  <h1 className=" pt-4 pl-2 absolute left-6 top-0">{tickets.title}  (#{tickets.id})</h1>


  <h1 className="p-2 mr-4 absolute right-0 top-0 inline-flex items-center">Étape : <p className='cursor-pointer text-cyan-600 ml-2'>{tickets.step}</p> </h1>
  
    {tickets.photo && (

  <div className="p-2 mr-9 absolute right-0 top-12">
  <a href='#' className="block ">{tickets.photo}</a>
    <a href={`${axiosClient.defaults.baseURL}/tickets/${tickets.photo}`} target="_blank">
      <img className='h-12 w-12 block ml-3' src={`${axiosClient.defaults.baseURL}/tickets/${tickets.photo}`} alt="" />
    </a>
</div>
  )}





  <hr className="mt-6 mb-2 border-1 border-slate-300 w-full" />


  <div className="flex items-center mt-4">
  <b className="text-cyan-700	 mr-2 ml-4">Reporté le :</b>
  <p>{new Date(tickets.created_at).toLocaleDateString()}</p>
</div>
  <br />

  <div className="flex items-center">
  <b className="text-cyan-700	 mr-2 ml-4">Titre :</b>
  <p>{tickets.name}</p>
</div>
  <br />  
<div className="flex items-start ">
  <b className="text-cyan-700	 inline-flex ml-4 ">Description  :&nbsp; </b>
  <p> {tickets.description}</p>
</div>


<hr className="h-px m-9 bg-slate-200 border-0 "/>

<div className="flex items-start ml-9">
  <b className="decoration-indigo-50 inline-flex">Historique des messages et communications&nbsp; </b>
  <br />

</div>
<div className="flex items-start ml-9">
  <svg width="24" height="24" className='mt-4' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75"/></svg>
  <p className='font-mono mt-4 ml-4'>{comment.length} commentaire{comment.length > 1 && 's'}</p>
</div>  
<hr className="h-px m-9 bg-slate-200  "/>
    <form >
    {error && <p className='text-red-600'>{error}</p>}

  <div className="flex items-center ml-9">
    <svg className="mr-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
      <path d="M843.282963 870.115556c-8.438519-140.515556-104.296296-257.422222-233.908148-297.14963C687.881481 536.272593 742.4 456.533333 742.4 364.088889c0-127.241481-103.158519-230.4-230.4-230.4S281.6 236.847407 281.6 364.088889c0 92.444444 54.518519 172.183704 133.12 208.877037-129.611852 39.727407-225.46963 156.634074-233.908148 297.14963-0.663704 10.903704 7.964444 20.195556 18.962963 20.195556l0 0c9.955556 0 18.299259-7.774815 18.962963-17.73037C227.745185 718.506667 355.65037 596.385185 512 596.385185s284.254815 122.121481 293.357037 276.195556c0.568889 9.955556 8.912593 17.73037 18.962963 17.73037C835.318519 890.311111 843.946667 881.019259 843.282963 870.115556zM319.525926 364.088889c0-106.287407 86.186667-192.474074 192.474074-192.474074s192.474074 86.186667 192.474074 192.474074c0 106.287407-86.186667 192.474074-192.474074 192.474074S319.525926 470.376296 319.525926 364.088889z" />
    </svg>
    <div className='h-full w-full mt-4'>
    <textarea onChange={(e) => setBody(e.target.value)}  ref={bodyRef} name="reviews" minLength={2} required  placeholder="Envoyer un message..." className="w-full p-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500"></textarea>
    </div>
  </div>

  <div className="flex items-center ml-16 mt-4">
    <button onClick={onSubmit} className="bg-fuchsia-600 hover:bg-black text-white font-bold py-2 px-4 rounded mr-2" type="submit">Envoyer</button>
    <label className="flex items-center">
  
  {/* <input 
          type="file" 
          onChange={(e) => setSelectedFile(e.target.files[0])} 
          className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        /> */}
        <label className="bg-gray-100 hover:bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
    <input accept="image/*"  onChange={(e) => setSelectedFile(e.target.files[0])}  type="file" className="hidden" />
    Ajouter un fichier
</label>


</label>
        
        </div>

        </form>
        <hr className="h-px mt-9 ml-9 mb-4 bg-slate-200 border-0 "/>


<div className="flex items-center ml-9 mt-4 ">
  <div className="flex flex-col">
  {comment && comment.slice().reverse().map(comment => (
  <div key={comment.id}>

  <div className="w-96 justify-center items-center  cursor-pointer relative flex  rounded-xl mb-4 border border-gray-100 p-4 shadow-md sm:p-2 lg:p-8" >
<div className="pt-4 justify-center items-center text-gray-500 ">

    {comment.photo &&
    <div>
    <a href={`${axiosClient.defaults.baseURL}/comments/photos/${comment.photo}`}>
    <img className=' absolute top-2 right-1 rounded-sm h-12 w-12 block ml-3' src={`${axiosClient.defaults.baseURL}/comments/photos/${comment.photo}`} alt="" />
    </a>
    </div>
  }
      <h1 className='font-bold text-yellow-700'>{comment.user.name}</h1>
      <small className='text-gray-700 mb-3'>Publié le: {new Date(comment.created_at).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</small>
      <div className="max-w-md break-all">
      {/* <hr className="h-px mt-9 ml-9 mb-4  bg-slate-500 "/> */}

        <p className='mt-4'>{comment.body}</p>
</div>
</div>
</div>

{/* <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8" href="#">
<div className="pt-4 text-gray-500">
   
</div>
</a> */}

  </div>
))}

  </div>
</div>


      

    {/* <form onSubmit={onSubmit}> */}
</div>  
  

{/* card 2  end  */}


</div>





</div>




</div>
      )}
    </div>
  );
}

