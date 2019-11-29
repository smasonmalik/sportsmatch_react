import React from 'react'

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
      <div>
        <button onClick={this.handleClick}>LogOut</button>
      </div>
    )
  }
}

export default LogoutButton;
