import {createBrowserRouter, RouterProvider } from 'react-router-dom'

import themeimg from './assets/theme_pattern.svg'
import profileimg from './assets/profile_img.svg'
import aboutimg from './assets/about_profile.svg'
import arrowicon from './assets/arrow_icon.svg'
import photo1 from './assets/project_1.svg'
import photo2 from './assets/project_2.svg'
import photo3 from './assets/project_3.svg'
import photo4 from './assets/project_4.svg'
import photo5 from './assets/project_5.svg'
import photo6 from './assets/project_6.svg'

import  callicon from './assets/call_icon.svg'
import  mailicon from './assets/mail_icon.svg'
import  locicon from './assets/location_icon.svg'
import usericon from './assets/user_icon.svg'
import './App.css'

import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {

  return (
    <>
    <div className="main-container">

      <Navbar homeimg={themeimg}/>
      <Hero profile={profileimg}/>
      <About aboutimg={aboutimg}/>
      <Services arrowicon={arrowicon}/>
      <Portfolio arrowicon={arrowicon} photo1={photo1} photo2={photo2} photo3={photo3} photo4={photo4} photo5={photo5} photo6={photo6}/>
      <Contact mail={mailicon} call={callicon} location={locicon}/>
      <Footer user={usericon}/>  
    </div>
    </>
  )
}

export default App
