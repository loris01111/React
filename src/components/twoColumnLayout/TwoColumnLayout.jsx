import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleCard from '../singleCard/SingleCard';
import CommentArea from '../commentArea/CommentArea';

function TwoColumnLayout({ books, handleReviewClick, selectedCardIndex, showCommentArea }) {

    const [showCommentAreas, setShowCommentAreas] = useState({});

    const booksByCategory = books.reduce((acc, book) => {
        acc[book.category] = acc[book.category] || [];
        acc[book.category].push(book);
        return acc;
    }, {});

    const leftColSize = showCommentArea ? { md: 9 } : { md: 12 };

    const handleReviewClickInternal = (index, category) => {
        setShowCommentAreas(prevState => ({
            ...prevState,
            [category]: true
        }));
        handleReviewClick(index);
    };


    return (
        <Container>
            {Object.entries(booksByCategory).map(([category, categoryBooks]) => (
                <div key={category}>
                    <h2 className='titleCategory ps-3 pb-3'>{category}</h2>
                    <Row>
                        {/* Colonna di sinistra */}
                        <Col {...leftColSize}>
                            <Row>
                                {categoryBooks.slice(0, 12).map((book, index) => (
                                    <Col key={`singleCard-${index}`} className="mb-4">
                                        <SingleCard
                                            title={book.title}
                                            img={book.img}
                                            asin={book.asin}
                                            handleReviewClick={() => handleReviewClickInternal(index, category)}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        {/* Colonna di destra solo se showCommentArea è true */}
                        {showCommentAreas[category] && (
                            <Col md={3}>
                                <div>
                                    {categoryBooks[selectedCardIndex] && (
                                        <CommentArea
                                        asin={categoryBooks[selectedCardIndex].asin}
                                        />
                                    )}
                                </div>
                            </Col>
                        )}

                    </Row>
                    {/* Bottone "Show all" */}
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
