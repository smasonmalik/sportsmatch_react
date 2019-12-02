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
      distance: 5,
      ability: "Beginner"
    };
    this.getPlayers = this.getPlayers.bind(this);
    // this.onPlusClick = this.onPlusClick.bind(this);
    this.onAbilityUpdate = this.onAbilityUpdate.bind(this);
  }

  componentDidMount() {
    this.getPlayers()
  };

  // onPlusClick(){
  //   this.setState({
  //     ability: this.state.distance + 1
  //   })
  // }

  onAbilityUpdate(ability){
    this.setState({
      ability: ability
    })
    console.log(this.state.ability)
    this.getPlayers()
  }

  getPlayers() {
    let self = this;
    axios({
        method: 'post',
        url: "/api/v1/players",
        headers: {
          "Content-Type": "application/json",
          "api-token": localStorage.getItem('jwtToken')
        },
        data:
        {
          ability: this.state.ability
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
                  onAbilityUpdate={this.onAbilityUpdate} 
                  onPlusClick={this.onPlusClick} 
                  distance={this.state.distance}
                  ability={this.state.ability}
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
