import React from 'react'
import { withRouter } from "react-router-dom";

class LogoutButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    localStorage.clear()
    this.props.history.push('/login');
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Logout</button>
      </div>
    )
  }
}

export default withRouter (LogoutButton);
