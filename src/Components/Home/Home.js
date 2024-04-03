import React from 'react'
import './Home.css'
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { FaChartLine, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { BiDollarCircle } from 'react-icons/bi';
import img2 from '../Images/office-cartoon-people-commercial-strategy-chart_82574-3931.avif'
import img3 from '../Images/Email_Light-Mode-2x.gif.gif'
import CarouselComponent from '../Carousel/Carousel'
import NavPanel from './Naviagtion'
import Footer from '../Footer/Footer'

const Home = () => {
    const features = [
        { icon: <FaChartLine />, title: 'Advanced Charts', description: 'Visualize market trends with interactive charts.' },
        { icon: <BiDollarCircle />, title: 'Real-time Data', description: 'Stay updated with live pricing and market data.' },
        { icon: <FaShieldAlt />, title: 'Secure Transactions', description: 'Ensuring the safety of your financial transactions.' },
        { icon: <FaUsers />, title: 'Expert Support', description: 'Access priority support from our expert team.' },
      ];
    
  return (
    <>
    <NavPanel/>
    <div  className='intro-head-container'>
    <h1 className='intro-head'>Trade Smarter, Trade Better with Trade Analytics</h1>
    <div className='intro-description'>"This powerful tool is designed to help traders of all levels improve their performance and 
        enhance their decision-making process."</div>
    </div>
  
        {/* <img src={horizontal} alt='not-found' className='trading-img-banner'/> */}
        <CarouselComponent/>

    <div className='img-banner-description'>
        Whether you're an experienced trader or just starting out, our application will provide you with a 
        comprehensive solution to track and analyze your trades, manage your portfolio, and make informed 
        trading decisions.
    </div>

 {/* Features Section */}
      <Container id="features"  className="py-5">
        <h2 className="text-center mb-4">Key Features</h2>
        <Row className="justify-content-center">
          {features.map((feature, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>{feature.icon}</Card.Title>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    

    <div style={{
                textAlign:'center',
                fontSize:'40px',fontWeight:'600', 
                width:'95vw',display:'block',
                marginLeft:'auto',marginRight:'auto',
                // fontStyle:'italic'
    }}>
        Automated Journaling to Take Control of Your Trading</div>

    <img src={img2} alt='not-found' className='home-img-2'/>
    <span className='home-img-2-description'>"Our web application allows you to enter and track all your trades in a user-friendly interface. 
        You can easily record details such as entry and exit prices, trade duration, position size, and any 
        additional notes you find relevant. By maintaining a detailed log of your trades, you can gain valuable 
        insights into your trading patterns, strengths, and areas for improvement".
    </span>

    <div style={{
                paddingTop:'20px',textAlign:'center',
                fontSize:'40px',fontWeight:'600', 
                width:'75vw',display:'block',
                marginLeft:'auto',marginRight:'auto',
                // fontStyle:'italic'
    }}>
        Worried About Profit and loss. We got you!!</div>

    <div>
        <img src={img3} alt='not-found' className='home-img-3'/>
    </div>

    <ul className='list-container'>
        <li className='list-input'>"Our application provides a range of performance analysis tools to help you assess your trading strategy's effectiveness."</li>
        <li  className='list-input'>"You can generate comprehensive reports and charts that highlight key performance metrics such as win/loss ratio, average profit/loss, risk-reward ratio, and overall profitability." </li>
        <li  className='list-input'>"These insights will enable you to identify successful strategies and refine your trading approach over time."</li>
    </ul>






























































































{/* Contact Section */}
<Container id="contact" className="py-5 text-center">
        <h2 className="mb-4">Contact Us</h2>
        <p>Have questions or need assistance? Reach out to our support team.</p>
        <Button variant="primary" size="lg">
          Contact Support
        </Button>
      </Container>


    <Footer/>
    </>
  )
}

export default Home