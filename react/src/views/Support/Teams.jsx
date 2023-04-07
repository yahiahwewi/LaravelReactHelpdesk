import React from 'react'

export default function Teams() {
  return (
<div className="bg-[#f6f7fb] h-screen w-full">
    
<div className="container mx-auto  py-8">

    <div className=' bg-[#fefefe] rounded-xl mt-8 shadow-xl h-96 w-96 mx-auto '>
<h1 className='text-center text-2xl mt-4 p-4 font-medium'>Ajouter une équipe</h1>

<div className=' m-4'>
<label className='block' htmlFor="title">Nom de l'équipe</label>
<input className=' w-full border mt-2 p-1 px-2 border-black' type="text"  />
</div>
<div className=' m-4'>
<label className='block' htmlFor="title">Description</label>
<textarea className='px-2 py-2 w-full border mt-2 border-black' type="text"  />

</div>
  <button 
          type="submit" 
          className="bg-fuchsia-600 w-auto ml-4 mr-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Ajouter
        </button>
    </div>
    </div>

    </div>
  )
}
