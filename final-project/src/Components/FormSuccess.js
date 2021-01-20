import React from 'react';
import './../App.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Your Order Has Been Placed!</h1>
      <img className='form-img-2' src='/making.jpg' alt='success-image' />
    </div>
  );
};

export default FormSuccess;