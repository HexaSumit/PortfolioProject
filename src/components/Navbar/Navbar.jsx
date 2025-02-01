import React from 'react'
import './Navbar.css'

import img from '../../assets/about_profile.svg'

function Navbar({homeimg}) {
  return (
    <div id='navbar' className="navbar" style={{flexWrap:'wrap'}}>
        <div className="nav-start">
            <h2 >Ale<span className='x-letter'>X</span></h2>
        </div>
        <div className="nav-middle">
            <ul className='list-items'>
                <li className='list-btn home'>
                    <a className='anchor-link' >Home</a>
                    <img src={homeimg} />
                </li>
                <li className='list-btn'>
                  <a className='anchor-link' href='#about'>About</a> 
                </li>
                <li className='list-btn'>
                 <a className='anchor-link' href='#services'>Services</a>  
                </li>
                <li className='list-btn'>
                <a className='anchor-link' href='#portfolio'>Portfolio</a>
                </li>
                <li className='list-btn'>
                <a className='anchor-link' href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
        <div className="nav-end">
            <button className='contact-btn'>Contact Me</button>
        </div>
    </div>
  )
}

export default Navbar