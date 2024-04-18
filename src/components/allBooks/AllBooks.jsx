import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleCard from '../singleCard/SingleCard';
import './allBooks.css';

function AllBooks({ books}) {

  const booksByCategory = books.reduce((acc, book) => {
    // console.log(acc);
    acc[book.category] = acc[book.category] || [];
    acc[book.category].push(book);
    return acc;
  }, {}); // Aggiungi una parentesi di chiusura per la funzione reduce qui

  return (
    <Container>
    {Object.entries(booksByCategory).map(([category, categoryBooks]) => (
        // Renderizza ogni categoria su una riga separata
        <React.Fragment key={category}>
            <h2 className='titleCategory'>{category}</h2>
            <Row>
                {categoryBooks.slice(0, 4).map((book, index) => (
                    // Renderizza solo le prime 4 card di ogni categoria
                    <Col className='d-flex justify-content-center' key={`singleCard-${index}`} sm={12} md={6} lg={3}>
                        <SingleCard 
                            title={book.title}
                            img={book.img}
                        />
                    </Col>
                ))}
            </Row>
            {/* Aggiungi un pulsante per visualizzare più libri della categoria */}
            {categoryBooks.length > 4 && (
                <Row className="mt-3">
                    <Col className='d-flex justify-content-center'>
                        <button className="btn btn-primary">Mostra tutti</button>
                    </Col>
                </Row>
            )}
        </React.Fragment>
    ))}
</Container>
  );
}

export default AllBooks;
