import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar({homeimg}) {
  return (
    <div id='navbar' className="navbar" style={{flexWrap:'wrap'}}>
        <div className="nav-start">
            <h2 >Ale<span className='x-letter'>X</span></h2>
        </div>
        <div className="nav-middle">
            <ul className='list-items'>
                <li className='list-btn home'>
                    <AnchorLink className='anchor-link' offset={50}>Home</AnchorLink>
                    <img src={homeimg} />
                </li>
                <li className='list-btn'>
                  <AnchorLink className='anchor-link' offset={0} href='#about'>About</AnchorLink> 
                </li>
                <li className='list-btn'>
                 <AnchorLink className='anchor-link' offset={50} href='#services'>Services</AnchorLink>  
                </li>
                <li className='list-btn'>
                <AnchorLink className='anchor-link' offset={20} href='#portfolio'>Portfolio</AnchorLink>
                </li>
                <li className='list-btn'>
                <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink>
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