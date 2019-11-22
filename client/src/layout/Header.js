import React from "react";
import logo from "../images/logo.svg";
import Logout from "../components/Logout";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = props => {
  function expandNavMenu() {
    let menu = document.getElementsByClassName("navbar-menu")[0];
    menu.style.display =
      menu.style.display === "block"
        ? (menu.style.display = "none")
        : (menu.style.display = "block");
  }

  return (
    <section className="hero">
      <div className="hero-body nav-banner">
        {/* Navigation */}
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            {/* Produce + Logo */}
            <Link to="/" class="nav-home-link">
              <a className="navbar-item">
                <img src={logo} className="logo"></img>
                <div className="brand-name">
                  <strong>Produce</strong>
                </div>
              </a>
            </Link>

            {/* Hamburger menu */}
            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar"
              onClick={expandNavMenu}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          {!props.isAuthenticated ? (
            // Page Routes Not Authenticated
            <div class="navbar-menu">
              <div class="navbar-end">
                {/* <Link to="/about"><a class="navbar-item">About</a></Link> */}
                <Link to="/market">
                  <a class="navbar-item">Market</a>
                </Link>
                <Link to="/login">
                  <a class="navbar-item">Login</a>
                </Link>
                <Link to="/contact">
                  <a class="navbar-item">Contact</a>
                </Link>
              </div>
            </div>
          ) : (
            <div className="navbar-menu">
              <div className="navbar-end">
                {/* <Link to="/about"><a class="navbar-item">About</a></Link> */}
                <Link to="/market">
                  <a className="navbar-item">Market</a>
                </Link>
                <Link to="/contact">
                  <a className="navbar-item">Contact</a>
                </Link>
                {/* <Link to="/profile"><a class="navbar-item"><img class="header-avatar" src={props.user.avatar}></img></a></Link> */}
                {/* <ProfileDropMenu avatar={props.user.avatar} /> */}
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link is-arrowless">
                    <img
                      className="header-avatar"
                      src={props.user.avatar}
                    ></img>
                  </a>
                  <div className="navbar-dropdown is-right">
                    <span>
                      <div className="profile-drop-welcome-message">
                        <strong>Hi, {props.user.name}</strong>
                      </div>
                    </span>
                    <hr class="navbar-divider" />
                    <a class="navbar-item">Edit Profile</a>
                    <a class="navbar-item">Manage Booth</a>
                    <a class="navbar-item">Saved Booths</a>
                    <hr class="navbar-divider" />
                    <Logout />
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </section>
  );
};

const MapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(MapStateToProps)(Header);
