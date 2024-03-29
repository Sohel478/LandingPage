import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Pricing.css';
import Footer from '../Footer/Footer';
import NavCompo from '../../NewComponents/Navbar/NavCompo';

const GreenTickIcon = () => (
  <img src='https://duzycfafl38re.cloudfront.net/Website/Images/tick2311202217560924112022100903.png' alt='network error' />
);



const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const handlePlanToggle = (value) => {
    setSelectedPlan(value);
  };

  const plans = [
    {
      title: 'Basic Plan',
      features: [
        { icon: <GreenTickIcon />, text: 'Essential Features' },
        { icon: <GreenTickIcon />, text: 'Real-time Market Data' },
        { icon: <GreenTickIcon />, text: 'Limited Analytics Tools' },
        { icon: <GreenTickIcon />, text: 'Market Breadth' },
        { icon: <GreenTickIcon />, text: 'Pre-Defined Trading Strategies' },
        { icon: <GreenTickIcon />, text: 'Investment Ideas' },
        { icon: <GreenTickIcon />, text: 'Derivative Analytics' },
        { icon: <GreenTickIcon />, text: 'Combination Scans' },
        { icon: <GreenTickIcon />, text: 'Company Filings' },
        { icon: <GreenTickIcon />, text: 'Access to interactive Edge Chart' },
        { icon: <GreenTickIcon />, text: 'Tab Customization' },
      ],
      monthlyPrice: '$9.99',
      yearlyPrice: '$99.99   ',
    },
    {
      title: 'Premium Plan',
      features: [
        { icon: <GreenTickIcon />, text: 'Full Access to All Features' },
        { icon: <GreenTickIcon />, text: 'Personalized Analytics Dashboard' },
        { icon: <GreenTickIcon />, text: '24/7 Premium Support' },
        { icon: <GreenTickIcon />, text: 'Technical Peer Comparison' },
        { icon: <GreenTickIcon />, text: 'Sectoral/Company analysis' },
        { icon: <GreenTickIcon />, text: 'Trading and Investment ideas' },
      ],
      monthlyPrice: '$29.99',
      yearlyPrice: '$99.99',
    },
  ];

  return (

    <><NavCompo /><div>


      <Container className="mt-5 pricing-section" id="pricing">
        <h2 className="text-center mb-4">Choose Your Plan</h2>
        <div className="d-flex justify-content-center mb-3">
          <div className="toggle-container">
            <Button
              variant={selectedPlan === 'monthly' ? 'primary' : 'outline-primary'}
              onClick={() => handlePlanToggle('monthly')}
              className="mx-2 monthly-toggle"
              style={{ border: 'none', borderRadius: '20px' }}
            >
              Monthly
            </Button>
            <Button
              variant={selectedPlan === 'yearly' ? 'primary' : 'outline-primary'}
              onClick={() => handlePlanToggle('yearly')}
              className="mx-2 yearly-toggle"
              style={{ border: 'none', borderRadius: '20px' }}
            >
              Yearly
            </Button>
          </div>

        </div>
        <Row className="justify-content-center">
          {plans.map((plan, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="pricing-card-wrapper d-flex flex-column h-100">
                <Card className={`text-center pricing-card h-100`} style={{ background: 'rgb(173, 216, 230)', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
                  <Card.Header className="pricing-card-header">
                    <h3 className="pricing-card-title">{plan.title}</h3>
                  </Card.Header>
                  <Card.Body className="pricing-card-body d-flex flex-column justify-content-between">
                    <div>
                      <ul className="pricing-card-features">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="pricing-card-feature">
                            <span className="pricing-card-feature-icon">{feature.icon}</span>
                            {feature.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Card.Text className="pricing-card-price" style={{ fontSize: '35px' }}>{selectedPlan === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}</Card.Text>
                      <div style={{ paddingTop: '15px', fontSize: '18px' }}>{selectedPlan === 'monthly' ? '/Month' : '/year'}</div>
                    </div>
                  </Card.Body>
                  {/* <Button variant="contained" color="secondary" fullWidth>Buy Now</Button> */}
                  <Button className='new-color-button'>Buy Now</Button>
                </Card>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {/* Contact Section */}
      {/* <Container id="contact" className="py-5 text-center">
  <h2 className="mb-4">Contact Us</h2>
  <p>Have questions or need assistance? Reach out to our support team.</p>
<Button variant="primary" size="lg">
  Contact Support
</Button>
  </Container> */}
      {/* <Footer /> */}
    </div><Footer/></>
  );
};

export default PricingPage;

