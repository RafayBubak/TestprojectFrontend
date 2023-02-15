import React from 'react'

export default function PriceComponent() {
  return (
    <div className='m-container'>
        <p>Price</p>
        <div className='divs-container'>
            <div className='firstinput'>
                <input type="text" placeholder='From'></input> 
                {/* <span className='signspan'>$</span> */}
            </div>
            <span>_</span>
            <div className='firstinput'>
                <input type="text" placeholder='To'></input> 
                {/* <span className='signspan'>$</span> */}
            </div>
        </div>    
    </div>
  )
}
