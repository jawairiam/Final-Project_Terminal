import React from 'react'
import { Link} from 'react-router-dom'

export default class Form extends React.Component {
    render(){
    return (
       
        <div className='about' id='four'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6' p-25>
                        <div className='extra'>
                    <h3>Quick Delivery </h3>
                <h1>ORDER A<br /> PIZZA NOW</h1>
                <p>Investigationes demonstraverunt lectores legere me lius
                quod ii legunt saepius. Claritas est etiam processus. Investigationes demonstraverunt lectores legere me lius
                quod ii legunt saepius. Claritas est etiam processus.
                </p>
                </div>

                <div className='banner__btn'>
                        <Link to='/shopp' className='btn btn-smart'>
                            DELIVER NOW
                        </Link>

                    </div>
                    </div>
                    <div className='col-6'>
                        <div className='about__img3'>
                            <img src='/tray.jpg' alt='Pizza' />

                        </div>

                    </div>

                    </div>
            </div>
        </div>

    )
}
}