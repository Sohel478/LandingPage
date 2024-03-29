import React from "react";
// import style from "./footer.module.css";
// import { FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";
// import { BsInstagram, BsEnvelope, BsTwitter, BsArrowUp } from "react-icons/bs";
 import { BsArrowUp } from "react-icons/bs";
import { Link, useNavigate} from 'react-router-dom';
import './footer.css'

// main footer compo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


function Footer() {

  const navi = useNavigate()
  const navterms = useNavigate()

  const handlePriceNav = ()=>{
    navi('/pricing')
  }

  const handleTnC= ()=>{
    navterms('/terms')
  }
  
  


  


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h6 className="section-title">Company name</h6>
          <hr className="section-divider" />
          <p>
          <b> Trading Analytics </b><br/>
          "Empower your financial journey with our cutting-edge trading platform, providing seamless access to global markets and advanced tools for informed decision-making."
          </p>
        </div>
        <div className="footer-section">
          <h6 className="section-title">Useful links</h6>
          <hr className="section-divider" />
          <p>
            <Link to={'./signin'}  className="footer-link">Login</Link>
          </p>
          <p>
            <Link to={'./signup'}  className="footer-link">Signup</Link>
          </p>
          <p className="footer-link" onClick={handlePriceNav}>
              Pricing
          </p>
          <p className="footer-link" onClick={handleTnC}>
              Terms & Conditions
          </p>
              
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
        <span onClick={scrollToTop} style={{float:'right', paddingRight:'10px'}}> <BsArrowUp /></span>
      </div>
      
    </footer>
  );
}

export default Footer;
