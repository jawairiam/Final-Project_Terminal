import React from 'react';
import { Link} from 'react-router-dom'

export default function Header(props) {
  return (
    <header className='block row center foru'>
      <div className='foru'>
        <a href="#/cart">
          <h1 className='forme'>Cart</h1>
          <Link to='/mainpage' className='forthem'>Go Back</Link>
          
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </header>
  );
}