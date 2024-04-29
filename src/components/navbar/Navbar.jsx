import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import style from './navBar.module.css';
import { ThemeContext } from '../../contexts/ThemContext';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function OffcanvasExample({ onSearch }) {
  const expand = 'lg'; // scelgo la dimensione dello schermo che desidero
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };
  
  const {isDarkMode, toggleDarkMode} = useContext(ThemeContext);


  return (
    <Navbar expand={expand} className={`p-3 mb-3 ${isDarkMode ? 'bg-black' : style.navbar}`}>
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
                onChange={handleInputChange} // Aggiungo l'evento onChange per gestire l'input
              />
              <Button
                variant="light"
                className={`${style.darkModeButtonSize} ${style.darkModeButton} btn-sm px-3`}
                onClick={toggleDarkMode}>
                    {isDarkMode? <FontAwesomeIcon icon={faSun} style={{ fontSize: '1.5em'}} /> : <FontAwesomeIcon icon={faMoon} style={{ fontSize: '1.5em'}}/> }
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
