import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './../App.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Fill out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your name'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Address</label>
          <input
            className='form-input'
            type='address'
            name='address'
            placeholder='Enter your Address'
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Mobile Number</label>
          <input
            className='form-input'
            type='no'
            name='no'
            placeholder='Mobile Number'
            value={values.no}
            onChange={handleChange}
          />
          {errors.no && <p>{errors.no}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default FormSignup;