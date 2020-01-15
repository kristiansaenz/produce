import React, { useState } from 'react';
import { connect } from 'react-redux';
import ImageUploader from './ImageUploader';
import axios from 'axios';
import { Redirect, Route } from 'react-router-dom';
import { register } from '../actions/authActions';

const SignupForm = props => {
  const [state, setState] = useState({
    email: '',
    password: '',
    name: ''
  });

  const isEnabled =
    state.email.length > 0 &&
    state.password.length > 0 &&
    state.name.length > 0;

  const handleChange = e => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!isEnabled) {
      alert('Please enter all fields');
    } else {
      const { name, email, password } = state;

      const newUser = {
        name,
        email,
        password
      };

      props.register(newUser);
    }
  };

  if (props.isAuthenticated) {
    return <Redirect to='/market' />;
  } else {
    return (
      <div class='login-form'>
        <form>
          {/* Name field */}
          <div class='field'>
            <label class='label'>Name</label>
            <div class='control'>
              <input
                className='input is-success'
                type='text'
                name='name'
                value={state.name}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email field */}
          <div class='field'>
            <label class='label'>Email</label>
            <div class='control'>
              <input
                className='input is-success'
                type='email'
                name='email'
                value={state.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password field */}
          <div class='field'>
            <label class='label'>Password</label>
            <div class='control'>
              <input
                className='input is-success'
                type='password'
                name='password'
                value={state.password}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Upload photo */}
          {/* <ImageUploader /> */}

          {/* Buttons */}
          <div class='control'>
            <div class='button-area'>
              <button
                disabled={!isEnabled}
                class='button is-success'
                onClick={e => handleSubmit(e)}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { register })(SignupForm);
