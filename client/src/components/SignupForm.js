import React, { useState, useContext } from 'react'
import { UserValue } from '../components/User/UserContext'
import ImageUploader from './ImageUploader'
import axios from 'axios'


const SignupForm = () => {

  const [{ loggedIn, name }, dispatch] = UserValue();

  const [state, setState] = useState({
    email: '',
    password: '',
    name: ''
  })

  const handleChange = e => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("STATE: ", state)
    dispatch({ type: 'login', payload: state.name})
  }

  if(loggedIn) {
    return (
      <h1>Welcome, {name}</h1>
    );
  } else {

    return (
        <div class="login-form">
          <form>
            {/* Name field */}
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input className="input is-success"
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

            {/* Email field */}
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input className="input is-success"
                type="text"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
              </div>
            </div>

            {/* Password field */}
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input className="input is-success" 
                  type="text"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Confirm password field */}
            {/* <div class="field">
              <label class="label">Confirm Password</label>
              <div class="control">
                <input
                  type="text"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                />
              </div>
            </div> */}

            {/* Upload photo */}
            <ImageUploader />


            {/* Buttons */}
            <div class="control">
              <div class="button-area">
                <button class="button is-success" onClick={(e) => handleSubmit(e)}>Submit</button>
              </div>
            </div>

          </form>
        </div>
    );
  }
}
  

export default SignupForm