import React from 'react'
import { withRouter, Link } from "react-router-dom";

class LogoutButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    localStorage.clear()
  }

  render() {
    return(
      <Link onClick={this.handleClick} to={'/'}>Logout</Link>
    )
  }
}

export default withRouter (LogoutButton);
