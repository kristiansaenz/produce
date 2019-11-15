import React, { Component, Fragment } from 'react';
import { logout } from '../actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withRouter } from "react-router"
import LogoutImage from '../images/logout.svg'

class Logout extends Component {

  handleLogout = () => {
    this.props.logout()
  }

  render() {
    return(
      <div>
        <img class="logout-button" src={LogoutImage} onClick={this.handleLogout}></img>
        {/* <img src={LogoutImage}></img> */}
      </div>
    )
  }
}

export default connect(null, { logout })(Logout)