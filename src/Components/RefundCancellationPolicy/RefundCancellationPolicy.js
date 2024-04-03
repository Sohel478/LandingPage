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
          At My Trading Journal, we strive to provide our users with the best experience possible. Please read our refunds and cancellation policies carefully to understand your rights and responsibilities when using our platform.
        </p>
        <h3 className="mt-4">Refunds Policy</h3>
        <p>
          We offer refunds under certain conditions outlined in our terms and conditions. If you believe you are eligible for a refund, please contact our customer support team at support@mytradingjournal.com.
        </p>
        <h3 className="mt-4">Cancellation Policy</h3>
        <p>
          You can cancel your subscription at any time by logging into your account and accessing the cancellation option in your account settings. Please note that cancellation may result in the loss of access to certain features or data associated with your account.
        </p>
        <p>
          For more information about our refunds and cancellation policies, please refer to our <a href="/terms">Terms & Conditions</a> or contact our customer support team.
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default RefundCancellationPolicy;
