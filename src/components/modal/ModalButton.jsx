import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modalButton.css';
import CommentList from '../commentsSection/CommentList';
import AddComment from '../commentsSection/AddComment';

function ModalButton({ asin }) {
    const [show, setShow] = useState(false);
    const [render, setRender] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toggleRender = () => setRender(!render);

    return (
        <>
            <Button variant="warning" className='w-100' onClick={handleShow}>
                Review this book
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CommentList
                        asin={asin}
                        renderState={render}
                        toggleRender={toggleRender}
                    />
                    <AddComment
                        asin={asin}
                        renderState={render}
                        toggleRender={toggleRender}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
