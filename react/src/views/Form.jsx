import React, { useState, useRef } from 'react'
import axiosClient from '../axios-client';

export default function Form() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const nameRef = useRef();
  const titleRef= useRef();
  const descriptionRef= useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name:nameRef.current.value,
      title:titleRef.current.value,
      description:descriptionRef.current.value
    };

    try {
      const response = axiosClient.post('/tickets', payload);
      console.log(response.data);
      // Do something with the response
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input ref={nameRef} 
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="title">Title:</label>
      <input ref={titleRef} 
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="description">Description:</label>
      <input
        id="description"
        name="description"
        ref={descriptionRef}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}
