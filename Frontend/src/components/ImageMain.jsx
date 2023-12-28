import React, { useState } from 'react';
import axios from 'axios';
import Loading from './Loading';

function ImageMain() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    }

    const handleSubmit = async (event) => 
    {

        event.preventDefault();
        setLoading(true);

    
        try {
            const formData = new FormData();
            formData.append('image', selectedImage);
            formData.append('question', question);
    
            const response = await axios.post('http://localhost:3000/upload', formData, 
            {
                headers: 
                {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            // Handle the response as needed
            if (response.status === 200) 
            {
                console.log('Image uploaded successfully');
                console.log('Generated Text:', response.data);
                setAnswer(response.data);
            } 
            else 
            {
                console.error('Image upload failed');
            }
        } 
        catch (error) 
        {
            console.error('Error:', error);
        }
        finally
        {
            setLoading(false);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
                <input type="text" name="question" value={question} onChange={(event) => setQuestion(event.target.value)} />
                <button type="submit">Upload</button>
            </form>
            {loading && <Loading/>}
            <div>
                <p>{answer}</p>
            </div>
        </>
    );
}

export default ImageMain;
