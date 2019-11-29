import React from 'react'
import axios from 'axios'

class ConfirmGameButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmed: props.confirmed
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
      self.setState({
        confirmed: response.data.confirmed
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  render() {
    if (this.props.organiser_id == localStorage.getItem('user_id')) {
      return <span></span>
    } else if (this.state.confirmed) {
      return (
        <div>
          <button className="btn btn-primary" onClick={this.handleConfirm}>Unconfirm Game</button>
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
