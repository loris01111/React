import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleCard from '../singleCard/SingleCard';
import CommentArea from '../commentArea/CommentArea';

function TwoColumnLayout({ books, handleReviewClick, selectedCardIndex, showCommentArea }) {
    const [showCommentAreas, setShowCommentAreas] = useState({});
    const [selectedBookAsin, setSelectedBookAsin] = useState(null);

    const booksByCategory = books.reduce((acc, book) => {
        acc[book.category] = acc[book.category] || [];
        acc[book.category].push(book);
        return acc;
    }, {});
    useEffect(() => {
        // Inizializza lo stato di showCommentAreas per tutte le categorie quando il componente viene montato
        const initialShowCommentAreas = books.reduce((acc, book) => {
            acc[book.category] = false;
            return acc;
        }, {});
        setShowCommentAreas(initialShowCommentAreas);
    }, [books]);



    const handleReviewClickInternal = (index, category, asin) => {
        setShowCommentAreas(prevState => ({
            ...prevState,
            [category]: true
        }));
        handleReviewClick(index);
    };

    const handleCommentAreaClose = (category) => {
        setShowCommentAreas(prevState => ({
            ...prevState,
            [category]: false
        }));
    };

    return (
        <Container>
            {Object.entries(booksByCategory).map(([category, categoryBooks]) => (
                <div key={category}>
                    <h2 className='titleCategory ps-3 pb-3'>{category}</h2>
                    <Row>
                        <Col>
                            <Row>
                                {categoryBooks.slice(0, 12).map((book, index) => (
                                    <Col key={`singleCard-${index}`} className="mb-4">
                                        <SingleCard
                                            title={book.title}
                                            img={book.img}
                                            asin={book.asin}
                                            handleReviewClick={() => handleReviewClickInternal(index, category, book.asin)}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                         {/* Console log per controllare il valore di showCommentAreas[category] */}
                    {console.log("Valore di showCommentAreas[category]:", showCommentAreas[category])}
                    {/* Colonna di destra solo se showCommentArea è true */}
                        {showCommentAreas[category] && (
                            <Col md={3}>
                                <div>
                                    {categoryBooks[selectedCardIndex] && (
                                        <CommentArea
                                            asin={categoryBooks[selectedCardIndex].asin}
                                            selectedBookAsin={selectedBookAsin}
                                            handleCommentAreaClose={() => handleCommentAreaClose(category)}
                                            category={category}
                                        />
                                    )}
                                </div>
                            </Col>
                        )}
                    </Row>
                    {categoryBooks.length > 12 && (
                        <Row className="mt-3">
                            <Col className='d-flex justify-content-center'>
                                <button className="btn btn-warning">Show all</button>
                            </Col>
                        </Row>
                    )}
                </div>
            ))}
        </Container>
    );
}

export default TwoColumnLayout;
