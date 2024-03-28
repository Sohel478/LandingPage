import React from 'react'
import tradelogo from '../Trade Photos/Trade.p-Site-Logo.png'
import './NavCompo.css'
import { Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavCompo = () => {
  return (
   <>
    <div className='heading'>
    <img src={tradelogo} alt='not-found'/>
    <h3 style={{marginTop: '14px',marginLeft:'-159px', overflowY:'hidden'}}>Trade Journal</h3>
    </div>

    <div className='nav-container'>
      <Nav.Link to={'/Home.js'}>Home</Nav.Link>
      <Nav.Link href="#contact" style={{cursor:'pointer'}} >Contact</Nav.Link>
      <Nav.Link href="#pricing" style={{cursor:'pointer'}}>Pricings</Nav.Link>
      <Nav.Link href='https://trade-journal-app-jts9d.ondigitalocean.app/' style={{cursor:'pointer'}}>Login</Nav.Link>
    </div>
   </>
  )
}

export default NavCompo