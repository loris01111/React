import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import CommentList from '../commentsSection/CommentList';
import AddComment from '../commentsSection/AddComment';

function CommentArea({ asin, selectedBookAsin, handleCommentAreaClose, category}) {
    const [show, setShow] = useState(true);
    const [render, setRender] = useState(false);

    const toggleRender = () => setRender(!render);

    const handleClose = (category) => {
        console.log("Closing Comment Area");
        setShow(false);
        handleCommentAreaClose(category); // Passa la categoria come argomento
    };
    

    return (
        <>
            <Alert show={show} variant="warning">
                <Alert.Heading>Review</Alert.Heading>
                <div>
                    <CommentList
                        asin={asin}
                        renderState={render}
                        toggleRender={toggleRender}
                        selectedBookAsin={selectedBookAsin}
                    />
                </div>
                <hr />
                <div>
                    <AddComment
                        asin={asin}
                        renderState={render}
                        toggleRender={toggleRender}
                    />
                </div>
                <div className="d-flex justify-content-end">
                    <Button onClick={() => handleClose(category)} variant="outline-success">
                        Close me
                    </Button>
                </div>
            </Alert>
        </>
    );
}

export default CommentArea;
