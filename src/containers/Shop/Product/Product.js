import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <div className='Product'>
      <div className='Product-Image'>
        <img src={props.image} alt={props.product} />
      </div>
      <div className='Product-desc'>
        <h4>{props.product}</h4>
        <p className='Product-Price'>{props.price}</p>
      </div>
    </div>
  );
};

export default Product;
