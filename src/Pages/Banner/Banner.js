import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Container fluid className='banner-container text-white d-flex align-items-center'>
          <Col md={5} xs={10} className='ms-5 ps-5'>
          <h1>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p>
          </Col>
        </Container>
    );
};

export default Banner;