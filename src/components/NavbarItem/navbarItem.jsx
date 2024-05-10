import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


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
            <Nav.Link as={Link} to="/functions#top"  className='pn-link'>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/functions#funcionalidades" className='pn-link'>Funcionalidades</Nav.Link>
            <Nav.Link as={Link} to="/functions#videos" className='pn-link'>Videos</Nav.Link>
            <Nav.Link as={Link} to="/functions#descarga" className='pn-link'>Descarga</Nav.Link>
            <Nav.Link as={Link} to="/contacts" className='pn-link'>Contacto</Nav.Link> {/* Cambiado a "to" */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}