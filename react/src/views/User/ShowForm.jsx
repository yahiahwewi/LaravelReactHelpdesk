import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStateContext } from '../../contexts/ContextProvider';

import axiosClient from '../../axios-client';

function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axiosClient.get('/tickets')
      .then(response => {
        setTickets(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {tickets.map(ticket => (
        <div key={ticket.id}>
          <h2>{ticket.title}</h2>
          <p>{ticket.name}</p>
          <p>{ticket.description}</p>
          <p>{ticket.user_id}</p>
          <img src={ticket.photo} alt={ticket.title} />
        </div>
      ))}
    </div>
  );
}

export default TicketList;
