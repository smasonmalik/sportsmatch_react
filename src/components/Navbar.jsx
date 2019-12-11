import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import styles from './css/Navbar.module.css'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPath: ''
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

  handleClick(event) {
    const { name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const homeClass = this.state.currentPath === 'home' ? styles.active : styles.option
    const profileClass = this.state.currentPath === 'profile' ? styles.active : styles.option
    const resultsClass = this.state.currentPath === 'results' ? styles.active : styles.option

    return (
      <div className={styles.navDiv}>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div style={{textAlign: 'center'}}>
            <NavLink to="/"><button value='home' name='currentPath' onClick={(e) => this.handleClick(e)} className={styles.button}><img className='main-logo' src="../../sportsmatchlogo.png" alt='SportsMatch'/></button></NavLink>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
        <div className={styles.innerDiv}>
        <nav >
          <div>
            <div className="row">
              <div className={`col-3 ${homeClass}`}>
                <NavLink to='/'><button value='home' name='currentPath' onClick={(e) => this.handleClick(e)} className={styles.button}><i class="fas fa-home"></i>{this.props.location}</button></NavLink>
              </div>
              <div id="profile-link" className={`col-3 ${profileClass}`}>
                <NavLink to='/profile'><button value='profile' name='currentPath' onClick={(e) => this.handleClick(e)} className={styles.button}><i class="fas fa-user-alt"></i></button></NavLink>
              </div>
              <div className={`col-3 ${resultsClass}`}>
                <NavLink to='/results'><button value='results' name='currentPath' onClick={(e) => this.handleClick(e)} className={styles.button}><i class="fas fa-trophy"></i></button></NavLink>
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
