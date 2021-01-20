import React from 'react'

export const PizzaTypes = () => {
    return (
        <div className='pizza'>
            <div className='container'>
                <div className='row'>
                <div className='col-5'>
                <div className='about__img1'>
                            <img src="/1.png" alt='Pizza' />
                        </div>
                </div>
                <div className='col-1'>
                    <div className='types__text'>
                <h2>Low Carb Pizza</h2>
                <p>Nullam nibh sem, imperdiet ultrices commodo a, 
                    vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.
                </p>
                </div>
                </div>
                <div className='col-2'>
                    <div className='types__text'>
                <h1>$34</h1>
                </div>
                </div>
                </div>
                
            </div>
        </div>
        
    )
}
export default PizzaTypes;