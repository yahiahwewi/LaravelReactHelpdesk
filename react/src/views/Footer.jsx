import React from 'react'

export default function Footer() {
  return (
    <div>
      
      <footer className="p-2 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="pl-10 text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://tac-tic.net/" className="hover:underline">TAC-TIC</a>. All Rights Reserved.
    </span>
    <ul className="pr-10 flex  items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://tac-tic.net/" className="ml-6 hover:underline md:mr-6 ">About</a>
        </li>
        
        </ul>
        </footer>

      
      </div>
      
      )
}
