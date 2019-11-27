import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authToken: null
    }
    this.updateAuthState = this.updateAuthState.bind(this)
  }

  updateAuthState(token) {
    this.setState({
      authToken: token
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Route exact strict path="/login">
            <Login updateAuthState={this.updateAuthState}/>
          </Route>
          <Route exact strict path="/home">
            <Home authToken={this.state.authToken}/>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
