import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import icon from '../../images/icon.png'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
  <Container>
  <Navbar.Brand href="#home"><img src= {icon} alt="headerIcon" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Form className="d-flex mx-auto">
        <FormControl
          type="search"
          placeholder="Search for your favorite groups in ATG"
          className="px-4 rounded-pill"
          aria-label="Search"
          style={{width:335}}
        />
      </Form>
    <Nav className="ms-auto">
      <NavDropdown title="" id="collapsible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Sign Up</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Sign In</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;