import React, { useRef, useState } from 'react'
import axiosClient from '../../axios-client';
import { ToastContainer, toast } from 'react-toastify';
import TeamList from './TeamList';

export default function Teams() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [desciption, setDescription] = useState('');
  
  const emailRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  

  const onSubmit = ev => {
    ev.preventDefault();
    const payload = {
      email: emailRef.current.value,
      title: titleRef.current.value,
      descriptions: descriptionRef.current.value,
    };
    axiosClient.post('/addteam', payload)
      .then(({data}) => {
        toast.success('Département ajoutée avec succés', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // Update the list of teams by fetching them again from the server
        axiosClient.get('/allteams')
          .then(({data}) => {
            setTeams(data);
            window.location.reload();

          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };
    


  return (

<div>


<div className=" h- w-full">

    <ToastContainer/>
<div className="container mx-auto flex  py-8">



    <div className=' bg-[#fefefe] rounded-xl mt-8  h-96 w-4/5 mx-auto '>
{/* <h1 className='text-center text-2xl mt-4 p-4 font-medium'>Ajouter une équipe</h1> */}

<div className=' m-4'>
<label className='block' htmlFor="title">Nom du département</label>
<input required  ref={titleRef} onChange={(e) => setName(e.target.value)} name="name" className=' w-full border mt-2 p-1 px-2 border-black' type="text"  />
</div>

<div className=' m-4'>
<label className='block' htmlFor="email" type="email">Email</label>
<input required ref={emailRef} onChange={(e) => setEmail(e.target.value)}  name="email" type="email" className=' w-full border mt-2 p-1 px-2 border-black'   />
</div>
<div className=' m-4'>
<label className='block'  htmlFor="title">Description</label>
<textarea required ref={descriptionRef} onChange={(e) => setDescription(e.target.value)} name="text" className='px-2 py-2 w-full border mt-2 border-black' type="text"  />

</div>
  <button onClick={onSubmit}
          type="submit" 
          className="bg-[#017e84] hover:bg-[#335455] text-white px-4 py-2 mb-4 mt-6"        >
          Ajouter
        </button>
        
    </div>

   
    </div>

    </div>
          
    </div>
  )
}
