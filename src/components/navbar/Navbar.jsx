import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import style from  './navBar.module.css';

function OffcanvasExample({ onSearch }) {
  const expand = 'lg'; // scegli la dimensione dello schermo che desideri
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleClearSearch = () => {
    setSearchTerm(''); // Svuota l'input di ricerca
    onSearch(''); // Passa una stringa vuota per visualizzare tutti i libri non filtrati
  };

  return (
    <Navbar expand={expand} className={` p-3  mb-3 ${style.navbar}`}>
      <Container fluid>
        <Navbar.Brand className={style.titleNavbar} href="#">BookLand</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className={style.textNavbarColor} href="#">Home</Nav.Link>
              <Nav.Link className={style.textNavbarColor} href="#">Link</Nav.Link>
              <Nav.Link className={style.textNavbarColor} href="#">Browse</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={handleInputChange} // Aggiungiamo l'evento onChange per gestire l'input
              />
              <Button className={style.buttonNavbarColor} onClick={handleSearch}>Search</Button>
              <Button className={style.buttonNavbarColor} onClick={handleClearSearch}>Clear</Button> {/* Aggiungiamo il pulsante per cancellare la ricerca */}
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
