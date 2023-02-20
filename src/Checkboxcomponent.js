// import React from 'react'

// export default function Checkboxcomponent ({valuarray}) {
//   return (
//     <div className='chkbox-main-div'>
//     <div className='chkbox-wrap'>
//       <div className='chkbox-items'>
//         <input type="checkbox" value="BV"></input>
//         <span className='chkbox-title'>{valuarray[0]}</span>
//       </div>
//       {/* <div className='chkbox-items'>
//         <input type="checkbox" value="Intertek"></input>
//         <span className='chkbox-title'>{valuarray[1]}</span>
//       </div>
//       <div className='chkbox-items'>
//         <input type="checkbox" value="ISO13485"></input>
//         <span className='chkbox-title'>{valuarray[2]}</span>
//       </div> */}
//       {/* <div className='chkbox-items'>
//         <input type="checkbox" value="Intertek"></input>
//         <span className='chkbox-title'>{valuarray[3]}</span>
//       </div>
//       <div className='chkbox-items'>
//         <input type="checkbox" value="Intertek"></input>
//         <span className='chkbox-title'>{valuarray[4]}</span>
//       </div> */}
//     </div>
//  </div>
//   )
// }

import React from 'react'

export default function CheckboxComponent({ valuarray, setIsDuns, filters }) {
  const changeHandle =(event)=>{
    const newFilter = filters?.map((item)=>{
      if(item?.supplier_certification[0]?.title==event.target.value){
        return {...item, isChecked: !item.isChecked}
      }
      return item;
    })
    setIsDuns(newFilter);
  }
  return (
    <div className='chkbox-main-div'>
      <div className='chkbox-wrap'>
        {filters?.map((value, index) => {
          console.log(value, 'map value checkbox', )
          return (<div className='chkbox-items' key={index}>
            <input type='checkbox' value={value?.supplier_certification[0]?.title} onChange={(event)=>changeHandle(event)}/>
            <span className='chkbox-title'>{value?.supplier_certification[0]?.title}</span>
          </div>)
})}
      </div>
    </div>
  )
}
