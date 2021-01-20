import React from 'react';
import Formmm from './Formmm'
import { Link} from 'react-router-dom'

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 30 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  
   
  return (
    <div className='nineee'>
    <aside className="block_cart col-9 sixxx">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-8">{item.name}</div>
            <div className="col-8">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-8 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-8">Items Price</div>
              <div className="col-9 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-8">Tax Price</div>
              <div className="col-9 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-8">Shipping Price</div>
              <div className="col-9 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <strong>Total Price</strong>
              </div>
              <div className="col-9 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button className='checkout'>
                <Link to='/checkout'>Place Order</Link>
              </button>
            </div>
          </>
        )}
        
      </div>
    </aside>
    </div>
  );
}