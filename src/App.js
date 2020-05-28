/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./components/homepage";
import Experience from "./components/experience";
import Contact from "./components/contact";
import About from "./components/about";


class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/home" component={Home} />

        </div>
      </Router>

    );
  }
}

export default App;