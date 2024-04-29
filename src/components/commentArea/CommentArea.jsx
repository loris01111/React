import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import CommentList from '../commentsSection/CommentList';
import AddComment from '../commentsSection/AddComment';

function CommentArea({asin}) {
    const [show, setShow] = useState(true);
    const [render, setRender] = useState(false);

    const toggleRender = () => setRender(!render);

    return (
        <>
            <Alert show={show} variant="warning">
                <Alert.Heading>Review</Alert.Heading>
                <div>
                    <CommentList
                        asin={asin}
                        renderState={render}
                        toggleRender={toggleRender}
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
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close me
                    </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    );
}

export default CommentArea;