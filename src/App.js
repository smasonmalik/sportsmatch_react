import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
// import Results from './components/Results';
import PrivateRoute from './components/PrivateRoute';
import PlayerProfile from './components/PlayerProfile'
import EditProfileForm from './components/EditProfileForm'
import EditResultForm from './components/EditResultForm'
import DisplayMessages from './components/DisplayMessages'
import PastGames from './components/PastGames'

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

          <PrivateRoute exact strict path="/home" component={Home} />
          <PrivateRoute exact strict path="/profile" component={Profile} />
          <PrivateRoute exact strict path="/profile/edit" component={EditProfileForm} />
          {/* <PrivateRoute exact strict path="/results" component={Results} /> */}
          <PrivateRoute exact strict path="/results" component={PastGames} />
          <PrivateRoute path="/results/:id" component={EditResultForm}/>
          <PrivateRoute path="/player/:id" component={PlayerProfile}/>
          <PrivateRoute path="/game/:id/messages/:organiser_id/:opponent_id" component={DisplayMessages} />
        </Router>
      </div>
    );
  }
}

export default App;
