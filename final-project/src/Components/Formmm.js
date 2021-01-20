import React, { useState } from 'react';
import './../App.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { Link} from 'react-router-dom'

const Formmm = (handleLogOut) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className='twelve'>
        <section className='hero'>
             <nav>
                 <Link to='/mainpage'>Go Back</Link>
                 
             </nav>
             
        </section>
          <div className='form-container'>
            <span className='close-btn'>×</span>
          <div className='form-content-left'>
          <img className='form-img' src='/okkkk.jpeg' alt='spaceship' />
          </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </div>
  );
};

export default Formmm;