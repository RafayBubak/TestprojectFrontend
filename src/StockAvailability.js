import React from 'react'
import Checkboxcomponent from './Checkboxcomponent'

export default function StockAvailability() {
  return (
    <div className='Pmain-div'>
    <p>Stock Availability</p>
    <div className='proSearch'>
            <input type="text" placeholder='Product Certificatons...'></input>
         </div>
    <Checkboxcomponent valuarray={["USA","India","Palau"]}/>   
</div>
  )
}
