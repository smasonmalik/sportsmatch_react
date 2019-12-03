import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import PlayerProfile from './components/PlayerProfile'
import EditProfileForm from './components/EditProfileForm'
import DisplayMessages from './components/DisplayMessages'

class App extends Component {
  constructor() {
    super()
  this.state = {
    isLoggedIn: false
  }
  this.handleLoggedInState = this.handleLoggedInState.bind(this);
  this.handleLogInState = this.handleLogInState.bind(this);
}
  handleLogInState() {
    if (localStorage.getItem('jwtToken')) {
      this.setState({
        isLoggedIn: true
      })
    }
  }

  handleLoggedInState() { 
      this.setState(prevState => {
        return {isLoggedIn: !prevState.isLoggedIn}
      })
  }

  componentDidMount() {
    this.handleLogInState();
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar isLoggedIn={this.state.isLoggedIn} handleLoggedInState={this.handleLoggedInState}/>
          <Route exact strict path="/signup">
            <Signup />
          </Route>
          <Route exact strict path="/">
            <Home handleLoggedInState={this.handleLoggedInState} />
          </Route>
          <Route exact strict path="/profile">
            <Profile />
          </Route>
          <Route exact strict path="/profile/edit">
            <EditProfileForm />
          </Route>
          <Route path="/player/:id" component={PlayerProfile}/>
          <Route path="/game/:id/messages/:organiser_id/:opponent_id" component={DisplayMessages} />
        </Router>
      </div>
    );
  }
}

export default App;
