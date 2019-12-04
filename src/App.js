import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
// import Results from './components/Results';
import PrivateRoute from './components/PrivateRoute';
import PlayerProfile from './components/PlayerProfile'
import EditProfileForm from './components/EditProfileForm'
import DisplayMessages from './components/DisplayMessages'
import Results from './components/Results'
import NewResult from './components/NewResult'

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

  // window.flash = (message, type="success") => Bus.emit('flash', ({message, type}));

  render() {
    return (
      <div>
        <Router>
          <Navbar isLoggedIn={this.state.isLoggedIn} handleLoggedInState={this.handleLoggedInState}/>
          <Route exact strict path="/signup">
            <Signup handleLoggedInState={this.handleLoggedInState} />
          </Route>
          <Route exact strict path="/">
            <Home handleLoggedInState={this.handleLoggedInState} />
          </Route>
          <PrivateRoute exact strict path="/profile" component={Profile} />
          <PrivateRoute exact strict path="/profile/edit" component={EditProfileForm} />
          <PrivateRoute exact strict path="/results" component={Results} />
          <PrivateRoute exact strict path="/results/:id/new" component={NewResult}/>
          <PrivateRoute path="/player/:id" component={PlayerProfile}/>
          <PrivateRoute path="/game/:id/messages/:organiser_id/:opponent_id" component={DisplayMessages} />
        </Router>
      </div>
    );
  }
}

export default App;
