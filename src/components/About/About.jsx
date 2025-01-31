import React from 'react'
import './About.css'

function About({ aboutimg}) {
    return (
            <div  id ='about' className="starting-about-section">
                <div className="about-heading">
                    <h1 className='about-me-heading'>About me</h1>
                    {/* <img src={themeimg} className='about-theme' /> */}
                </div>
                <div className="about-section">
                    <div className="about-left-side">
                        <img src={aboutimg} alt="Profile_img" className='about-profile' />
                    </div>
                    <div className="about-right-side">
                        <p className='about-para'>I am a experienced Frontend Developer with over a decade of professional expertise in the field.</p>
                        <p className='about-para'>Throughout my career, I have had the privillege of collaborating with the prestigious organizations, contributing <br /> to their success and growth.</p>
                        <br />
                        <p className='about-para'>My passion for frontend developement is not only reflected in my extensive experience but also in the <br />enthusiasm and dedication I bring to each project.</p>

                        <div className="skills">
                            <p className='flex'>HTML & CSS <div className='gradient-line'></div></p>
                            <p className='flex'>REACT JS <div className='gradient-line'></div></p>
                            <p className='flex'>JAVASCRIPT <div className='gradient-line'></div></p>
                            <p className='flex'>NEXT JS <div className='gradient-line'></div></p>
                        </div>
                    </div>
                </div>
                <div className="lower-box">
                    <div className="exp-boxes">
                        <h2 className='exp'>10+</h2>
                        <span>YEARS OF EXPERIENCE</span>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="exp-boxes">
                        <h2 className='exp'>90+</h2>
                        <span>PROJECTS COMPLETED</span>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="exp-boxes">
                        <h2 className='exp'>15+</h2>
                        <span>HAPPY CLIENTS</span>
                    </div>
                </div>

            </div>
    )
}

export default About