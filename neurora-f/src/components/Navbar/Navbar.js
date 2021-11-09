import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import {Navbar , Nav , Button , NavDropdown , Container ,Row , Col} from 'react-bootstrap';

function Navi() {
  return (
    <div className="Navi">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">Neurora</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">About Us</Nav.Link>
                    <Nav.Link href="#pricing">Contact Us</Nav.Link>
                    <Nav.Link href="#pricing">Profile</Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="success">Sign In</Button>{' '}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default Navi;
