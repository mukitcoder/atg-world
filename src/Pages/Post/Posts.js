import React from 'react';
import { Card, Col } from 'react-bootstrap';
import postImage1 from "../../images/postImage1.png";
import postImage2 from "../../images/postImage2.png";
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
import "./Post.css";

const Posts = () => {
    return (
        <Col md={8}>
          <Card>
            <Card.Img variant="top" src={postImage1} />
            <Card.Body>
              <Card.Text>✍️ Article</Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title className="fs-2">
                What if famous brands had regular fonts? Meet RegulaBrands!
                </Card.Title>
                <span className="me-5 fs-1">...</span>
              </div>
              <Card.Text className="fs-4">
                I've worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </Card.Text>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img className="me-3" src={user1} alt="" />
                  <h5>Sarthak Kamra</h5>
                </div>
                <div className="d-flex align-items-center post-menu">
                  <i className="far fa-eye me-3"></i>
                  <span>1.4k views</span>
                  <i className="fas fa-share-alt bg-secondary bg-opacity-25 p-3 ms-5"></i>
                </div>
                {/* mobile view */}
                <div className="d-flex align-items-center mobile-menu">
                  <i className="fas fa-share-alt bg-secondary bg-opacity-25 px-2 py-1">  Share</i>
                </div>
              </div>
            </Card.Body>
          </Card>
          {/* second card */}
          <Card className="mt-3">
            <Card.Img variant="top" src={postImage2} />
            <Card.Body>
              <Card.Text>🔬️ Education</Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title className="fs-2">
                Tax Benefits for Investment under National Pension Scheme launched by Government
                </Card.Title>
                <span className="me-5 fs-1">...</span>
              </div>
              <Card.Text className="fs-4">
                I've worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </Card.Text>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img className="me-3" src={user2} alt="" />
                  <h5>Sarah West</h5>
                </div>
                <div className="d-flex align-items-center post-menu">
                  <i className="far fa-eye me-3"></i>
                  <span>1.4k views</span>
                  <i className="fas fa-share-alt bg-secondary bg-opacity-25 p-3 ms-5"></i>
                </div>
                  {/* mobile view */}
                  <div className="d-flex align-items-center mobile-menu">
                  <i className="fas fa-share-alt bg-secondary bg-opacity-25 px-2 py-1">  Share</i>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Posts;