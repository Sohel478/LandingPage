import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewHome from '../NewComponents/NewHome/NewHome';
import SignIn from '../Components/Auth/Login/Login';
import ForgotPasswordForm from '../Components/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from '../Components/Auth/ResetPassword/ResetPassword';
import PricingPage from '../Components/Pricing/Pricing';
import Terms from '../Components/Privacy Page/Terms';
import ContactUs from '../NewComponents/ContactUs/ContactUs';
import AboutUs from '../Components/AboutUs/AboutUs';
import RefundCancellationPolicy from '../Components/RefundCancellationPolicy/RefundCancellationPolicy';
import PrivacyPolicy from '../Components/PrivacyPolicy/PrivacyPolicy'; // Import PrivacyPolicy component

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewHome />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/forgot-password' element={<ForgotPasswordForm />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/RefundCancellationPolicy' element={<RefundCancellationPolicy />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} /> {/* Add route for PrivacyPolicy */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
