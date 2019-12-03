import React from 'react'
import axios from 'axios'

class ConfirmGameButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmed: this.props.status
    }
    this.handleConfirm = this.handleConfirm.bind(this)
  }

  handleConfirm() {
    let self = this;
    axios({
      method: 'patch',
      url: `/api/v1/games/${this.props.id}`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      },
      data: {
        confirmed: !this.state.confirmed
      }
    })
    .then(function(response) {
      console.log(response.data.confirmed)
      self.setState({
        confirmed: response.data.confirmed
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  render() {
    if (this.props.organiser_id === parseInt(localStorage.getItem('user_id'))) {
      return <span></span>
    } else if (this.state.confirmed === "confirmed") {
      return (
        <div>
          <button className="btn btn-primary" onClick={this.handleConfirm}>Cancel Game</button>
        </div>
      )
    } else {
      return (
        <div>
          <button className="btn btn-primary" onClick={this.handleConfirm}>Confirm Game</button>
        </div>
      )
    }
  }
}


export default ConfirmGameButton
