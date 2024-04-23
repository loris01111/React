import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { ClipLoader } from 'react-spinners';
import './commentList.css';

function CommentList({ asin, renderState, toggleRender }) {
    const URLFetch = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`;
    const URLFetchPutAndDelete = 'https://striveschool-api.herokuapp.com/api/comments/';

    const [bookComments, setBookComments] = useState([]);
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
            });
            const data = await response.json();
            setIsLoading(false);
            setBookComments(data);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    const updateComment = async (commentId, newText) => {
        try {
            setIsLoading(true);
            const response = await fetch(`${URLFetchPutAndDelete}${commentId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA1ZWI4M2I2YjZiMjAwMTk3ODdjZTQiLCJpYXQiOjE3MTM3NDAzMjYsImV4cCI6MTcxNDk0OTkyNn0.gIBN4LIt1xgC5MMdpsuC4-dHnRNKRiHcaHJFDNGUZPg"
                },
                body: JSON.stringify({ comment: newText })
            });
            const updatedComment = await response.json();
            setIsLoading(false);
            // Aggiorno lo stato locale dei commenti con il commento aggiornato
            const updatedComments = bookComments.map(comment => {
                if (comment._id === commentId) {
                    return updatedComment;
                }
                return comment;
            });
            setBookComments(updatedComments);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const deleteComment = async (commentId) => {
        try {
            setIsLoading(true);
            const response = await fetch(`${URLFetchPutAndDelete}${commentId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA1ZWI4M2I2YjZiMjAwMTk3ODdjZTQiLCJpYXQiOjE3MTM3NDAzMjYsImV4cCI6MTcxNDk0OTkyNn0.gIBN4LIt1xgC5MMdpsuC4-dHnRNKRiHcaHJFDNGUZPg"
                },
            });
            const updatedComment = await response.json();
            setIsLoading(false);
            // Aggiorno lo stato locale dei commenti con il commento aggiornato
            const updatedComments = bookComments.map(comment => {
                if (comment._id === commentId) {
                    return updatedComment;
                }
                if (response.ok) {
                    toggleRender();
                }
                return comment;
            });
            setBookComments(updatedComments);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getBookComments();
    }, [renderState])

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
                {bookComments.map((bookComment, index) => (
                    <ListGroup.Item key={`bookComments-${index}`} className="comment-item">
                        <div className="comment-text">{bookComment.comment}</div>
                        <div className="buttons-container">
                            <button className="update-button" onClick={() => updateComment(bookComment._id, "Nuovo testo del commento")}>Update</button>
                            <button className="delete-button delete-button-color" onClick={() => deleteComment(bookComment._id)}>Delete</button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        )}
        {error &&
            <div>{error}</div>
        }
    </>
    )
}

export default CommentList;
