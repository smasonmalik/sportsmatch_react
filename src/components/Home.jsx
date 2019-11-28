import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";
import Player from './Player'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
    this.getPlayers = this.getPlayers.bind(this);
  }

  componentDidMount() {
    this.getPlayers()
  };

  getPlayers() {
    let self = this;
    axios({
      url: "/api/v1/players",
      headers: {
        "Content-Type": "application/json",
        "api-token": self.props.authToken
      }
    })
      .then(function(response) {
        console.log(response.data)
        self.setState({ players: response.data })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
      if (this.props.authToken) {
        return (
          <div>
            {this.state.players.map(player => (
              <Player
                key={player.id}
                id={player.id}
                firstName={player.first_name}
                ability={player.ability}
                gender={player.gender}
              />
            ))}
          </div>
        )
      } else {
        return(
          <div>
            <Redirect to='/login' />
          </div>
        )
      }
  }
}
export default Home;
