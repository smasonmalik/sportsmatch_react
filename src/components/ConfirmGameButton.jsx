import React from 'react'
import axios from 'axios'

class ConfirmGameButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmed: this.props.status
    }
    this.handleConfirm = this.handleConfirm.bind(this);
    // this.handleCancel = this.handleCancel.bind(this);
    this.updateGame = this.updateGame.bind(this);
  }

  handleConfirm(event) {
    this.setState({
      confirmed: event.target.value
    })
    this.updateGame()
    // .then{console.log(this.state.confirmed)}
  }

  updateGame(){
    let self = this;
    axios({
      method: 'patch',
      url: `/api/v1/games/${this.props.id}`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      },
      data: {
        status: self.state.confirmed
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
    if (this.state.confirmed === "confirmed" || this.props.organiser_id === localStorage.getItem('user_id') ) {
      return (
        <div>
          <button className="btn btn-primary" value="cancelled" onClick={this.handleConfirm}>Cancel Game</button>
        </div>
      )
    } else if (this.state.confirmed === "pending" && this.props.opponenet_id === localStorage.getItem('user_id') ) {
      return (
        <div>
          <button className="btn btn-primary" value="confirmed" onClick={this.handleConfirm}>Confirm Game</button>
        </div>
      )
    } else {
    return (
      <span></span>
    )
    }
  }
}


export default ConfirmGameButton
