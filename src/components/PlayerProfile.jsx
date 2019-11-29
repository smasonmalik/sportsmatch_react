import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import axios from 'axios'
import GamesRequest from './GameRequestForm'


class PlayerProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: []
    }
    this.getPlayer = this.getPlayer.bind(this)
  }

  componentDidMount() {
    this.getPlayer()
  };

  getPlayer() {
    let self = this;
    axios({
      url: `/api/v1/players/${this.props.match.params.id}`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
      .then(function(response) {
        console.log(response.data)
        self.setState({
          player: response.data
        })
      })
      .then(function() {
        console.log(self.state.player.ability)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return (
        <div className="card text-center">
          <div className="card-header">
            Player Profile
          </div>
          <div className="card-body">
            <h5 className="card-title">{this.state.player.first_name}</h5>
            <p className="card-text">{this.state.player.ability}</p>
            <p className="card-text">{this.state.player.gender}</p>
            <a href="" className="btn btn-primary">Request Game</a>
          </div>
        </div>
    )
  }
}

export default PlayerProfile
