import React from 'react'
import logo from '../images/logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function Header() {
    return(
        <section className="hero">
        <div className="hero-body">
            <nav className="level is-mobile">
                <div className="level-left">
                    <div className="level-item">
                    <p className="subtitle is-5">
                        <Link to="/"><strong>Produce</strong></Link>
                    </p>
                    </div>
                    <div className='level-item'>
                        <img src={logo}></img>
                    </div>
                </div>

                <div className="level-right">
                    <p className="level-item"><a><Link to="/about">About</Link></a></p>
                    <p className="level-item"><a><Link to="/market">Market</Link></a></p>
                    <p className="level-item"><a><Link to="/login">Login</Link></a></p>
                    <p className="level-item"><a><Link to="/contact">Contact</Link></a></p>
                </div>
            </nav>
        </div>
      </section>
    )
}

export default Header