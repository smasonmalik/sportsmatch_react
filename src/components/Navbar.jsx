import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import './css/navbar.css'
import Map from './Map'

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
            <li className="nav-item">
              <NavLink className="nav-link" id="location" to='/map'>Location</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" id="results-link" to='/results'>Results</NavLink>
            </li>
            {this.sessionButton()}
          </ul>
        </div>
        </nav>
      )
    }
}

export default Navbar;
