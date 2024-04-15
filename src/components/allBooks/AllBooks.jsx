import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fantasyBooks from '../../dataBooks/fantasy.json';
import SingleCard from '../singleCard/SingleCard';

function AllBooks() {
  return (
    <Container>
      <Row>
        {fantasyBooks.map((book, index) => (
          <Col className='d-flex justify-content-center' key={`singleCard-${index}`} sm={12} md={6} lg={4}>
            <SingleCard 
              title={book.title}
              img={book.img}
              price={`${book.price}$`}
              category={book.category}
              asin={book.asin}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllBooks;
