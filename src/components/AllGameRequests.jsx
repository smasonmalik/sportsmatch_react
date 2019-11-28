import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Request from './singleGameRequest'

class GameRequests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requests: []
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
        console.log(response.data)
        self.setState({
          requests: response.data
        })
      })
      .then(function() {
        console.log(self.state.requests.game_date)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        {this.state.requests.map(result => (
          <Request
            key={result.id}
            id={result.id}
            organiser_id={result.organiser_id}
            opponent_id={result.opponent_id}
            game_date={result.game_date}
            game_time={result.game_time}
            confirmed={result.confirmed}
          />
        ))}
      </div>
    )
  }
}

export default GameRequests
