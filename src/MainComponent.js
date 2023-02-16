import React from 'react'
import Filters from './Filters'
import ProductList from './ProductList'

export default function MainComponent() {
  return (
    <div className='mainwrapper'>
       <div className="sidefilters">
         <Filters/>
       </div>
       <div className="productside-column">
          {/* <div className="product-top-filters">
            <p>Relevance filters and pagination will show here.</p>
          </div> */}
          <div className="productsSection">
            <ProductList/>
          </div>
       </div>
    </div>
  )
}
