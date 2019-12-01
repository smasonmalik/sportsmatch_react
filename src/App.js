import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Results from './components/Results';
import PrivateRoute from './components/PrivateRoute';
import PlayerProfile from './components/PlayerProfile'
import EditProfileForm from './components/EditProfileForm'
import EditResultForm from './components/EditResultForm'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
        {(localStorage.getItem('jwtToken')) ? null : <Navbar />}
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
          <PrivateRoute exact strict path="/results" component={Results} />
          <Route path="/results/:id" component={EditResultForm}/>
          <Route path="/player/:id" component={PlayerProfile}/>
        </Router>
      </div>
    );
  }
}

export default App;
