import React from 'react'
import { Link, withRouter } from "react-router-dom";

class LogoutButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleLogoutState()
    localStorage.clear()
  }

  render() {
    return(
      <Link onClick={this.handleClick} to={'/'}>Logout</Link>
    )
  }
}

export default withRouter (LogoutButton);
