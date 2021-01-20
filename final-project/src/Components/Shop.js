import React from 'react'
import { Link} from 'react-router-dom'

export const Shop = (Submit) => {

    
    return (
        <div className='shop' id='two'>
            <div className='container'>
                <div className='shop__text'>
                    <div>
                        <h1>
                        Free Delivery With <br />
                        PIZZA OF THE DAY<br />
                        Only 8.99 USD
                        </h1>
                        <button  className='shop__btn'>
                        <Link to='/shopp'>Shop Now</Link>
                        </button>
                    </div>     
                </div>
            </div>
        </div>
    )
};
export default Shop;