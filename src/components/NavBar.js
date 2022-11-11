import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";

const NavBar = () =>  {
  return (
    <NavbarBootstrap bg="light" expand="lg" sticky="top">
      <Container>
        <NavbarBootstrap.Toggle aria-controls="basic-Navbar-nav" className="order-lg-1"/>
          <NavbarBootstrap.Brand className="order-lg-0">
            <Link to={`/`}>CLOUDSPORT-JUJUY</Link>
          </NavbarBootstrap.Brand>
          
          <NavbarBootstrap.Collapse id="basic-Navbar-nav nabvarMenu" >
            <Nav className="me-auto text-center">
              <Link to={`/categoryId/nuevo`} className="linksNavbar">  LO NUEVO-2022  </Link>
              <Link to={`/category/urbanas`} className="linksNavbar">  MODA URBANA  </Link>
              <Link to={`/category/zapatillas`} className="linksNavbar">  SECCION DEPORTIVA  </Link>
            </Nav>
            
        </NavbarBootstrap.Collapse>
        
      </Container>
      <CartWidget/>
    </NavbarBootstrap>
  );
}

export default NavBar;