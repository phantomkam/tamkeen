import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import './App.css';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countLimit: 10,
      activeCards: [],
      disableCards: false,
      openCardAlert: false,
    }
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
            <Header />
            <div className="content" style={this.styles.content}>
              <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/aboutus" component={ AboutUs } />
              <Route path="/login" component={ Signin } />
              <Route path="/register" component={ Signup } />
              </Switch>
            </div>
            <Footer />
        </React.Fragment>
      </BrowserRouter>
    )
  }

  styles = {
    content: {
      marginTop: 50,
    }
  }
}

export default App
