import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function AddComment({ asin, toggleRender }) {

    const URLPost = 'https://striveschool-api.herokuapp.com/api/comments';

    const [formData, setFormData] = useState({});

    console.log(formData);

    const handleFormData = (e) => {
        const { name, value } = e.target;
        const parsedValue = name === 'rate' ? Number(value) : value;
        setFormData({
            ...formData,
            elementId: asin,
            [name]: parsedValue
        });
    }

const addComment = async (e) => {
    e.preventDefault();
   try {
    const response = await fetch(URLPost, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA1ZWI4M2I2YjZiMjAwMTk3ODdjZTQiLCJpYXQiOjE3MTM3NDAzMjYsImV4cCI6MTcxNDk0OTkyNn0.gIBN4LIt1xgC5MMdpsuC4-dHnRNKRiHcaHJFDNGUZPg"
        },
        body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
        toggleRender();
    }
    return data;
   } catch (error) {
    console.log(error);
   }
}


    return (
        <Form className='pt-5' onSubmit={addComment}>
            <Form.Select name='rate' aria-label='Ratings selection' onChange={handleFormData}>
                <option>Insert Ratings</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
            <Form.Group className='mb-3 pt-3 ' placeholder='Insert your comment'>
                <Form.Label>
                    Example Text Area
                </Form.Label>
                <Form.Control name='comment' as='textarea' rows={3} onChange={handleFormData} />
            </Form.Group>
            <Button type='submit' variant='danger'>Add your Comment</Button>
        </Form>
    )
}

export default AddComment