import React from 'react'
import { withRouter } from "react-router-dom";

class LogoutButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleLogout()
    localStorage.clear()
    this.props.history.push('/login');
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>LogOut</button>
      </div>
    )
  }
}

export default withRouter (LogoutButton);
