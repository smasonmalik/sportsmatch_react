import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import styles from './css/Navbar.module.css'

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
                <LogoutButton handleLoggedInState={this.props.handleLoggedInState}>Logout</LogoutButton>
        );
      }
    }

  render() {

    return (

      <div className={styles.navDiv}>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div style={{textAlign: 'center'}}>
          <NavLink to="/"><img className='main-logo' src="../../sportsmatchlogo.png" alt='SportsMatch'/></NavLink>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
        <div className={styles.innerDiv}>
        <nav >
          <div>
            <div className="row">
              <div className={`col-3 ${styles.option}`}>
                <NavLink to='/'><button className={styles.button}><i class="fas fa-home"></i></button></NavLink>
              </div>
              <div className={`col-3 ${styles.option}`}>
                <NavLink to='/profile'><button className={styles.button}><i class="fas fa-user-alt"></i></button></NavLink>
              </div>
              <div className={`col-3 ${styles.option}`}>
                <NavLink to='/results'><button className={styles.button}><i class="fas fa-trophy"></i></button></NavLink>
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
