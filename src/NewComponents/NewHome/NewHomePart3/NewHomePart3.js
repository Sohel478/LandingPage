import React from 'react'
import './NewHomePart3.css'
import StartRating from '../StarRating/StartRating'
import blogImage from '../../Trade Photos/blogImage05-1024x768.jpg'
import happyBusiness from '../../Trade Photos/happy-businessman-in-glasses-holding-clipboard-in-2022-11-02-02-39-05-utc-174.jpg'
import ContactUs from '../../ContactUs/ContactUs'

const NewHomePart3 = () => {
    
  return (
    <>  
       <div className='rating-container'>
        <div style={{display:'flex',justifyContent:'space-between', width:'100%'}}>
        <div>
        <h1>Read what they say <br/>about us</h1>

        <div>
            <div>Client's Words & Rating</div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                <br/>Lorem Ipsum has been the industry's standard dummy text ever since <br/>the 1500s.</p>
        </div>
        </div>

        <div>
            <img src={blogImage} alt='network-error' className='blog-image'/>
        </div>
          </div>
            <div style={{display:'flex', justifyContent:'space-between', width:'70vw', marginTop:'-90px'}}>
            <div className='rating-card'>
                    <StartRating/>
                    <div style={{paddingLeft:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>

                <div style={{display:'flex', paddingTop:'10px', paddingBottom:'10px'}}>
                    <img src={happyBusiness} alt='network-error' className='happy-business'/>
                    <div style={{paddingLeft:'10px', paddingTop:'5px'}}>
                        <div>John Doe</div>
                        <div>Designer</div>
                    </div>
                </div>

               </div>


               <div className='rating-card'>
                    <StartRating/>
                    <div style={{paddingLeft:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>

                <div style={{display:'flex', paddingTop:'10px',paddingBottom:'10px'}}>
                    <img src={happyBusiness} alt='network-error' className='happy-business'/>
                    <div style={{paddingLeft:'10px', paddingTop:'5px'}}>
                        <div>John Doe</div>
                        <div>Designer</div>
                    </div>
                </div>

               </div>

               <div>


               </div>
            </div>

        </div> 
<ContactUs/>
    </>
  )
}

export default NewHomePart3