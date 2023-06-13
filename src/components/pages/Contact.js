import React from 'react';

export default function Contact(props) {
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <div className='form-group'>
            <label>Name:</label>
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="name"
              type="text"
              className="form-control"
              id="name"
            />
            <label>Email address:</label>
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="email"
              type="text"
              className="form-control"
              id="email"
            />
            <label>Message:</label>
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="message"
              type="text"
              className="form-control"
              id="message"
            />
            <br />
            <button
              onClick={props.handleFormSubmit}
              className='btn btn-primary'
              type='submit'
            >
                Submit
            </button>
        </div>
      </form>
    </div>
  );
}

//Your email is invalid
//Message is required