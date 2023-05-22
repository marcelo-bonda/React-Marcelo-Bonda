import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/cartWidget';

function NavBar() {
  return (
    <Navbar bg="orange" expand="lg">
      <Container>
        <Navbar.Brand href="#home">La tienda del gift</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Nuestros productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bazar y hogar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Oficina
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Para los mas chicos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      <CartWidget/>
    </Navbar>
    
    
    
  );
}

export default NavBar;