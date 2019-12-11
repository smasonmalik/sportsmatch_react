import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import styles from '../css/Navbar.module.css'

class Navbar extends React.Component {
  constructor() {
    super()
    // this.state = {
    //   currentPath: ''
    // }
    this.sessionButton = this.sessionButton.bind(this);
  }

  sessionButton() {
      if (this.props.isLoggedIn === true){
        return (
                <LogoutButton handleLoggedInState={this.props.handleLoggedInState}>Logout</LogoutButton>
        );
      }
    }
  //
  // handleClick(event) {
  //   const { name, value} = event.target
  //   this.setState({
  //     [name]: value
  //   })
  // }

  render() {
    return (
      <div className={styles.navDiv}>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div style={{textAlign: 'center'}}>
            <button value='home' name='currentPath' className={styles.button}><img className='main-logo' src="../../sportsmatchlogo.png" alt='SportsMatch'/></button>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
        <div className={styles.innerDiv}>
        <nav >
          <div>
            <div className="row">
              <div className={`col-3 ${styles.option}`}>
                <NavLink to='/'><button value='home' name='currentPath' className={styles.button}><i class="fas fa-home"></i>{this.props.location}</button></NavLink>
              </div>
              <div id="profile-link" className={`col-3 ${styles.option}`}>
                <NavLink to='/profile'><button value='profile' name='currentPath' className={styles.button}><i class="fas fa-user-alt"></i></button></NavLink>
              </div>
              <div className={`col-3 ${styles.option}`}>
                <NavLink to='/results'><button value='results' name='currentPath' className={styles.button}><i class="fas fa-trophy"></i></button></NavLink>
              </div>
              <div className={`col-3 ${styles.option}`}>
              {this.sessionButton()}
              </div>
            </div>
          </div>
          </nav>
          </div>
        </div>
      )
    }
}

export default Navbar;
