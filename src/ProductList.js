// import React from 'react'
// import useFetchData from './UseFetchData';
// // import useFetch from './UseFetch';

// export default function ProductList() {
//     const products = useFetchData('http://localhost:4000/products/');
//     console.log("after fetch request",products);
//     return (
//         <div>
//             <p>Products will appear here</p>
//             <div className="products-con">
                
//                 <div className="product-items">
//                         <div className="img-con">
//                            <img src='https://tbh-production.s3-ap-southeast-1.amazonaws.com/BulkUploadedImages/GlobalSource_26Aug20/B1176861058.jpg' alt="" />
//                         </div>  
//                         <div className='product-details'>
//                             <p>Face Mask</p>
//                             <p>MOQ: 5</p>
//                             <p>Price: $10.00/BOX </p>
//                             <button className='img-btn'>Add to Cart</button>
//                         </div>
//                 </div>               
//             </div>
//         </div>
//       );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductList() {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:4000/products/');
        setProducts(response.data.Productlist);
        console.log(response.data.Productlist);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error loading products: {error}</p>;
  }

  const productList = Array.isArray(products) ? products : Object.values(products);

  return (
    <div>
      <div className="products-con">
        {productList.map(product => (
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
