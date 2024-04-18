import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './searchBar.css';

function SearchBarComponent({books, setBooks, booksNotFiltered}) {
    const [searchBar, setSearchBar] = useState('');

    const handleOnChange = (e) => {
        if (e.target.value === '') {
          setBooks(booksNotFiltered);
        }else {
            setSearchBar(e.target.value);
        }
    }

    const handleOnClick = () => {
        const filteredBooks = books.filter((book) => {
            return book.title.toLowerCase().includes(searchBar.toLowerCase());
          });
          setBooks(filteredBooks);
          console.log(filteredBooks);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div className='d-flex justify-content-center align-items-center py-5 gap-3'>
                        <input onChange={handleOnChange} type="text" className='w-100 p-1 rounded'/>
                        <button onClick={handleOnClick} className='btn btn btn-outline-danger '>Search</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBarComponent