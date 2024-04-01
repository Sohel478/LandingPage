import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from '../Components/Home/Home'
import NewHome from '../NewComponents/NewHome/NewHome'
import SignIn from '../Components/Auth/Login/Login'
import Signup from '../Components/Auth/Signup/Signup'
import ForgotPasswordForm from '../Components/Auth/ForgotPassword/ForgotPassword'
import ResetPassword from '../Components/Auth/ResetPassword/ResetPassword'
import PricingPage from '../Components/Pricing/Pricing'
import Terms from '../Components/Privacy Page/Terms'
import ContactUs from '../Components/ContactUs/ContactUs'

const Routers = () => {
  return (
    <>
     <BrowserRouter>
    <Routes>
    <Route path='/' element={ <NewHome/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/forgot-password' element={<ForgotPasswordForm/>}/>
    <Route path='/reset-password' element={<ResetPassword/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/terms' element={<Terms/>}/>
    <Route path='/ContactUs' element={<ContactUs/>}/>
   
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default Routers
