import React from 'react'
import axios from 'axios'

class DeclineGameButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let self = this;
    axios({
      method: 'delete',
      url: `/api/v1/games/${this.props.id}`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      },
      data: {
        organiser_id: self.props.organiser_id
      }
    })
    .then(function() {
      self.props.handleDecline()
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  render() {
    if (this.props.organiser_id === parseInt(localStorage.getItem('user_id'))) {
      return <span></span>
    } else if (this.state.status != "confirmed") {
      return (
        <div>
          <button className="btn btn-primary" value="declined" onClick={this.handleClick}>Decline Game</button>
        </div>
      )
    }
  }
}

export default DeclineGameButton
