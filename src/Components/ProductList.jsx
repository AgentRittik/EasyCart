import React, { useEffect, useState } from 'react';
import getProducts from '../API/getProduct';
function ProductCard({ product }) {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <div className="card product-card">
        <img src={product.image} className="card-img-top product-img" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">₹ {product.price}</p>
          <a href="#" className="btn btn-secondary">View Options</a>
        </div>
      </div>
    </div>
  );
}

const ProductList = () => {
  const [products,setProduct] = useState([]);
    useEffect(() => {
      const fetchDataAndSetState = async () => {
        try {
          const data = await getProducts();
          setProduct(data);
          console.log('data', data);
          console.log('hello', products); // This may not log the updated state immediately
        } catch (error) {
          console.error('Error in useEffect:', error);
        }
      };
      fetchDataAndSetState();
    }, []);

    useEffect(() => {
      console.log("on change", products);
    }, [products])
    
   
    
  return (
    <>
      <div class="container-fluid main">
      <div className='d-flex align-items-center justify-content-center pb-5'>
        <h1 className='display-1'>Products</h1>
      </div>
      <div className="container products-container">
      {products.reduce((rows, product, index) => {
        if (index % 4 === 0) {
          rows.push([]);
        }
        rows[rows.length - 1].push(product);
        return rows;
      }, []).map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ))}
    </div>
    </div>
    <div class="b-example-divider"></div>
    </>
    
    
  );
};

export default ProductList;
