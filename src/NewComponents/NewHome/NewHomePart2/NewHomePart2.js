import React, {useState,useEffect} from 'react'
import './NewHomePart2.css'
// import profileCard from '../../Trade Photos/UI-Element.-04.png'
import cards  from '../../Trade Photos/Cards.png'
import easyMobile from '../../Trade Photos/Mobile-App01-760x1536.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import NewHomePart3 from '../NewHomePart3/NewHomePart3'

const NewHomePart2 = () => {
    const [afterElementVisible, setAfterElementVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const afterElement = document.querySelector('.third-scroll-container');
          if (afterElement && !afterElementVisible) {
            const afterElementPosition = afterElement.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (afterElementPosition < windowHeight * 0.5) { 
              setAfterElementVisible(true);
              window.removeEventListener('scroll', handleScroll); 
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [afterElementVisible]);

  return (
   <>
  <div className='third-scroll-container w-75 m-auto'>
  <h1>We strive to offer an <br/> unparalled experience</h1>
    <div>"Empowering traders with cutting-edge technology for seamless and efficient trading experiences."</div>


    <div>
        <div className='instrument-main-container'>
            <div className='instrument-card'>
            <h4>More than 500+ <br/>Instruments</h4>
            <div style={{paddingTop:'10px'}}>Indice Training guide to help you better</div>
            <div style={{display:'flex'}}>
           
                    {/* <div className='profile-card-container'>
                <img src={profileCard} alt='network-error'  className={`profile-card ${afterElementVisible ? 'fade-in-out' : ''}`}/>
            </div> */}

            <div style={{display:'flex', justifyContent:'space-between' ,paddingTop:'50px', paddingLeft:'60px', width:'60vw'}}>   
                <div>
                <div style={{fontSize:'30px'}}>Accepting all masters <br/>card  and currency</div>
                <div style={{width:'25vw', paddingTop:'10px'}}>"Accepting all major credit cards and currencies for hassle-free transactions on our platform."</div>   
                <div style={{paddingTop:'10px', fontSize:'50px'}}>  Rs 4999 </div>
                <div> Traded Volume</div>
                </div>
                <div >
                    <img src={cards} alt='network-error' className={`atm-cards ${afterElementVisible ? 'rotate-bottom-to-right' : ''}`}/>
                </div>

            </div>
            </div>
        </div>
    </div>
  </div>
</div>



<div className='fourth-scroll-container'>
    <div>
        <h1 style={{textAlign:'center'}}>A clean and easy to use experience <br/>with trade Journal</h1>
        <div style={{textAlign:'center'}}>
"Experience a clean and intuitive trading journey with our Trade Journal feature."</div>
    </div>

<div style={{display:'grid', gridTemplateColumns:'auto auto auto auto auto' ,paddingTop:'100px'}}>
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'43vh', paddingTop:'30px'}}>
        <div><FontAwesomeIcon icon={faCircle} /></div>
        <div><FontAwesomeIcon icon={faCircle} /></div>
        <div><FontAwesomeIcon icon={faCircle} /></div>
    </div>

    <div>
    <div className='easy-heading ehbs'>See Analytics</div>
    <div className='easy-heading-body ehbs'>Analyze market trends, performance metrics, and historical data to make informed trading decisions.</div>
    <div>
        <div className='easy-heading ehbs'>Traded Statements</div>
        <div className='easy-heading-body ehbs'>Access comprehensive trade statements detailing your transaction history and portfolio performance.</div>
    </div>
    <div>
        <div className='easy-heading ehbs'>Secured with 2FA</div>
        <div className='easy-heading-body ehbs'>Protect your account with an added layer of security through Two-Factor Authentication (2FA) for peace of mind while trading.</div>
    </div>
</div>


    <div>
        <img src={easyMobile} alt='network-error' className={`easy-mobile ${afterElementVisible ? 'fade-in-out1' : ''}`}/>
    </div>

    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'43vh', paddingTop:'30px'}}>
        <div><FontAwesomeIcon icon={faCircle} /></div>
        <div><FontAwesomeIcon icon={faCircle} /></div>
        <div><FontAwesomeIcon icon={faCircle} /></div>
    </div>

    <div>
    <div className='easy-heading'>Developer's API</div>
    <div className='easy-heading-body'>Integrate our powerful Developer's API to build custom trading solutions and automate your trading strategies.</div>
    <div>
        <div className='easy-heading'>Easily Manageable Account</div>
        <div className='easy-heading-body'>Effortlessly manage your trading account, monitor balances, and track transactions with our user-friendly interface.</div>
    </div>
    <div>
        <div className='easy-heading'>Verify & Start Transaction</div>
        <div className='easy-heading-body'>Quickly verify your identity and initiate secure transactions with confidence using our streamlined verification process.</div>
    </div>
</div>

</div>
</div>


<div className='fifth-scroll-container'>

    <div style={{paddingLeft:'20px'}}>
        
    <h1>A pricing offer for fast trading <br/>solution</h1>
<p>Unlock exclusive pricing plans designed to optimize your trading experience. Benefit from our fast and efficient trading solutions tailored to your needs.</p>

    </div>

</div>


<NewHomePart3/>

  </>
  )
}

export default NewHomePart2
