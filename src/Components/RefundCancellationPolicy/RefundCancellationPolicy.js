import React from 'react';
import NavCompo from '../../NewComponents/Navbar/NavCompo';
import Footer from '../Footer/Footer';

const RefundCancellationPolicy = () => {
  return (
    <>
      <NavCompo />
      <div className="container mt-5">
        <h2 className="mb-4">Refunds and Cancellation Policies</h2>
        <p>
        Once you sign up with mytradejournal, please note that we have a firm policy against refunds.
All payments processed are deemed as final and cannot be refunded under any circumstances.
        </p>
        
        <p>
        It is important to remember that we cannot be held responsible for any ongoing subscriptions if
a user fails to cancel their account.
        </p>
      
      </div>
      <Footer/>
    </>
  );
};

export default RefundCancellationPolicy;
