import React from 'react'
import './Footer.css'

function Footer({user}) {
    let date=new Date()
  return (
    <div className="footer-sec">
        <div className="top-footer">
            <div className="top-left-footer">
            <h2 >Ale<span className='x-letter'>X</span></h2>
                <p>I am a frontend developer from California, USA with 10 years of <br/>experience in companies like Microsoft, Tesla and Apple.</p>
            </div>
            <div className="top-right-footer">
                <span className='footer-email-input-box'>
                    <img src={user} className='icon' />
                    <input type="email" placeholder='Enter your email' className='footer-email'/>
                </span>
                <button className='subscribe-btn'>Subscribe</button>
            </div>
        </div>
        <div className="horizontal-line-box">
            <div className="horizontal-line"></div>
        </div>
        <div className="bottom-footer">
            <span style={{color:'white',fontFamily:'arial'}}>&copy; {date.getFullYear()} Alex Bennett.All right reserved.</span>
            <ul className='list-items'>
                <li style={{color:'white'}}>Terms of policies</li>
                <li style={{color:'white'}}>Privacy Policy</li>
                <li style={{color:'white'}}>Connect with me</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer