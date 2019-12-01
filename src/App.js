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

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Route exact strict path="/login">
            <Login />
          </Route>
          <Route exact strict path="/">
            <Login />
          </Route>
          <Route exact strict path="/signup">
            <Signup />
          </Route>
          <Route exact strict path="/home">
            <Home />
          </Route>
          <Route exact strict path="/profile">
            <Profile foo="foo"/>
          </Route>
          <Route exact strict path="/profile/edit">
            <EditProfileForm />
          </Route>
          <Route path="/player/:id" component={PlayerProfile}/>
          <Route path="/game/:id/messages" component={DisplayMessages} />
        </Router>
      </div>
    );
  }
}

export default App;
