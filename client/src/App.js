import React, { Component } from "react";
import "./App.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import { Provider } from "react-redux";
import { loadUser } from "./actions/authActions";
import store from "./store";
import Home from "./pages/Home";
import About from "./pages/About";
import Market from "./pages/Market";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import BoothPage from "./pages/BoothPage";
import Profile from "./pages/Profile";
import ManageBooth from "./pages/ManageBooth";
import SavedBooths from "./pages/SavedBooths";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <ScrollToTop>
            <div className="App">
              <Header />
              <main className="App-content">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/market" component={Market} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/contact" component={Contact} />
                <Route path="/booth/:id" component={BoothPage} />
                <Route path="/profile" component={Profile} />
                <Route path="/yourbooth" component={ManageBooth} />
                <Route path="/favorites" component={SavedBooths} />
              </main>
              <Footer />
            </div>
          </ScrollToTop>
        </Router>
      </Provider>
    );
  }
}

export default App;
