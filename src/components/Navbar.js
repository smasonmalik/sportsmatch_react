import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import './css/navbar.css'
import Location from './Location'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.sessionButton = this.sessionButton.bind(this)
  }

  sessionButton() {
    console.log('jwt', localStorage.getItem('jwtToken'))
      if (localStorage.getItem('jwtToken')) {
        return (
          <LogoutButton handleLogout={this.props.handleLogout} />
        );
      } }

  componentDidMount(){
    console.log('jwtmount', localStorage.getItem('jwtToken'))
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
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" id="profile-link" to='/profile'>Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" id="map_location" to='/map'>Location</NavLink>
            </li>
            {this.sessionButton()}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
