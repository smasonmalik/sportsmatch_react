import React from 'react'
import axios from 'axios'
import SingleGameRequest from './SingleGameRequest'

class GameRequests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requests: [],
      gameEdit: false
    }
    this.getRequest = this.getRequest.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount() {
    this.getRequest()
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.gameEdit !== prevState.gameEdit) {
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

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.state.requests.map(result => (
          <SingleGameRequest
            key={result.id}
            id={result.id}
            organiser_id={result.organiser_id}
            opponent_id={result.opponent_id}
            game_date={result.game_date}
            game_time={result.game_time}
            confirmed={result.confirmed}
            handleEdit={this.handleEdit}
          />
        ))}
      </ul>
    )
  }
}

export default GameRequests
