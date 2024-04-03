import React, { useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form } from "react-bootstrap";
import './footer.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Footer() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const handleNavigation = (path) => {
    navigate(path);
  };


 

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h6 className="section-title">Company</h6>
          <hr className="section-divider" />
          <p>
            <b> Trading Analytics </b>
            <br />
            "Empower your financial journey with our cutting-edge trading platform, providing seamless access to global markets and advanced tools for informed decision-making."
          </p>
        </div>
        <div className="footer-section">
          <h6 className="section-title">Useful links</h6>
          <hr className="section-divider" />
          <p className="footer-link" onClick={() => handleNavigation('/aboutUs')}>
            About Us
          </p>
          <p className="footer-link" onClick={() => handleNavigation('/privacy-policy')}>
            Privacy Policy
          </p>
          <p className="footer-link" onClick={() => handleNavigation('/RefundCancellationPolicy')}>
            Cancellation & Refund Policies
          </p>
          <p className="footer-link" onClick={() => handleNavigation('/terms')}>
            Terms & Conditions
          </p>
          
      
<Button variant="primary" onClick={handleShow}>
      Contact Us
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container id="contact">
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
    </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
        <div className="footer-section">
          <h6 className="section-title">Contact</h6>
          <hr className="section-divider" />
          <p>
            <i className="fas fa-home"></i> 799, Sec -7C Faridabad, Haryana 121006
          </p>
          <p>
            <i className="fas fa-envelope"></i> tradejournal96@gmail.com
          </p>
        </div>
      </div>
      <div className="footer-text">
        &copy; 2024 Company. All rights reserved.
        <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ float: 'right', paddingRight: '10px' }}>
          {' '}
          <BsArrowUp />
        </span>
      </div>
     
    </footer>
  );
}

export default Footer;
