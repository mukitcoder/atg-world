import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Row,
} from "react-bootstrap";
import "./Post.css";
import leisure from "../../images/Leisure.png";
import activism from "../../images/Activism.png";
import mba from "../../images/MBA.png";
import philosophy from "../../images/Philosophy.png";
import Posts from "./Posts";

const Post = () => {
  const [showWrite, setShowWrite] = useState(true);
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [joinGroup, setJoinGroup] = useState(false);
  const [showGroups, setShowGroups] = useState(false);
  const toggle = () => {
    setState(!state);
  };
  const toggle2 = () => {
    setState2(!state2);
  };
  const toggle3 = () => {
    setState3(!state3);
  };
  const toggle4 = () => {
    setState4(!state4);
  };
  const groupButton = () => {
    setJoinGroup(!joinGroup);
    setShowGroups(!showGroups)
  };
  return (
    <Container className="mt-3 fs-5">
      <Row className="post-menu">
        <Col md={8}>
          <Nav variant="tabs" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link href="#home">All Posts (32)</Nav.Link>
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
        <Col md={4} className="text-center">
          <Button
            className="fw-bold"
            variant="light me-4 bg-secondary bg-opacity-25"
            onClick={() => setShowWrite(!showWrite)}
          >
            Write a Post <i className="fas fa-caret-down"></i>
          </Button>
          <Button className="fw-bold" onClick={groupButton}  variant={"primary"+(joinGroup?"light":"")} >
              {
                  joinGroup? <i class="fas fa-sign-out-alt me-2"></i> : <i className="fas fa-users me-2"></i>
              }
            {
                joinGroup?"Leave Group": "Join Group"
            }
          </Button>
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
        <Posts/>
        
        <Col md={4} className="mt-5">
          {showWrite ? (
            <div>
              {" "}
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <i className="fas fa-map-marker-alt me-2"></i>
                </InputGroup.Text>
                <FormControl placeholder="Noida, India" />
                <InputGroup.Text>
                  <i className="fas fa-pen"></i>
                </InputGroup.Text>
              </InputGroup>
              <hr />
              <div className="text-secondary">
                <i className="fas fa-exclamation-circle me-2"></i>
                <span>
                  Your location will help us serve better and extend a
                  personalised experience.
                </span>
              </div>{" "}
            </div>
          ) : null}

          {/* recommended groups */}
         {
             showGroups?(
                <div className="text-center">
                <h5>
                  <i className="far fa-thumbs-up mt-5"></i> RECOMMENDED GROUPS
                </h5>
    
                <div className="mt-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img className="me-3" src={leisure} alt="" />
                    <h6>Leisure</h6>
                  </div>
                  <Button
                    variant={
                      "light me-4 bg-dark text-white" +
                      (state ? "light me-4 bg-secondary bg-opacity-25" : "")
                    }
                    onClick={toggle}
                  >
                    {state ? "Follow" : "Followed"}
                  </Button>
                </div>
    
                {/* Group 2 */}
                <div className="mt-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img className="me-3" src={activism} alt="" />
                    <h6>Activism</h6>
                  </div>
                  <Button
                    variant={
                      "light me-4 bg-dark text-white" +
                      (!state2 ? "light me-4 bg-secondary bg-opacity-25" : "")
                    }
                    onClick={toggle2}
                  >
                    {!state2 ? "Follow" : "Followed"}
                  </Button>
                </div>
                  {/* Group 3 */}
                <div className="mt-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img className="me-3" src={mba} alt="" />
                    <h6>MBA</h6>
                  </div>
                  <Button
                    variant={
                      "light me-4 bg-dark text-white" +
                      (state3 ? "light me-4 bg-secondary bg-opacity-25" : "")
                    }
                    onClick={toggle3}
                  >
                    {state3 ? "Follow" : "Followed"}
                  </Button>
                </div>
                  {/* Group 4 */}
                <div className="mt-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img className="me-3" src={philosophy} alt="" />
                    <h6>Philosophy</h6>
                  </div>
                  <Button
                    variant={
                      "light me-4 bg-dark text-white" +
                      (!state4 ? "light me-4 bg-secondary bg-opacity-25" : "")
                    }
                    onClick={toggle4}
                  >
                    {!state4 ? "Follow" : "Followed"}
                  </Button>
                </div>
              </div>
             ):null
         }
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
