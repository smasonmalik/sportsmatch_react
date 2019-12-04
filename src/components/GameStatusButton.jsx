import React from 'react'
import axios from 'axios'

class ConfirmGameButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: this.props.status
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateGame = this.updateGame.bind(this);
  }

  handleClick(event) {
    this.props.updateStatus(event.target.value)
    this.setState({
      status: event.target.value
    })
  }

  componentDidUpdate(prevProps, prevStat){
    if (this.state.status !== prevStat.status){
    this.updateGame()
    }
  }

  updateGame(){
    let self = this;
    axios({
      method: 'patch',
      url: `/api/v1/games/${this.props.id}/edit`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      },
      data: {
        status: self.state.status
      }
    })
    .then(function(response) {
      console.log(response.data.status)
      self.setState({
        confirmed: response.data.status
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  render() {
    if ((this.state.status === "confirmed") || (this.props.organiser_id === parseInt(localStorage.getItem('user_id')) && this.state.status === "pending")) {
      return (
        <div>
          <button className="btn btn-primary" value="cancelled" onClick={this.handleClick}>Cancel Game</button>
        </div>
      )
    } else if (this.state.status === "pending" && this.props.opponent_id === parseInt(localStorage.getItem('user_id'))) {
      return (
        <div>
          <button className="btn btn-primary" value="confirmed" onClick={this.handleClick}>Confirm Game</button>
          <button className="btn btn-primary" value="declined" onClick={this.handleClick}>Decline Game</button>
        </div>
      )
    } 
    else {
      return(
        <span></span>
      )
    }
  }
}


export default ConfirmGameButton
