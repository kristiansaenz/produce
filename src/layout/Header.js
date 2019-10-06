import React from 'react'
import logo from '../images/logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function Header() {
    return(
        <section class="hero">
        <div class="hero-body">
            <nav class="level">
                <div class="level-left">
                    <div class="level-item">
                    <p class="subtitle is-5">
                        <Link to="/"><strong>Produce</strong></Link>
                    </p>
                    </div>
                    <div class='level-item'>
                        <img src={logo}></img>
                    </div>
                </div>

                <div class="level-right">
                    <p class="level-item"><a><Link to="/about">About</Link></a></p>
                    <p class="level-item"><a><Link to="/market">Market</Link></a></p>
                    <p class="level-item"><a><Link to="/login">Login</Link></a></p>
                    <p class="level-item"><a><Link to="/contact">Contact</Link></a></p>
                </div>
            </nav>
        </div>
      </section>
    )
}

export default Header