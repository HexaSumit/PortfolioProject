import React from 'react'
import { useState } from 'react'

function ServicesSquareBox({arrowicon,sno,services,text}) {


  return (
    <div className="square-box-father">
        <div className='square-box'>
            <p className='serial-num'>{sno}</p>
            <p className='my-services'>{services}</p>
            <p className='squarebox-para'>Web developement is the process of<br />building,programming...</p>
            <p className='read-more'>
                    {text}
                <img src={arrowicon} className='arrow-img' />
            </p>
        </div>
    </div>
  )
}

export default ServicesSquareBox