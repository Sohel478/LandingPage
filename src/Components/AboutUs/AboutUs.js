import React from 'react';
import { Link } from 'react-router-dom';
import NavCompo from '../../NewComponents/Navbar/NavCompo';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <>
      <NavCompo />
      <div className="container mt-5">
        <h1 className="mb-4 text-center">About My Trading Journal</h1>
        <div className="row">
          <div className="col-md-6">
            <p>
              Welcome to <strong>My Trading Journal</strong>, your go-to platform for seamlessly recording your trade history and tracking your profits and losses. At <strong>My Trading Journal</strong>, we understand the importance of maintaining a comprehensive record of your trades and analyzing your financial performance. Whether you're an experienced trader or just starting out, our platform is designed to simplify the process of managing your trades and gaining valuable insights into your trading activities.
            </p>
            <h3 className="mt-4">Our Mission</h3>
            <p>
              Our mission at <strong>My Trading Journal</strong> is to empower traders of all levels with the tools and resources they need to make informed decisions and optimize their trading strategies. We strive to provide a user-friendly and intuitive platform that streamlines the trade recording process and offers valuable analytics to help traders evaluate their performance and improve their results.
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="mt-4">What We Offer</h3>
            <ul className="list-group">
              <li className="list-group-item"><strong>Trade Recording:</strong> Easily log your trade details, including entry and exit points, position size, and trade outcomes.</li>
              <li className="list-group-item"><strong>Profit/Loss Tracking:</strong> Keep track of your profits and losses over time, allowing you to assess the effectiveness of your trading strategies.</li>
              <li className="list-group-item"><strong>Analytics and Insights:</strong> Gain valuable insights into your trading performance through customizable analytics and reports, helping you identify patterns and trends to refine your approach.</li>
              <li className="list-group-item"><strong>Secure and Confidential:</strong> We prioritize the security and confidentiality of your trade data, ensuring that your information remains safe and protected at all times.</li>
            </ul>
            <h3 className="mt-4">Get Started Today</h3>
            <p>
              Ready to take control of your trading journey? Sign up for an account on <strong>My Trading Journal</strong> today and start recording your trades, tracking your profits and losses, and gaining valuable insights into your trading performance. Join our community of traders and experience the difference <strong>My Trading Journal</strong> can make in your trading success.
            </p>
            <p className="mt-4">
              If you have any questions or feedback, don't hesitate to <Link to="/contact" className="btn btn-primary">contact us</Link> — we're here to help!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
