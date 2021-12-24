import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import loginImage from "../../images/login.png";
import fb from "../../images/fb.png"
import google from "../../images/search.png"

const Login = ({ show, handleClose }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton className="bg-success bg-opacity-25">
          <h6 className="text-success mx-auto ">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </h6>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Form>
                  <h3 className="mb-3 fw-bold">Sign In</h3>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 rounded-pill"
                >
                  Sign In
                </Button>
              </Form>
                <Button variant="light w-100 border mt-2"><img src= {fb} alt="" className="me-2"/> Sign in with Facebook</Button>
                <Button variant="light w-100 border mt-2"><img src= {google} alt="" className="me-2"/> Sign in with Google</Button>
                <Button variant="light w-100 border mt-2">Forgot Password?</Button>
            </Col>
            <Col md={6}>
                <p className="mb-3">Don’t have an account yet? <span className="fw-bold text-primary">Create new for free!</span></p>
              <img className="img-fluid d-flex mx-auto" src={loginImage} alt="" />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
