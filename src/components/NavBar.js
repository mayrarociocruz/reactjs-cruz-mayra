import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";

const NavBar = () =>  {
  return (
    <NavbarBootstrap bg="dark" expand="lg" sticky="top">
      <Container>
        <NavbarBootstrap.Toggle aria-controls="basic-Navbar-nav" className="order-lg-1"/>
          <NavbarBootstrap.Brand className="brand">
            <Link to={`/`} className="brand">CLOUDSPORT-JUJUY</Link>
          </NavbarBootstrap.Brand>
          
          <NavbarBootstrap.Collapse id="basic-Navbar-nav nabvarMenu" >
            <Nav className="me-auto text-center">
              <Link to={`/category/nuevo`} className="linkNavbar">  LO NUEVO-2022  </Link>
              <Link to={`/category/urbanas`} className="linkNavbar">  MODA URBANA  </Link>
              <Link to={`/category/zapatillas`} className="linkNavbar">  SECCION DEPORTIVA  </Link>
            </Nav>
            
        </NavbarBootstrap.Collapse>
        
        <CartWidget/>
      </Container>
      
    </NavbarBootstrap>
  );
}

export default NavBar;