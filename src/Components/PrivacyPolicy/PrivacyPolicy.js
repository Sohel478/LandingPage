import React from 'react';
import NavCompo from '../../NewComponents/Navbar/NavCompo';
import Footer from '../Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <NavCompo />
      <div className="container mt-5">
        <h2 className="mb-4">Privacy Policy</h2>
        <p>
          At My Trading Journal, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our platform.
        </p>
        <h3 className="mt-4">Information Collection and Use</h3>
        <p>
          We collect and use your personal information to provide, maintain, and improve our services, as well as to communicate with you regarding your account and transactions. We may collect information such as your name, email address, and payment details.
        </p>
        <h3 className="mt-4">Data Security</h3>
        <p>
          We implement security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
        <h3 className="mt-4">Third-party Services</h3>
        <p>
          We may use third-party services to facilitate our services or to analyze how our platform is used. These third-party service providers have their own privacy policies governing the use of your information.
        </p>
        <h3 className="mt-4">Changes to This Privacy Policy</h3>
        <p>
          We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on this page. We encourage you to review this Privacy Policy periodically for any updates.
        </p>
        <p>
          If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:privacy@mytradingjournal.com">privacy@mytradingjournal.com</a>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
