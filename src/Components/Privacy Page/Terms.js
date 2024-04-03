import React from 'react';
import NavCompo from '../../NewComponents/Navbar/NavCompo';
import Footer from '../Footer/Footer';

const Terms = () => {
  return (
    
    <>
    <NavCompo /><div>
      
      <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0,  }}>
      <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px',  }}>
        <h1 style={{ textAlign: 'center' }}>Terms and Conditions</h1>
        <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>Please read these terms and conditions carefully before using our website.</p>
        
        <h2>1. Agreement to Terms</h2>
        <p>By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>
        
        <h2>2. Intellectual Property Rights</h2>
        <p>Unless otherwise indicated, the website and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        
        <h2>3. Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        
        <h2>4. Changes</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
        
        <h2>5. Contact Us</h2>
        <p>If you have any questions about these terms and conditions, please contact us.</p>
      </div>
    </div>
    </div><Footer /></>
  );
};

export default Terms;
