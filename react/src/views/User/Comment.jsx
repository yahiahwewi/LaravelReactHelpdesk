import React, { Component, useRef, useState } from 'react';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider';

export default function Comment() {


  const [ticket , setTicket] = useState([]);

  const bodyRef = useRef();

  const onSubmit = (ev) => {
    ev.preventDefault()
    const payload={
      body: bodyRef.current.value,
      "user_id":53

    }
    axiosClient.post(`/tickets/43/comments`,payload) 
      .then(({data})=>{
        setTicket(data.ticket);

        if (response.status === 200) {
          setTimeout(() => {
            setnoErrors(true);
          }, 2000);
      



        }})}

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     content: ''
  //   };
  // }

  // handleInputChange = (event) => {
  //   this.setState({
  //     content: event.target.value
  //   });
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   axiosClient.post(`/tickets/43/comments`, {
  //     body: this.state.content,
      
  //   }).then(response => {
  //     console.log(response);
  //     // do something with the response
  //   }).catch(error => {
  //     console.log(error);
  //     // handle the error
  //   });
  // }

 
    return (
      <form onSubmit={onSubmit}>
        <textarea
          placeholder="Envoyer un message..."
          className="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          // onChange={this.handleInputChange}
          ref={bodyRef}
        />
        <button type="submit">Envoyer</button>
      </form>
    );
  }


