import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";
import SearchBar from './SearchBar';
import Player from './Player';
import { throwStatement } from "@babel/types";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      distance: 5
    };
    this.getPlayers = this.getPlayers.bind(this);
    this.onPlusClick = this.onPlusClick.bind(this);
  }

  componentDidMount() {
    this.getPlayers()
  };

  onPlusClick(){
    this.state.distance += 1
    console.log(this.state.distance)
  }

  getPlayers() {
    let self = this;
    axios({
      url: "/api/v1/players",
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
      .then(function(response) {
        self.setState({ players: response.data })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
      if (localStorage.getItem('jwtToken')) {
        return (
          <div>
            <div>
              <SearchBar
                  onPlusClick={this.onPlusClick} 
                  distance={this.state.distance}
                  ability="Beginner"
                  gender="Any"
              />
            </div>
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
