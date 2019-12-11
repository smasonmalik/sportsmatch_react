import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';
import Profile from './components/UsersProfile/Profile';
import PrivateRoute from './components/PrivateRoute';
import PlayerProfile from './components/OpponentProfile/PlayerProfile'
import EditProfileForm from './components/UsersProfile/EditProfileForm'
import DisplayMessages from './components/Messages/DisplayMessages'
import Results from './components/Results/Results'
import NewResult from './components/Results/NewResult'

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
    document.title = 'SportsMatch';
    this.handleLogInState();

  }

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
