import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import './navbarItem.css';

export const NavbarItem = () => {
  return (
    <Navbar expand="lg" className="pn-bg-gray sticky-top navbar-dark">
      <Container>
        <Navbar.Brand href="/">
          <img src="assets/Recurso1.png" alt="Logo" height='56px' width="auto"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav className="">
            <Nav.Link href="#top" className='pn-link'>Inicio</Nav.Link>
            <Nav.Link href="#funcionalidades" className='pn-link'>Funcionalidades</Nav.Link>
            <Nav.Link href="#videos" className='pn-link'>Videos</Nav.Link>
            <Nav.Link href="#descarga" className='pn-link'>Descarga</Nav.Link>
            <Nav.Link href="#contacto" className='pn-link'>Contacto</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}