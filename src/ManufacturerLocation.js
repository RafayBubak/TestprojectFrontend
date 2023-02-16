import React from 'react'
import Checkboxcomponent from './Checkboxcomponent'

export default function ManufacturerLocation() {
  return (
    <div className='Pmain-div'>
    <p>Manufacturer Location</p>
     <div className='proSearch'>
        <input type="text" placeholder='Country/Region'></input>
     </div>
     {/* <div className='chkbox-main-div'>
        <div className='chkbox-wrap'>
          <div className='chkbox-items'>
            <input type="checkbox" value="China"></input>
            <span className='chkbox-title'>China</span>
          </div>
          <div className='chkbox-items'>
            <input type="checkbox" value="Christmas Island"></input>
            <span className='chkbox-title'>Christmas Island</span>
          </div>
          <div className='chkbox-items'>
            <input type="checkbox" value="Czech Republic"></input>
            <span className='chkbox-title'>Czech Republic</span>
          </div>
          <div className='chkbox-items'>
            <input type="checkbox" value="India"></input>
            <span className='chkbox-title'>India</span>
          </div>
          <div className='chkbox-items'>
            <input type="checkbox" value="Northern Mariana Islands"></input>
            <span className='chkbox-title'>Northern Mariana Islands</span>
          </div>
          <div className='chkbox-items'>
            <input type="checkbox" value="Palau"></input>
            <span className='chkbox-title'>Palau</span>
          </div>
        </div>
     </div> */}
     <Checkboxcomponent valuarray={["China", "India", "Czech Republic"]}/>
    
</div>
  )
}
