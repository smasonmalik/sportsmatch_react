import React from 'react'
import { withRouter, Link } from "react-router-dom";
import styles from '../css/Navbar.module.css'

class LogoutButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleLoggedInState()
    localStorage.clear()
  }

  render() {
    return(
      <Link onClick={this.handleClick} to={'/'}><button id="logout-button" className={styles.button}>Logout</button></Link>
    )
  }
}

export default withRouter (LogoutButton);
