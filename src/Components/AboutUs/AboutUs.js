import React from 'react';
import NavCompo from '../../NewComponents/Navbar/NavCompo';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <>
      <NavCompo />
      <div className="container mt-5">
        <h1 className="mb-4 text-center">About US</h1>
        <div className="row">
  <div className="col-md-6">
    <p>
      Welcome to MytradeJournal, your premier destination for comprehensive trade tracking and performance analysis. In the fast-paced world of stock trading, meticulous record-keeping and insightful analysis are essential, and our platform is designed to cater to traders of all levels. Our intuitive interface makes logging trades effortless, whether you're a seasoned investor or just starting out. With our tools, you can track every trade with precision, ensuring transparency and accountability throughout your trading journey.
    </p>
    <h3 className="mt-4">Our Mission</h3>
    <p>
      Our mission is to equip traders with the resources they need to make informed decisions and optimize their performance in the Indian stock market. Through innovative features such as real-time data tracking and customizable analytics, we aim to elevate your trading experience and help you reach your financial goals. Backed by a team of experienced professionals in finance and technology, we are dedicated to delivering excellence in trade logging and performance analysis. We continually enhance our platform to meet the evolving needs of our users and stay at the forefront of the dynamic landscape of stock trading.
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
      Join us today and embark on a journey towards smarter, more efficient trading. Let's navigate the complexities of the stock market together, one trade at a time. Happy Trading!
    </p>
    <p className="mt-4">
      If you have any questions or feedback, don't hesitate to Contact Us — we're here to help!
    </p>
  </div>
</div>

      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
