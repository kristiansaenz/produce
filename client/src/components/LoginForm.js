import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom"
import { connect } from 'react-redux'
import { login } from '../actions/authActions'
import { LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/types';


class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    errorMsg: null
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props
    if(error !== prevProps.error) {
      // check for login error
      if(error.id === 'LOGIN_FAIL') {
        this.setState({ errorMsg: error.msg.msg })
      } else {
        this.setState({ errorMsg: null })
      }
    }
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state
    const user = {
      email,
      password
    }

    this.props.login(user)
  
  }

    render() {
      if(this.props.isAuthenticated) {
        return (<Redirect to="/market" />)
      } else {
      return(
        <div class="login-form">

          <form>
              
              {/* Email field */}
              <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                      <input 
                      class="input is-success" 
                      type="text" 
                      name="email"
                      placeholder="produce@gmail.com"
                      onChange={this.handleChange}
                      value={this.state.email} />
                  </div>
              </div>

              {/* Password field */}
              <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                      <input
                      class="input is-success"
                      type="text"
                      name="password"
                      placeholder="********"
                      onChange={this.handleChange}
                      value={this.state.password} />
                  </div>
              </div>

              {/* Buttons */}
              <div class="field is-grouped is-grouped-centered">
                  <p class="control">
                      <button class="button is-success" onClick={(e) => this.handleSubmit(e)}>Login</button>
                  </p>
                  <p class="control">
                      <Link to="/signup"><button class="button is-light">Sign Up</button></Link>
                  </p>
              </div>
          </form>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default connect(mapStateToProps, { login })(LoginForm)