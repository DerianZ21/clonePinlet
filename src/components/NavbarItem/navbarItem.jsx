import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Asegúrate de usar Link de react-router-dom

import './navbarItem.css';

export const NavbarItem = () => {
  return (
    <Navbar expand="lg" className="pn-bg-gray sticky-top navbar-dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="assets/Recurso1.png" alt="Logo" height='56px' width="auto"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav className="">
            <Nav.Link as={Link} to="/" className='pn-link'>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/functions" className='pn-link'>Funcionalidades</Nav.Link>
            <Nav.Link as={Link} to="/videos" className='pn-link'>Videos</Nav.Link>
            <Nav.Link as={Link} to="/descarga" className='pn-link'>Descarga</Nav.Link>
            <Nav.Link as={Link} to="/contactos" className='pn-link'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};