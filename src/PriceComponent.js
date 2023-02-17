import React from 'react'

export default function PriceComponent() {
  return (
    <div className='m-container'>
        <p>Price</p>
        <div className='divs-container'>
            <div className='firstinput'>
                <input type="text" placeholder='From'></input>  
            </div>
            <span>_</span>
            <div className='firstinput'>
                <input type="text" placeholder='To'></input> 
            </div>
        </div>    
    </div>
  )
}
