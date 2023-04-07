import { createContext, useState, useContext, useEffect } from "react";
import React from 'react';

const StateContext = createContext({
    currentUser: null,
    token: null,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {},
    role:null
  })


export const ContextProvider = ({children})=>{
    const [user , setUser]=useState({});
    const[token, _setToken]=useState(localStorage.getItem('ACCESS_TOKEN'));
    const [notification, _setNotification] = useState('');

    // const[token, _setToken]=useState(0);

    const setToken=(token)=>{
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN', token);
        }
        else{
            localStorage.removeItem('ACCESS_TOKEN');
        }

    }

    

    const setNotification = message => {
        _setNotification(message);
    
        setTimeout(() => {
          _setNotification('')
        }, 5000)
      }

    return(
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            notification,
            setNotification
            
            
        }}>
            {children}

        </StateContext.Provider>
    )
}


export const useStateContext =() =>useContext(StateContext);
