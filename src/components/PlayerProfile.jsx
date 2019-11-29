import React from 'react'
import axios from 'axios'
import GameRequestForm from './GameRequestForm'


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
        self.setState({
          player: response.data
        })
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
            <GameRequestForm opponent_id={this.state.player.id} />
          </div>
        </div>
    )
  }
}

export default PlayerProfile
