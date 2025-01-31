import React from 'react'
import './Hero.css'
function Hero({profile}) {
  return (
    <div id='hero' className="hero-section">
      <div className="image">
        <img src={profile} className='profile_image' />
      </div>
      <div className="headings">
        <h2 className='fist-heading'><span className='name'>I'm Alex Bennet,</span> frontend <br /> developer based in <span className='country-name'>USA</span>.</h2>
      </div>
      <div className="description">
        <p className='desc-para'>I am a frontend developer from California, USA with 10 years of experience in multiple<br /></p>
        <p className='desc-para desc-2'>companies like Microsoft, Tesla and Apple.</p>
      </div>
      <div className="buttons">
        <button className='contact-btn contact-me2'>Contact me</button>
        <button className='my-resume'>My resume</button>
      </div>
    </div>
  )
}

export default Hero