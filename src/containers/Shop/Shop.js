import React from "react";
import "./Shop.css";
import Product from "./Product/Product";

const Shop = () => {
  return (
    <div className='container'>
      <h2>All Products</h2>
      <div className='Shop'>
        <Product image='assets/prod1.jpg' product='Sun glasses' price='33.3' />
        <Product image='assets/prod2.png' product='Sun glasses' price='33.3' />
        <Product image='assets/prod3.png' product='Sun glasses' price='33.3' />
        <Product image='assets/prod3.png' product='Sun glasses' price='33.3' />
        <Product image='assets/prod2.png' product='Sun glasses' price='33.3' />
        <Product image='assets/prod2.png' product='Sun glasses' price='33.3' />
        <Product image='assets/prod1.jpg' product='Sun glasses' price='33.3' />
        <Product image='assets/prod1.jpg' product='Sun glasses' price='33.3' />
        <Product image='assets/prod2.png' product='Sun glasses' price='33.3' />
        <Product image='assets/prod1.jpg' product='Sun glasses' price='33.3' />
      </div>
    </div>
  );
};

export default Shop;
