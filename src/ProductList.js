import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UseFetchData from './UseFetchData';

export default function ProductList({products}) {

  if(! products) return <div>Loading</div>

  return (
    <div>
      <div className="products-con">
        {products.map(product => (
          <div className="product-items" key={product.id}>
            <div className="img-con">
              <img src={product.productImage} alt={product.name} />
            </div>
            <div className="product-details">
              <p>{product.title}</p>
              <p>MOQ: {product.MOQ}</p>
              <p>Price: ${product.price}/BOX</p>
              <button className="img-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
