import React from 'react'

export default function Checkboxcomponent ({valuarray}) {
  return (
    <div className='chkbox-main-div'>
    <div className='chkbox-wrap'>
      <div className='chkbox-items'>
        <input type="checkbox" value="BV"></input>
        <span className='chkbox-title'>{valuarray[0]}</span>
      </div>
      <div className='chkbox-items'>
        <input type="checkbox" value="Intertek"></input>
        <span className='chkbox-title'>{valuarray[1]}</span>
      </div>
      <div className='chkbox-items'>
        <input type="checkbox" value="ISO13485"></input>
        <span className='chkbox-title'>{valuarray[2]}</span>
      </div>
      {/* <div className='chkbox-items'>
        <input type="checkbox" value="Intertek"></input>
        <span className='chkbox-title'>{valuarray[3]}</span>
      </div>
      <div className='chkbox-items'>
        <input type="checkbox" value="Intertek"></input>
        <span className='chkbox-title'>{valuarray[4]}</span>
      </div> */}
    </div>
 </div>
  )
}
