import React from "react";
import logo from "../images/logo.svg";
import sprout from "../images/sprout.svg";
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

          {/* Navbar Menu */}
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link to="/market">
                <a className="navbar-item">Market</a>
              </Link>
              <Link to="/contact">
                <a className="navbar-item">Contact</a>
              </Link>

              {/* if authenticated, show profile menu - else, show nothing */}
              {props.isAuthenticated && props.user ? (
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
                        {props.user.booth != null ? (
                          <img className="farmer-badge" src={sprout}></img>
                        ) : null}
                      </div>
                    </span>
                    <hr className="navbar-divider" />
                    <Link to="/profile">
                      <a className="navbar-item">Edit Profile</a>
                    </Link>
                    {props.user.booth != null ? (
                      <Link to="/yourbooth">
                        <a className="navbar-item">Manage Booth</a>
                      </Link>
                    ) : (
                      <a className="navbar-item">Create Booth</a>
                    )}
                    <Link to="/favorites">
                      <a className="navbar-item">Saved Booths</a>
                    </Link>
                    <hr className="navbar-divider" />
                    <Logout />
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <a className="navbar-item">Login</a>
                </Link>
              )}
            </div>
          </div>
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
