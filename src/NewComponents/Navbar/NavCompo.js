import React from "react";
import tradelogo from "../Trade Photos/Logo.png";
import "./NavCompo.css";

import { Link } from "react-router-dom"; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Form } from "react-bootstrap";




const NavCompo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  
  return (
    <>
      <div className="heading" style={{ display: "flex", alignItems: "center" }}>
        <img
          src={tradelogo}
          alt="Trade Journal Logo"
          style={{
            width: "50px", // Adjust the width of the logo
            height: "auto", // Maintain aspect ratio
            marginRight: "10px",
            marginLeft: "10px",
            marginTop: "5px" // Add margin to separate logo from text
          }}
        />
        <h3 style={{ margin: "14px 0", overflowY: "hidden" }}>My Trade Journal</h3>
      </div>
      <div className="nav-container">
        <Link to="/" className="footer-link"> {/* Link to the home route */}
          Home
        </Link>
        <Link onClick={handleShow} className="footer-link"> {/* Link to the contact route */}
          Contact
        </Link>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>   <Container id="contact">
        <Row className="justify-content-center align-items-center">
            <Col md={12} className="signup__form--container">
                <Form style={{ width: "100%" }} >
                    <h1 style={{ paddingBottom: '20px' }}>Contact Us</h1>
    
                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setfirstName(e.target.value)} required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setlastName(e.target.value)} required />
                            </Form.Group>
                        </Col>
                    </Row>
    
                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="phoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="tel" placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} required />
                            </Form.Group>
                        </Col>
                    </Row>
    
    
                    
                </Form>
            </Col>
        </Row>
    </Container></Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
        <Link to="/pricing" className="footer-link"> {/* Link to the pricing route */}
          Pricing
        </Link>
        <a href="https://trade-journal-app-jts9d.ondigitalocean.app/" className="footer-link">
          Login
        </a>
      </div>
    </>
  );
};

export default NavCompo;
