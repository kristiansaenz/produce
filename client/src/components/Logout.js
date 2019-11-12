import React, { Component, Fragment } from 'react';
import { logout } from '../actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Logout extends Component {

  render() {
    return(
      <Fragment>
        <button onClick={this.props.logout}>Logout</button>
      </Fragment>
    )
  }
}

export default connect(null, { logout })(Logout)