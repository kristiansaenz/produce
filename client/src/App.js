import React from 'react'
import './App.scss'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Market from './pages/Market'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'


function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/market" component={Market} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/contact" component={Contact} />
        <Footer />
    </div>
    </Router>
  );
}

export default App;
