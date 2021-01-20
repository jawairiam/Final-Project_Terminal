import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className='prodduct'>
      <img className="small" src={product.image} alt={product.name} />
      <h3 className='okfine'>{product.name}</h3>
      <div className='notok'>${product.price}</div>
      <div  className='productcart'>
        <button onClick={() => onAdd(product)} className='kikran'>Add To Cart</button>
      </div>
    </div>
  );
}