import React from 'react';
import NavCompo from '../../NewComponents/Navbar/NavCompo';
import Footer from '../Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <NavCompo />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <h2 className="text-center" style={{ color: 'white', marginBottom: '0px' }}>Privacy Policy</h2>
              <div className="privacy-policy-content text-white">
                {/* Replace the existing content with the HTML content here */}
                <br/>
           <div className='container'>    
    <p>Mytradejournal, operated by Shavinya Technologies LLP ("us", "we", or "our"), values your privacy and is committed to protecting your personal data when you engage with our Service through www.mytradejournal.in.</p>
    <p>This Privacy Statement outlines our procedures for confidentiality, including the gathering, utilization, and disclosure of personal information, as well as the options available to you regarding that data.</p>
    <p>Your data is used to enhance and provide the Service. By using the Service, you consent to the collection and utilization of information as outlined in this policy.</p>
    <h2>Information Collection, Utilization, and Sharing:</h2>
    <p>We are the sole proprietors of the information gathered on this site. We only access/collect information that you voluntarily provide when using the site. Under no circumstances will we sell or lease this information to any party. Your information is utilized to render the services of the site. We refrain from sharing your information with any third party outside our organization unless it is imperative to fulfill your request. Unless you instruct otherwise, we may contact you via email in the future to inform you about promotions, new products or services, or revisions to this privacy policy.</p>
    <p>We compile statistical data on web traffic through a third-party web analytics service; this may involve the use of a cookie on your device, however, no user-identifiable information is ever shared with this third party, apart from "standard" web analytics such as IP address, browser, etc. Under no circumstances will your individual data be disclosed to any entity, nor will any personally identifiable information be shared or linked with any of the data.</p>
    <h2>Your Access to and Control Over Information:</h2>
    <p>You have the prerogative to opt out of any future communications from us at any time. You can execute the following actions at any time by contacting us via email at support@mytradejournal.in:</p>
    <ul>
        <li>Request the deletion of any data we possess about you.</li>
        <li>Express any concerns you may have regarding our use of your data.</li>
    </ul>
    <h2>Security:</h2>
    <p>We implement precautions to safeguard your information. When you submit sensitive information via the website, it is protected both online and offline. Any sensitive information we collect (such as your trade data) is encrypted and securely transmitted to us.</p>
    <p>Should you believe that we are not adhering to this privacy policy, please promptly contact us via email at support@mytradejournal.in.</p>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
