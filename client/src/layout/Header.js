import React from "react";
import { UserValue } from "../components/User/UserContext";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
  const [{ loggedIn, name }] = UserValue();

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
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            
            {/* Produce + Logo */}
            <Link to="/">
              <a className="navbar-item">
                <img src={logo} id="logo"></img>
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

          {/* Page Routes */}
          <div className="navbar-menu">
            <div className="navbar-end">
              {/* <Link to="/about"><a className="navbar-item">About</a></Link> */}
              <Link to="/market">
                <a className="navbar-item">Market</a>
              </Link>
              <Link to="/login">
                <a className="navbar-item">Login</a>
              </Link>
              <Link to="/contact">
                <a className="navbar-item">Contact</a>
              </Link>
              {loggedIn && <div>Welcome, {name}</div>}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
