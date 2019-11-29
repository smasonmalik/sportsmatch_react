import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Request from './singleGameRequest'

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

  handleEdit() {
    this.setState(prevState => {
      return {gameEdit: !prevState.gameEdit}
    })
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.state.requests.map(result => (
          <Request
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
        {this.state.gameEdit ? "Yes" : "No"}
      </ul>
    )
  }
}

export default GameRequests
