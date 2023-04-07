import React, { useState } from 'react';
import axios from 'axios';
import { useStateContext } from '../../contexts/ContextProvider';

import axiosClient from '../../axios-client';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [message, setMessage] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const handleImageSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);

        axiosClient.post('/upload', formData)
            .then(response => {
              setImageUrl(`/images/${response.data.filename}`);
              setMessage(response.data.success);

                setMessage(response.data.success);
                console.log("aaaa ");
                

            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={handleImageSubmit}>
            <div className="space-y-1 ">
            <input type="file" onChange={handleImageChange} />
      </div>
                <button type="submit">Upload</button>

            </form>
            {message && <p>{message}</p>}
            {imageUrl && <img src={imageUrl} alt="uploaded image" />}

        </div>
    );
}

export default ImageUpload;
