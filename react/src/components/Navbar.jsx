import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider'
import { useEffect } from "react";
import { Link } from 'react-router-dom';
// import { Navigate } from 'react-router-dom'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { user, setUser } = useStateContext();
  const { token, setToken } = useStateContext();

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
      .then(({ data }) => {
        setUser(data)
      })
  }, [])
  return (


    <div>
      <Disclosure as="nav" className="bg-white ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://tac-tic.net/img/logo.png"
                alt="Tac-tic"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              {/* Insert your menu items here */}
            </div>
            <div className="flex items-center">
              <div className="relative">
                <Menu>
                  <Menu.Button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 ">
                    <span className="sr-only">Open user menu</span>

                    {user.role && (

                      <svg width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
                        <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                        <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M4035.3,4974.3c-309.8-78.4-592.1-243.1-811.7-474.5c-341.2-358.8-498-766.6-472.5-1231.3c13.7-249,49-384.3,158.8-617.6c345.1-727.4,1182.3-1123.5,1931.3-911.7c601.9,170.6,1064.7,662.7,1209.8,1284.3c45.1,194.1,29.4,594.1-31.4,784.3c-174.5,549-596.1,970.5-1147,1147C4672.6,5019.4,4247.1,5029.2,4035.3,4974.3z M4772.6,4660.6c598-152.9,992.1-670.6,992.1-1303.9c0-394.1-121.6-700-382.3-962.7c-278.4-280.4-643.1-417.6-1049-394.1c-766.6,43.1-1309.8,656.8-1268.6,1435.2c29.4,592.1,441.2,1098,1003.9,1233.3C4247.1,4711.5,4590.2,4707.6,4772.6,4660.6z" /><path d="M2407.9,1298c-351-96.1-607.8-249-858.8-511.7C1319.8,545.1,1159,272.5,1053.1-54.9C943.3-396.1,941.3-415.7,941.3-2003.8v-1466.6l45.1-41.2l45.1-43.1h1511.7c1409.7,0,1513.7,2,1552.9,33.3c66.7,56.9,72.6,145.1,15.7,213.7l-49,56.9l-786.2,5.9l-786.2,5.9v1150.9c0,1241.1,0,1225.4-105.9,1274.5c-62.7,31.4-156.9,3.9-188.2-56.9c-11.8-21.6-19.6-492.1-19.6-1201.9v-1168.6h-460.8h-460.8v1354.8c0,1286.2,2,1364.6,39.2,1550.9c135.3,664.7,537.2,1135.2,1121.5,1313.7l143.1,43.1l1764.6,7.8c1880.3,7.8,1935.2,3.9,2192.1-88.2c354.9-127.4,651-403.9,845.1-784.3c54.9-109.8,96.1-143.1,178.4-143.1c68.6,0,147.1,82.3,147.1,152.9c0,60.8-145.1,315.7-276.5,488.2c-225.5,292.1-588.2,531.3-968.6,637.2l-156.8,45.1l-1852.9,2l-1852.9,3.9L2407.9,1298z" /><path d="M6249-192.1c-21.6-13.8-78.4-139.2-131.4-278.4c-74.5-203.9-100-251-129.4-249c-21.6,2-149,49-286.3,105.9c-176.5,74.5-260.8,100-296.1,90.2c-60.8-13.7-674.5-686.2-694.1-756.8c-9.8-37.3,21.6-115.7,139.2-339.2c84.3-160.8,149-294.1,145.1-298c-3.9-2-137.3-80.4-300-174.5c-186.3-107.8-301.9-186.3-319.6-217.6c-21.6-43.1-13.7-109.8,54.9-501.9c43.1-249,88.2-468.6,98-490.2c31.4-56.9,72.5-70.6,384.3-125.5c160.8-29.4,296.1-54.9,300-58.8c3.9-3.9-11.8-139.2-35.3-298c-47.1-323.5-51-403.9-21.6-456.8c27.5-49,827.4-470.6,896-470.6c43.1,0,109.8,49,298,219.6l241.2,217.6l249-258.8c217.6-227.4,254.9-256.8,309.8-256.8c37.2,0,239.2,78.4,488.2,190.2c321.6,143.1,429.4,200,445.1,235.3c13.7,33.3,13.7,135.3,0,354.9c-13.7,188.2-15.7,311.8-3.9,319.6c9.8,5.9,164.7,25.5,341.2,43.1c178.4,17.7,339.2,41.2,358.8,51c21.6,11.7,47.1,45.1,58.8,74.5c39.2,94.1,219.6,845.1,219.6,905.8c0,68.6-60.8,123.5-352.9,315.7c-102,68.6-190.2,125.5-194.1,129.4c-3.9,3.9,33.3,74.5,82.4,154.9c51,80.4,133.3,213.7,184.3,294.1c56.8,94.1,90.2,168.6,88.2,205.9c0,43.1-66.7,141.2-256.9,386.3c-313.7,402-347,437.2-413.7,437.2c-27.5,0-168.6-39.2-313.7-88.2c-145.1-49-276.4-86.3-292.1-84.3c-15.7,3.9-76.5,141.2-141.2,319.6c-70.6,196.1-129.4,327.4-156.9,349c-37.3,29.4-94.1,33.3-525.5,33.3C6384.2-164.7,6276.4-170.6,6249-192.1z M7196-764.7c54.9-160.8,113.7-309.8,129.4-335.3c15.7-23.5,66.7-62.8,113.7-86.3l84.3-39.2l303.9,96.1l305.9,98l188.2-241.2c103.9-131.3,188.2-251,188.2-264.7c0-11.8-68.6-133.3-154.9-270.6c-84.3-135.3-162.7-264.7-174.5-288.2c-21.6-43.1-11.8-168.6,17.6-225.5c9.8-17.6,131.4-109.8,272.5-202c139.2-92.1,254.9-172.5,254.9-178.4c0-29.4-145.1-590.2-154.9-601.9c-5.9-7.8-166.7-29.4-354.9-51l-341.2-37.3l-66.7-76.4L7743-3545l11.8-215.7c5.9-117.7,15.7-264.7,21.6-323.5l11.8-107.8l-290.2-131.4l-292.2-129.4l-247.1,252.9l-247,252.9h-109.8h-109.8l-231.4-205.9c-125.5-113.7-239.2-205.9-249-203.9c-51,2-551,290.2-547,313.7c2,15.7,23.5,170.6,47,345.1l43.2,317.6l-52.9,80.4c-29.4,43.1-72.5,88.2-96.1,96.1c-23.5,9.8-162.7,37.2-307.8,60.8c-145.1,25.5-274.5,54.9-286.3,66.7c-19.6,17.6-109.8,484.3-113.7,586.2c-2,23.5,84.3,84.3,292.1,205.9c288.2,168.6,294.1,172.5,329.4,268.6l37.3,98l-151,290.2l-149,292.2l133.3,149c72.5,80.4,168.6,188.2,213.7,237.2l78.4,86.3l296.1-119.6c303.9-123.5,364.7-139.2,419.6-96.1c43.1,33.3,60.8,70.6,145.1,307.8c41.2,113.7,80.4,225.5,90.2,251c15.7,43.1,23.5,43.1,337.2,43.1h321.6L7196-764.7z" /><path d="M6566.6-1398c-237.3-37.3-451-156.9-639.2-358.8c-139.2-151-229.4-321.6-270.6-513.7c-35.3-170.6-35.3-239.2,0-407.8c39.2-190.2,135.3-368.6,276.5-519.6c219.6-237.2,478.4-354.9,784.3-356.9c305.9,0,537.2,98,762.7,323.5c433.3,433.3,435.3,1078.4,2,1509.7C7225.4-1466.6,6890.1-1349,6566.6-1398z M6990.1-1745c302-105.9,474.5-341.2,496.1-674.5c7.8-137.2,2-196.1-31.4-303.9c-74.5-237.2-258.8-423.5-490.2-490.2c-162.7-47.1-431.4-31.4-576.5,35.3c-382.3,176.5-545.1,635.3-368.6,1045c52.9,123.5,211.7,286.3,341.2,349C6545-1694.1,6798-1678.4,6990.1-1745z" /></g></g>
                      </svg>
                    )}

                    {!user.role && (

                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
                        alt=""
                      />
                    )}


                    {user.role && (

                      <b className='ml-2'>Support</b>

                    )}
                    <span className="ml-3 capitalize text-emerald-900">{user.name} </span>
                    <svg className="h-4 w-4 ml-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">

                      {user.role && (
                        <div className="py-1">
                          <Link to="/my">
                            <a href="#" className="text-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                              Tableau de bord
                            </a>
                          </Link>
                        </div>
                      )}

                      <div className="py-1">
                        <a onClick={onLogout} href="#" className="text-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                          Se déconnecter
                        </a>
                      </div>

                    </Menu.Items>


                  </Transition>
                </Menu>
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              {/* Insert your mobile menu button here */}
            </div>
          </div>
        </div>
      </Disclosure>
    </div>


  )


}






