import React, { Component, Fragment } from 'react';
import { logout } from '../actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withRouter } from "react-router";

class Logout extends Component {

  handleLogout = () => {
    this.props.logout()
  }

  render() {
    return(
      <Fragment>
        <button onClick={this.handleLogout}>Logout</button>
      </Fragment>
    )
  }
}

export default connect(null, { logout })(Logout)