import React from 'react'
import './Portfolio.css'

function Portfolio({ photo1, photo2, photo3, photo4, photo5, photo6,arrowicon }) {
    return (
        <div id='portfolio' className="portfolio">
            <h1 className='latest-work-heading'>My Latest Work</h1>
            <div className="image-container">
                <div className="image-box">
                    <img src={photo1} className='portfolio-img' />
                </div>
                <div className="image-box">
                    <img src={photo2} className='portfolio-img' />
                </div>
                <div className="image-box">
                    <img src={photo3} className='portfolio-img' />
                </div>
                <div className="image-box">
                    <img src={photo4} className='portfolio-img' />
                </div>
                <div className="image-box">
                    <img src={photo5} className='portfolio-img' />
                </div>
                <div className="image-box">
                    <img src={photo6} className='portfolio-img' />
                </div>
            </div>
            <div className="show-more-btn">
                <button className='show-btn'>Show More
                    <img src={arrowicon} style={{width:'20px',marginLeft:'5px'}} />
                </button>
            </div>
        </div>
    )
}

export default Portfolio




