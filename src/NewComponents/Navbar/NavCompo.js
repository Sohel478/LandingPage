import React from 'react'
import tradelogo from '../Trade Photos/Trade.p-Site-Logo.png'
import './NavCompo.css'
import { Nav} from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';

const NavCompo = () => {
  const navi = useNavigate()
  const navh = useNavigate()

  const handlePriceNav = ()=>{
    navi('/pricing')
  }

  const handleHomenav = () =>{
    navh('/NewHome/NewHome')
  }
  return (
   <>
    <div className='heading'>
    <img src={tradelogo} alt='not-found'/>
    <h3 style={{marginTop: '14px',marginLeft:'-159px', overflowY:'hidden'}}>Trade Journal</h3>
    </div>

    <div className='nav-container'>
    <p className="footer-link" onClick={handleHomenav}>
              Home
          </p>
      <Nav.Link href="#contact" style={{cursor:'pointer'}} >Contact</Nav.Link>
      <p className="footer-link" onClick={handlePriceNav}>
              Pricing
          </p>
      <Nav.Link href='https://trade-journal-app-jts9d.ondigitalocean.app/' style={{cursor:'pointer'}}>Login</Nav.Link>
    </div>
   </>
  )
}

export default NavCompo