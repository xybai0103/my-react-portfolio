import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'Name') {
      setName(inputValue);
    } else if (inputType === 'Email') {
      setEmail(inputValue);
    } else if (inputType === 'Message') {
      setMessage(inputValue);
    }
  };

  const validateField = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputValue === '') {
      setErrorMessage(`${inputType} is required.`);
      //prevent the form to be submitted
      return false;
    }

    if (!validateEmail(email)) {
      setErrorMessage(`Your email is invalid.`);
      return false;  
    }
    //allow the form to be submitted
    return true;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className='col-sm-12 col-md-6 col-lg-4'>
      <h1 className='fs-4'>Contact</h1>
      <form className='form-group'>
        <label>Name:</label>
        <input
            onChange={handleInputChange}
            value={name}
            name="Name"
            type="text"
            className="form-control mb-3"
            id="name"
            required
            onBlur={validateField}
        />
        <label>Email address:</label>
        <input
            onChange={handleInputChange}
            value={email}
            name="Email"
            type="email"
            className="form-control mb-3"
            id="email"
            required
            onBlur={validateField}
        />
        <label>Message:</label>
        <input
            onChange={handleInputChange}
            value={message}
            name="Message"
            type="text"
            className="form-control mb-3"
            id="message"
            required
            onBlur={validateField}
        />
        {errorMessage &&  (
            <p className='error-text'>{errorMessage}</p>
        )}
        <button
            onClick={handleFormSubmit}
            className='btn bg-black text-white mt-2'
            type='submit'
        >
            Submit
        </button>
      </form>
    </div>
  );
};