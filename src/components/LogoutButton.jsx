import React from 'react'
import { Link, withRouter } from "react-router-dom";

class LogoutButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    localStorage.clear()
    this.props.history.push('/profile');
  }

  render() {
    return(
      <div>
        <Link onClick={this.handleClick}>Logout</Link>
      </div>
    )
  }
}

export default withRouter (LogoutButton);
