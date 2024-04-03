import React, {useState,useEffect} from 'react'
import './NewHome.css'
import NavCompo from '../Navbar/NavCompo'
import candleStick from '../Trade Photos/Candlesticks.png'
import halfMobile from '../Trade Photos/Half-Mobile-2.png'
import analyticsSymbol from '../Trade Photos/UI-Element.-01.png'
import analyticsSymbol1 from '../Trade Photos/construction.png'
import NewHomePart2 from './NewHomePart2/NewHomePart2'


const NewHome = () => {

  const [topElementVisible, setTopElementVisible] = useState(false);
  const [afterElementVisible, setAfterElementVisible] = useState(false);

  useEffect(() => {
    setTopElementVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const afterElement = document.querySelector('.intro-b');
      if (afterElement && !afterElementVisible) {
        const afterElementPosition = afterElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (afterElementPosition < windowHeight * 0.9) { 
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
   <NavCompo/>
    <div className='first-scroll-container'>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <div className={`intro ${topElementVisible ? 'slide-in' : ''}`}>
        supercharge your trading journey with Trade Journal 
      </div>

      <div style={{overflowX:'hidden'}}>
      <div className={`elementor-widget-container ${topElementVisible ? 'slide-right' : ''}`}>
     <div style={{display:'flex', justifyContent:'space-evenly'}}>
     <div>
        <div>USD 955</div>
        <div>NextMove</div>
        </div>

        <div>
        <div>USD 250.8</div>
        <div>U-Turn</div>
        </div>

        <div>
        <div>USD 59.80</div>
        <div>Sitemark</div>
        </div>
     </div>

      {/* candle Stick */}
     
        <div>
        <img src={candleStick} alt='network error' className='candle-stick'/>
          <div className='candle-stick-body'>
              <div>Advanced Technology</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus</div>
          </div>
        </div>
      </div>
      </div>
      </div>

        {/* Mobile section */}
        <div className='start-trade-button-container'>
          <button className={`start-trade-button ${topElementVisible ? 'slide-in' : ''}`}>Start Trade</button>
        </div>
        <div className={`mobile-image-container ${topElementVisible ? 'slide-up' : ''}`}>
          <img src={halfMobile} alt='network error' className='half-mobile'/>
      </div>
      <div className='hr-line'></div>
  </div>
  

    <div className='second-scroll-container'>
      <div className='achievement-container'>
        <div>
        <div>Stats that matter</div>
        <div style={{width:'14vw'}} className='achivement-subtitle'>Sed ut perspiciatis unde omnis iste natus err</div>
        </div>

       <div>
       <div>#1IT Broker</div>
        <div className='achivement-subtitle'>Company in India</div>
       </div>

       <div>
       <div>250+</div>
       <div className='achivement-subtitle'>Trading Platforms</div>
       </div>

        <div>
        <div>30K Users</div>
        <div className='achivement-subtitle'>Trading</div>
        </div>

        <div>
        <div>$45Million</div>
        <div className='achivement-subtitle'>Traded Volumn</div>
        </div>
      </div>

      <div className='second-scroll-container-b'>

      <div className='intro-b-container'>
      <div className={`intro-b ${afterElementVisible ? 'slide-in' : ''}`}>
        We do things differently at Reliable Technology Services
      </div>
      <div className={`intro-b-lorem ${afterElementVisible ? 'slide-right-lorem' : ''}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </div>
      </div>
    
    
     
   <div className='analytics-main-container'>
   <div className={`analytics-card-container ${afterElementVisible ? 'slide-in' : ''}`}>
     <div className='analytics-card'>
     <div >
     <div style={{fontSize:'70px'}}>99%</div>
      <div>Accuracy in Analytics</div>
     </div>
     <div>
     <div className='image-shadow'>&nbsp;</div>
        <img src={analyticsSymbol} alt='network error' className='analyticsSymbol'/>
     </div>
     </div>

    <div className='analytics-card-section-2'>
      <img src={analyticsSymbol1} alt='network-error' className='analyticsSymbol1'/>
      <div>
      <div>Trade from Option Chain</div>
      <div>Indice training guide.</div>
      </div>
    </div>
    <div style={{textAlign:'center', width:'25vw'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
    </div>




    <div className='analysis-container'>
    <div className={`analysis-container-p1 ${afterElementVisible ? 'slide-right-analysis' : ''}`}>
 <div style={{display:'flex', justifyContent:'space-between', width:'55vw'}}>
 <div>
      <div style={{display:'flex', marginLeft:'-12px'}}>
        <img src={analyticsSymbol1} alt='network-error' className='analysisSymbol'/>
        <div>
        <div>Trade from Chain</div>
        <div>Indice Training guide</div>
        </div>
      </div>
      <div style={{width:'25vw'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit tellu dineo dindsp od</div>
      <div className='analysis-line'></div>
    </div>

    <div>
    <div style={{display:'flex',marginLeft:'-12px'}}>
        <img src={analyticsSymbol1} alt='network-error' className='analysisSymbol'/>
        <div>
        <div>Iceberg Order</div>
        <div>Indice Training guide</div>
        </div>
      </div>
      <div style={{width:'25vw'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit tellu dineo dindsp od</div>
      <div className='analysis-line'></div>
    </div>
 </div>
   </div>


    <div className={`analysis-container-p2 ${afterElementVisible ? 'slide-bottom-analysis' : ''}`}>
    <div style={{display:'flex', justifyContent:'space-between', width:'55vw'}}>
    <div>
    <div style={{display:'flex',marginLeft:'-12px'}}>
        <img src={analyticsSymbol1} alt='network-error' className='analysisSymbol'/>
        <div>
        <div>Financial Analysis</div>
        <div>Indice Training guide</div>
        </div>
      </div>
      <div style={{width:'25vw'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit tellu dineo dindsp od</div>
      <div className='analysis-line'></div>
    </div>


    <div>
    <div style={{display:'flex',marginLeft:'-12px'}}>
        <img src={analyticsSymbol1} alt='network-error' className='analysisSymbol'/>
        <div>
        <div>Pledging of shares</div>
        <div>Indice Training guide</div>
        </div>
      </div>
      <div style={{width:'25vw'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit tellu dineo dindsp od</div>
      <div className='analysis-line'></div>
    </div>
    </div>
    </div>
    </div>
   </div>
  </div>
   </div>
   <NewHomePart2/>
   </>
  )
}

export default NewHome