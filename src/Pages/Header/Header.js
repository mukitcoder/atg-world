import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import icon from "../../images/icon.png";
import Login from "../Login/Login";
import Register from "../Login/Register";
const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showSignUp, setShowSignUp] = useState(false);
  const handleSignUpClose = () => setShowSignUp(false);
  const handleSignUpShow = () => setShowSignUp(true);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={icon} alt="headerIcon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form className="d-flex mx-auto">
              <FormControl
                type="search"
                placeholder="Search for your favorite groups in ATG"
                className="px-4 rounded-pill"
                aria-label="Search"
                style={{ width: 335 }}
              />
            </Form>
            <Nav className="ms-auto">
              <Navbar.Text className="fw-bold">
                Create account. <span className="text-primary">It's free!</span>
              </Navbar.Text>
              <NavDropdown title="" id="collapsible-nav-dropdown">
                <Button variant="success" className=" d-flex mx-auto"  onClick={handleShow}>Sign In</Button>
                <Button className=" d-flex mx-auto mt-3" onClick={handleSignUpShow}>Sign Up</Button>
               
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    <Login show={show} handleClose={handleClose} >
    </Login>

    <Register showSignUp={showSignUp} handleSignUpClose={handleSignUpClose} >
    </Register>
    </div>
  );
};

export default Header;
