import React from 'react'
import logo from '../images/logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function Header() {
    return(
        <section className="hero">
        <div className="hero-body">
            
            {/* Navigation */}
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    
                    {/* Produce + Logo */}
                    <a class="navbar-item">
                        <img src={logo}></img>
                        <div class="brand-name"><Link to="/"><strong>Produce</strong></Link></div>
                    </a>

                    {/* Hamburger menu */}
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                {/* Page Routes */}
                <div class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item"><Link to="/about">About</Link></a>
                        <a class="navbar-item"><Link to="/market">Market</Link></a>
                        <a class="navbar-item"><Link to="/login">Login</Link></a>
                        <a class="navbar-item"><Link to="/contact">Contact</Link></a>
                    </div>
                </div>
            </nav>
        </div>
      </section>
    )
}

export default Header