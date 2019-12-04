import React from 'react';


class SingleMessage extends React.Component {
  constructor(props) {
    super(props)
    this.showName = this.showName.bind(this)
  }
  showName() {
    if (this.props.sender_id === this.props.organiser_id) {
      return this.props.organiser
    } else {
      return this.props.opponent
    }
  }
  render() {
    if (this.props.sender_id === parseInt(localStorage.getItem('user_id'))) {
      return (
        <li className="list-group-item" style={{textAlign: 'left'}}>
          <p>{this.props.content}</p>
          <p style={{color: 'grey'}}>{this.showName()}</p>
        </li>
      )
    } else {
      return (
        <li className="list-group-item" style={{textAlign: 'right'}}>
          <p>{this.props.content}</p>
          <p style={{color: 'grey'}}>{this.showName()}</p>
        </li>
      )
    }
  }
}
export default SingleMessage;
