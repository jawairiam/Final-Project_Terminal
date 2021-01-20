import React from 'react'
import { Navbar } from './Navbar'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='banner' id='five'>
            <Navbar />
            <div className='banner__content'>
                <div className='container'>
                    <div className='banner__text'>
                    <h3>Pizza Delivery</h3>
                    <h1>MAESTRO PIZZINI</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam venenatis est turpis.</p>
                    <div className='banner__btn'>
                        <Link to='/shopp' className='btn btn-smart'>
                            DELIVER NOW
                        </Link>

                    </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Header;
