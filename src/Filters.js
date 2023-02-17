import React from 'react'
// import { GoSearch } from "react-icons/go";
// import Categories from './Categories'
import PriceComponent from './PriceComponent'
import MOQcomponent from './MOQcomponent'
import ProdCertification from './ProdCertification'
import SupplierCertification from './SupplierCertification'
import ManufacturerLocation from './ManufacturerLocation'
import StockAvailability from './StockAvailability'
import CategorySearch from './CategorySearch'

export default function Filters() {
  return (
    <div className='main-div'>
        <div className='CatSearch'>
            {/* <input type="text" placeholder='More Categories'></input> */}
            {/* <div className='Categories'> </div> */}
            
            {/* <Categories categories={[{name:"PPE"},{name:"Face Mask"},{name:"Gloves"}]} /> */}
            <CategorySearch/>
            <PriceComponent/>
            <MOQcomponent/>
            <ProdCertification />
            <SupplierCertification/>
            <ManufacturerLocation/>
            <StockAvailability/>
            
           </div>
        
    </div>
  )
}
