import React, { useState, } from 'react';
import {Link} from 'react-router-dom'
import { Navbar, Nav, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavPanel = () => {

  const nav = useNavigate();
  
  // const toggleDropdown = () => {
  //   setShowDropdown(true);
  // };

  // const handleLogin = () => {
  //   nav('/signin');
  // };

  // const handleSignup = () => {
  //   nav('/signup');
  // };

  const handleHome = () => {
    nav('/');
  };



  const handlePriceNav = ()=>{
    nav('/pricing')
  }

  return (
    <Navbar style={{ background: 'black', padding: '10px' }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <h2 style={{ cursor: 'pointer', marginLeft:'-40px' }} onClick={handleHome}>
            Trade Analytics
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav  className="d-flex align-items-center">
            <Nav.Link href='#features' className="px-3" style={{color:'white'}}>Features</Nav.Link>
            <Nav.Link onClick={handlePriceNav} className="px-3" style={{color:'white'}}>Pricing</Nav.Link>
            <Nav.Link href="#contact" className="px-3" style={{color:'white'}}>Contact</Nav.Link>
            <Link to={'/signin'} className="px-3" style={{ color: 'white',textDecoration:'none' }}>Login</Link>
            
            {/* <div
              onMouseEnter={toggleDropdown}
              onMouseLeave={() => setShowDropdown(false)}
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', }}
              className="custom-dropdown-toggle"
            >
              <NavDropdown.Item onClick={handleLogin} style={{color:'white'}}>Login</NavDropdown.Item>
              {showDropdown && (
                <NavDropdown
                  title=""
                  id="basic-nav-dropdown"
                  show={showDropdown}
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={() => setShowDropdown(false)}
                  style={{ position: 'absolute', right: '155px'}}
                >
                  <NavDropdown.Item onClick={handleSignup}>Register Here</NavDropdown.Item>
                </NavDropdown>
              )}
            </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavPanel;
