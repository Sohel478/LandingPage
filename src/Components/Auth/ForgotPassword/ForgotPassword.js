import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './ForgotPassword.css';
import tradeIcon from './download (3).png'
import passIcon from './password-reset.svg'

const ForgotPasswordForm = () => {
  const navi = useNavigate()
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleLogo = ()=>{
    navi('/')
  }

  return (
   <>
   <img src={tradeIcon} alt='not-found' className='trade-icon' onClick={handleLogo}/>
   <img src={passIcon} alt='not-found' className='pass-image'/>
   <div style={{paddingTop:'20px'}} >
   <div className="custom-forgot-password-form"> 
    <h2 style={{textAlign:'center'}}>Reset Your Password</h2>
    {submitted ? (
      <p>An email with instructions to reset your password has been sent to your email address.</p>
    ) : (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Email</button>
      </form>
    )}
  </div>
   </div>
   </>
  );
};

export default ForgotPasswordForm;
