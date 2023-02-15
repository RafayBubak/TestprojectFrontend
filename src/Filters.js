import React from 'react'
// import { GoSearch } from "react-icons/go";
// import Categories from './Categories'
import PriceComponent from './PriceComponent'
import MOQcomponent from './MOQcomponent'
import ProdCertification from './ProdCertification'

export default function Filters() {
  return (
    <div className='main-div'>
        <div className='CatSearch'>
            <input type="text" placeholder='More Categories'></input>
            {/* <i className='searchicon'> <GoSearch/> </i> */}
            <div className='Categories'>
            
            </div>
            <PriceComponent/>
            <MOQcomponent/>
            <ProdCertification/>
            
        </div>
        
    </div>
  )
}
