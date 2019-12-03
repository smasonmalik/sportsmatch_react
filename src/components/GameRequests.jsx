import React from 'react'
import axios from 'axios'
import SingleGameRequest from './SingleGameRequest'

class GameRequests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requests: [],
      gameEdit: false,
      gameDecline: false
    }
    this.getRequest = this.getRequest.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDecline = this.handleDecline.bind(this)
  }

  componentDidMount() {
    this.getRequest()
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.gameEdit !== prevState.gameEdit || this.state.gameDecline !== prevState.gameDecline) {
      this.getRequest()
    }
  }

  getRequest() {
    let self = this;
    axios({
      url: "/api/v1/games/",
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
      .then(function(response) {
        console.log(response.data)
        self.setState({
          requests: response.data
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  handleEdit() {
    this.setState(prevState => {
      return {gameEdit: !prevState.gameEdit}
    })
  }

  handleDecline() {
    this.setState({
      gameDecline: true
    })
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.state.requests.map(result => (
          <SingleGameRequest
            key={result.id}
            id={result.id}
            organiser_id={result.organiser_}
            opponent_id={result.opponent_id}
            opponent_name={result.first_name}
            game_date={result.game_date}
            game_time={result.game_time}
            status={result.status}
            handleEdit={this.handleEdit}
            handleDecline={this.handleDecline}
          />
        ))}
      </ul>
    )
  }
}

export default GameRequests
