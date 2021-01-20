import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block nineee" id='main'>
      <h2 id='ten' >Our Menu</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}