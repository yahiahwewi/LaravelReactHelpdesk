import React, { createRef, useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider'
import axiosClient from '../../axios-client'

export default function SupportLogin() {

  const emailRef = createRef()
  const passwordRef = createRef()
  const { setUser, setToken } = useStateContext()


  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    axiosClient.post('/AdminLogin', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token2);


      })
      .catch((err) => {
        const response = err.response;

        if (response && response.status === 422) {
          toast.error("Veuillez vérifier vos informations et réessayer", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });


          return;     
        
        }
      



      })
  }





  return (
    <div className="flex items-center justify-center  h-screen bg-gray-200">
      <div className="bg-white p-12 rounded-lg shadow-md ">
        <h2 className="text-center text-3xl font-medium mb-6 items-center bg-center ">Support</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="email">Email</label>
            <input
              className="border border-gray-300 p-2 rounded-lg w-96"
              type="email"
              id="email"
              required
              ref={emailRef}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="password">Mot de passe</label>
            <input
              className="border border-gray-300 p-2 rounded-lg w-96"
              type="password"
              id="password"
              required
              ref={passwordRef}
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Se connecter</button>
          {/* <p className='mt-4 text-center'>  créer un compte</p> */}
        </form>
      </div>
    </div>
  )
}
