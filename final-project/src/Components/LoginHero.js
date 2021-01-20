import React from 'react'
import AppsProf from '../AppsProf'

export const LoginHero = (props) => {
    const {handleLogOut} =props;
    
    return (
        <div>
        <section className='hero'>
             <nav>
                 <h2>Welcome</h2>
                 <button onClick={handleLogOut}>Logout</button>
                 
             </nav>
             
        </section>
        
            <AppsProf />
        </div>
    )
}
export default LoginHero;