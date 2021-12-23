import React from "react";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import "./Post.css";
import postImage1 from "../../images/postImage1.png"
import user1 from "../../images/user1.png"

const Post = () => {
  return (
    <Container className="mt-3 fs-5">
      <Row className="post-menu">
        <Col md={8}>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">All Posts (32)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">Article</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Event</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Job</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={4}>
          <Button variant="light me-4 bg-secondary bg-opacity-25">
            Write a Post
          </Button>
          <Button>Join Group</Button>
        </Col>
      </Row>
      <Container className="d-flex justify-content-between align-items-center pt-3 mobile-menu">
        <h5>Posts (368)</h5>
        <Button variant="light me-4 bg-secondary bg-opacity-25">
          Filter:All
        </Button>
      </Container>

{/* post cards */}

      <Row className="g-4">
    <Col md={8}>
      <Card>
        <Card.Img variant="top" src= {postImage1} />
        <Card.Body>
            <Card.Text>
            ✍️ Article
            </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
          <Card.Title className="fs-2">What if famous brands had regular fonts? Meet RegulaBrands!</Card.Title>
          <span className="me-5 fs-1">...</span>
          </div>
          <Card.Text className="fs-4">
          I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
          </Card.Text>
          <div className="d-flex align-items-center">
              <img className="me-2" src= {user1} alt="" />
              <h5>Sarthak Kamra</h5>
          </div>
        </Card.Body>
      </Card>
    </Col>
</Row>
    </Container>
  );
};

export default Post;
