import React from 'react'
import './App.scss'
import { UserProvider } from './components/User/UserContext'
import { reducer, initialState } from './components/User/reducer'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'
import Home from './pages/Home'
import About from './pages/About'
import Market from './pages/Market'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import BoothPage from './pages/BoothPage'


const App = () => {

  return (
    <UserProvider initialState={initialState} reducer={reducer}>
      <Router>
        <ScrollToTop>
        <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/market" component={Market} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/contact" component={Contact} />
            <Route path="/boothpage/:id" component={BoothPage} />
            <Footer />
        </div>
        </ScrollToTop>
      </Router>
    </UserProvider>
  );
}

export default App;
