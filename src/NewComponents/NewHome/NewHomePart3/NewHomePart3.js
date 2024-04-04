import React from 'react'
import './NewHomePart3.css'
import StartRating from '../StarRating/StartRating'
import blogImage from '../../Trade Photos/blogImage05-1024x768.jpg'
import BlankProfile from '../../Trade Photos/blank-profile-picture-973460_640.webp'
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
<p>Discover what our clients have to say about their trading experience. From insightful feedback to ratings, see why traders trust us for their financial journey.</p>

        </div>
        </div>

        <div>
            <img src={blogImage} alt='network-error' className='blog-image'/>
        </div>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', width:'70vw', marginTop:'-90px'}}>
    <div className='rating-card'>
        <StartRating/>
        <div style={{paddingLeft:'10px'}}>Impressive platform! Great features and services loved it !</div>
        <div style={{display:'flex', paddingTop:'10px', paddingBottom:'10px'}}>
            <img src={BlankProfile} alt='network-error' className='happy-business'/>
            <div style={{paddingLeft:'10px', paddingTop:'5px'}}>
                <div>Prince K</div>
                <div>Experienced Trader</div>
            </div>
        </div>
    </div>

    <div className='rating-card'>
        <StartRating/>
        <div style={{paddingLeft:'10px'}}>Great experience overall! If you are trading must use this type of platofrm to journal.</div>
        <div style={{display:'flex', paddingTop:'10px',paddingBottom:'10px'}}>
            <img src={BlankProfile} alt='network-error' className='happy-business'/>
            <div style={{paddingLeft:'10px', paddingTop:'5px'}}>
                <div>Darshan R</div>
                <div>User</div>
            </div>
        </div>
    </div>
</div>


        </div> 
<ContactUs/>
    </>
  )
}

export default NewHomePart3