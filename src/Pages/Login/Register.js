import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import loginImage from "../../images/login.png";
import fb from "../../images/fb.png"
import google from "../../images/search.png"

const Register = ({ showSignUp, handleSignUpClose }) => {
  return (
    <div>
      <Modal show={showSignUp} onHide={handleSignUpClose} size="lg">
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
                  <h3 className="mb-3 fw-bold">Create Account</h3>
                <Form.Group className="mb-1 d-flex">
                  <Form.Control className="me-1" type="text" placeholder="First Name" />
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 rounded-pill"
                >
                  Create Account
                </Button>
              </Form>
                <Button variant="light w-100 border mt-2"><img src= {fb} alt="" className="me-2"/> Sign in with Facebook</Button>
                <Button variant="light w-100 border mt-2"><img src= {google} alt="" className="me-2"/> Sign in with Google</Button>
            </Col>
            <Col md={6} className="text-center">
                <p className="mb-3">Already have an account?<span className="fw-bold text-primary"> Sign In</span></p>
              <img className="img-fluid d-flex mx-auto mb-5" src={loginImage} alt="" />
              <small className="text-secondary ">By signing up, you agree to our Terms & conditions, Privacy policy</small>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Register;
