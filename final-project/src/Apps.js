import React from 'react';
import './App.css';
import Top from  './Components/Top'
import Basket from  './Components/Basket'
import { useState } from 'react';
import Data from './Components/Data';
import Main from './Components/Main';

function Apps() {


  const { products } = Data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div id='shopp'>
      <Top countCartItems={cartItems.length}/>
      <Main products={products} onAdd={onAdd}></Main>
      <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
        
    </div>
  );
}

export default Apps;
