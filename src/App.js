import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authToken: null,
      user_id: null
    }
    this.updateAuthState = this.updateAuthState.bind(this)
  }

  updateAuthState(token, id) {
    this.setState({
      authToken: token,
      user_id: id
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar user_id={this.state.user_id}/>
          <Route exact strict path="/login">
            <Login updateAuthState={this.updateAuthState} authToken={this.state.authToken}/>
          </Route>
          <Route exact strict path="/signup">
            <Signup updateAuthState={this.updateAuthState} authToken={this.state.authToken}/>
          </Route>
          <Route exact strict path="/home">
            <Home authToken={this.state.authToken} />
          </Route>
          <Route exact strict path={`/profile/${this.state.user_id}`}>
            <Profile authToken={this.state.authToken} user_id={this.state.user_id} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
