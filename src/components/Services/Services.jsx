import React from 'react'
import './Services.css'
import ServicesSquareBox from './ServicesSquareBox'

function Services({arrowicon}) {
  return (
    <div id='services' className="services-section">
        <h1 className='services-heading'>My Services</h1>
        <div className="services-handler">
            <ServicesSquareBox arrowicon={arrowicon} sno='01' services='Web Design' text='Read More'/>
            <ServicesSquareBox arrowicon={arrowicon} sno='02' services='Graphic Design' text='Read More'/>
            <ServicesSquareBox arrowicon={arrowicon} sno='03' services='Social Media' text='Read More'/>
            <ServicesSquareBox arrowicon={arrowicon} sno='04' services='App Design' text='Read More'/>
            <ServicesSquareBox arrowicon={arrowicon} sno='05' services='Digital Marketing' text='Read More'/>
            <ServicesSquareBox arrowicon={arrowicon} sno='06' services='Content Writing' text='Read More'/>
        </div>
    </div>
  )
}

export default Services