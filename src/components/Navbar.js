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
    // this.handleLogout = this.handleLogout.bind(this);
  }

  sessionButton() {
      if (this.props.isLoggedIn === true){
        return (
          <LogoutButton handleLogoutState={this.props.handleLogoutState} />
        );
      }
    }

  // handleLogout() {
  //   console.log('handlelogout');
  //   this.props.handleLogoutState()
  // }

  componentDidMount(){
    console.log('jwtdid mount', localStorage.getItem('jwtToken'))
      if (localStorage.getItem('jwtToken')) {
        this.setState({
          isLoggedIn: true
        })
      }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
      this.setState(prevState => {
        return {toggleState: !prevProps.toggleState}
      })
    }
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
            {this.sessionButton()}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
