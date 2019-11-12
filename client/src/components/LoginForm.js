import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  // updateEmail(value) {
  //     this.setState({
  //         email: event.target.value
  //     })
  // }

  // updatePassword(value) {
  //     this.setState({
  //         password: event.target.value
  //     })
  // }

  render() {
    return (
      <div className="login-form">
        <form>
            
          {/* Email field */}
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                placeholder="e.g Demelza Carne"
                // onChange={(event) => {this.updateEmail(event.target.value)}}
                value={this.state.email}
              />
            </div>
          </div>

          {/* Password field */}
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input is-success"
                type="text"
                placeholder="e.g judas"
                // onChange={(event) => {this.updatePassword(event.target.value)}}
                value={this.state.password}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <a className="button is-success">Submit</a>
            </p>
            <p className="control">
              <Link to="/signup">
                <button className="button is-light">Sign Up</button>
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
