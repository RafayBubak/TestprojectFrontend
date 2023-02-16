import React from 'react'
// import useFetchData from './UseFetchData';

export default function ProductList() {
    // const [products] = useFetchData('http://localhost:4000/products/?category=ppe');
    // console.log(products);
    return (
        <div>
            <p>Products will appear here</p>
            <div className="products-con">
                
                <div className="product-items">
                        <div className="img-con">
                           <img src='https://tbh-production.s3-ap-southeast-1.amazonaws.com/BulkUploadedImages/GlobalSource_26Aug20/B1176861058.jpg' alt="" />
                        </div>  
                        <div className='product-details'>
                            <p>Face Mask</p>
                            <p>MOQ: 5</p>
                            <p>Price: $10.00/BOX </p>
                            <button className='img-btn'>Add to Cart</button>
                        </div>
                </div>               
            </div>
        </div>
      );
}
