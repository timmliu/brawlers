import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './screens/Home';
import Detail from './screens/Detail';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:slug" component={Detail} />
            <Redirect to="/"/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
