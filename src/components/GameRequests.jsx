import React from 'react'
import axios from 'axios'
import SingleGameRequest from './SingleGameRequest'

class GameRequests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requests_organiser: [],
      requests_challenger: []

    }
    this.getRequest = this.getRequest.bind(this)

  }

  componentDidMount() {
    this.getRequest()
  };

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
        requests_challenger: response.data.challenger_games,
        requests_organiser: response.data.organiser_games
      })
    })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return (<div>
      <h2 align="center">Game Requests</h2>
      <div class="container">
        <div class="row">
          <div class="col-sm">
          <h3>Requests Made</h3>
          <ul className="list-group list-group-flush">
          {this.state.requests_organiser.map(result => (
            <SingleGameRequest
              key={result.id}
              id={result.id}
              organiser_id={result.organiser_id}
              opponent_id={result.opponent_id}
              opponent_name={result.first_name}
              game_date={result.game_date}
              game_time={result.game_time}
              status={result.status}
            />
            ))}
          </ul>
          </div>
          <div class="col-sm">
          <h3>Challenges Recieved</h3>
            <ul className="list-group list-group-flush">
            {this.state.requests_challenger.map(result => (
              <SingleGameRequest
                key={result.id}
                id={result.id}
                organiser_id={result.organiser_id}
                opponent_id={result.opponent_id}
                opponent_name={result.first_name}
                game_date={result.game_date}
                game_time={result.game_time}
                status={result.status}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default GameRequests
