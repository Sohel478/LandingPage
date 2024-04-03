import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";


function Signup() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setconfPass] = useState("");

    function handleSignup(e) {
        e.preventDefault();
    }

    return (
        <Container>
        <Row className="justify-content-center align-items-center">
            <Col md={6} className="signup__form--container">
                <Form style={{ width: "100%" }} onSubmit={handleSignup}>
                    <h1 style={{ paddingBottom: '20px' }}>Create an account</h1>
    
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
    
                    <Form.Group controlId="password" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>
    
                    <Form.Group controlId="confPass" className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" value={confPass} onChange={(e) => setconfPass(e.target.value)} required style={{paddingBottom:'20px'}}/>
                    </Form.Group>
    
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Create account
                        </Button>
                    </Form.Group>
    
                    <p className="text-center" style={{ marginTop: '-35px' }}>
                        Already have an account? <Link to="/signin">Login</Link>
                    </p>
                </Form>
            </Col>
            <Col md={6} className="signup__image--container"></Col>
        </Row>
    </Container>
    
    );
}

export default Signup;