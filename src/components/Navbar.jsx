import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import './css/navbar.css'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      toggleState: false
      
    }
    this.sessionButton = this.sessionButton.bind(this);
  }

  sessionButton() {
      if (this.props.isLoggedIn === true){
        return (
          <li className="nav-item">
              <LogoutButton handleLoggedInState={this.props.handleLoggedInState}>Logout</LogoutButton>
          </li>
        );
      }
    }

    activeWindow(){

    }

  render() {
<<<<<<< HEAD:src/components/Navbar.js
    if (localStorage.getItem('jwtToken')) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/home">SportsMatch</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" id="login-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" id="profile-link" to='/profile'>Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" id="results-link" to='/results'>Results</NavLink>
              </li>
              <LogoutButton handleLogout={this.props.handleLogout} />
  
            </ul>
          </div>
        </nav>
      )
    } else {
      return (
        <div>
          <h2>
          Welcome to SportsMatch!
          </h2>
=======

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/"><img className='main-logo' src="../../sportsmatchlogo.png" alt='SportsMatch'/></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" id="home-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" id="profile-link" to='/profile'>Profile</NavLink>
            </li>
            {this.sessionButton()}
          </ul>
>>>>>>> master:src/components/Navbar.jsx
        </div>
      )
    }
    
  }
}

export default Navbar;
