import React from 'react'

class SingleMessage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.sender_id === parseInt(localStorage.getItem('user_id')) || this.props.receiver_id === parseInt(localStorage.getItem('user_id')) ) {
      return (
        <li className="list-group-item" style={{textAlign: 'left'}}>
          {this.props.content}
        </li>
      )
    } else {
      return (
        <li className="list-group-item" style={{textAlign: 'right'}}>
          {this.props.content}
        </li>
      )
    }
  }
}

export default SingleMessage
