import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { ClipLoader } from 'react-spinners';

function CommentList({ asin }) {

    const URLFetch = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`

    const [bookComments, setBookCooments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    console.log(bookComments);
    console.log(isLoading);


    const getBookComments = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(URLFetch, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA1ZWI4M2I2YjZiMjAwMTk3ODdjZTQiLCJpYXQiOjE3MTM3NDAzMjYsImV4cCI6MTcxNDk0OTkyNn0.gIBN4LIt1xgC5MMdpsuC4-dHnRNKRiHcaHJFDNGUZPg"
                }
            })
            const data = await response.json();
            setIsLoading(false);
            setBookCooments(data);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getBookComments();
    }, [])

    if (!isLoading && bookComments && bookComments.length === 0) {
        return (
            <div> <h3>Is empty</h3></div>
        )
    }

    return (
        <>
            {isLoading && !error && (
                <ClipLoader color="#36d7b7" />
            )}
            {!isLoading && !error && bookComments && (
                <ListGroup>
                    {bookComments.map((bookComments, index) => (
                        <ListGroup.Item key={`bookComments-${index}`}>{bookComments.comment}</ListGroup.Item>
                    ))}
                </ListGroup>
            )}
            {error &&
                <div>{error}</div>
            }
        </>

    )
}

export default CommentList