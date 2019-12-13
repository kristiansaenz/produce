import React, { Component, Fragment } from "react";
import { logout } from "../actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import LogoutImage from "../images/logout.svg";

class Logout extends Component {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <a class="navbar-item" onClick={this.handleLogout}>
        Sign Out
      </a>
    );
  }
}

export default connect(null, { logout })(Logout);
