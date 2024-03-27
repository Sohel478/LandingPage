import React, { useState } from "react";
import './Contact.css'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const ContactUs = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  return (
    <>
    {/* <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingTop:'200px'}}>
      <h1>Contact Us</h1>
      <p>We are always active and ready for action.</p>
      <form style={{display:'flex', 
        flexDirection:'column', 
        justifyContent:'space-between', 
        alignItems:'center',
        height:'30vh'
      }} >
        <input type='text' placeholder='Your Name' required className='contactus-name'/>

        <input type='email' placeholder='Your Email' required className='contactus-name'/>

        <input type='text' placeholder='Your Message' required className='contactus-name'/>
      </form>
    </div> */}

<Container id="contact">
        <Row className="justify-content-center align-items-center">
            <Col md={6} className="signup__form--container">
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
    
    
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
            <Col md={6} className="contactUs__image--container"></Col>
        </Row>
    </Container>
    <Footer/>
    
    
    
    </>
  )
}

export default ContactUs