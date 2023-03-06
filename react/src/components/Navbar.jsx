import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider'
import {useEffect} from "react";
// import { Navigate } from 'react-router-dom'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const {user, setUser} = useStateContext();
    const { token ,setToken } = useStateContext();

//     if (!token){

// return <Navigate to ='/login'/>

//     }


    const onLogout = (ev) => {
        ev.preventDefault()
    
        axiosClient.post('/logout')
          .then(() => {
            setUser({})
            setToken(null)
          })
      
      }


    useEffect(() => {
        axiosClient.get('/user')
          .then(({data}) => {
             setUser(data)
          })
      }, [])
  return (


<div>


<Disclosure as="nav" className="bg-white  ">
        
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
         
                <img
                  className="hidden h-10  lg:block"
                  src="https://tac-tic.net/img/logo.png"
                  alt="Tac-tic"
                />
              </div>

              <div className="hidden sm:ml-6 sm:block">
              </div>
            </div>
            

        

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
           
              <Menu as="div" className="relative ">
                <div>
                  <Menu.Button className="flex rounded-full  text-sm focus:outline-none   ">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
                      alt=""
                    />
                    
 <p className="mt-2 ml-3 capitalize text-emerald-900	">{user.name}</p>
  <svg className="h-4 w-4 ml-1 mt-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
    <path d="M7 10l5 5 5-5z" />
  </svg>                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-30"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-20    "
                >
                  <Menu.Items className=" absolute right-0 z-10 mt-4 w-48 origin-top rounded-md bg-white p-4 shadow ring-1   ">
              
                  <a onClick={onLogout} className="btn-logout flex items-center" href="#">
  <svg className="h-4 w-4 mr-6" viewBox="0 0 384.971 384.971" fill="currentColor">
    <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03C192.485,366.299,187.095,360.91,180.455,360.91z"/>
    <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"/>
  </svg>
  Se déconnecter
</a>


                  </Menu.Items>
                </Transition>
              </Menu>
              {/* <a  onClick={onLogout} className="btn-logout " href="#">Logout</a> */}

            </div>
          </div>








          
        </div>

        {/* <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3"> */}
            {/* {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))} */}
          {/* </div>
        </Disclosure.Panel> */}
      

      
    
  </Disclosure>

 


</div>

    
  )

 
}






