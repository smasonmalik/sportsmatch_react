import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";
import SearchBar from './SearchBar';
import Player from './Player';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      distance: 5,
      ability: "Beginner",
      age_group: "16 - 19"
    };
    this.getPlayers = this.getPlayers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateDistance = this.updateDistance.bind(this);
  }

  componentDidMount() {
    this.getLoggedInPlayerInfo()
    this.getPlayers()
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.ability !== prevState.ability) {
      this.getPlayers()
    }
    if (this.state.distance !== prevState.distance) {
      this.getPlayers()
    }
  };

    handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    console.log(this.state.ability)
  } 

  updateDistance = (distance) => {
    this.setState({distance: distance})
  }

  getLoggedInPlayerInfo() {
    let self = this;
    axios({
      url: `/api/v1/players/${localStorage.getItem('user_id')}`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
      .then(function(response) {
        self.setState({
          ability: response.data.ability
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  getPlayers() {
    let self = this;
    axios({
        url: "/api/v1/players",
        headers: {
          "Content-Type": "application/json",
          "api-token": localStorage.getItem('jwtToken'),
          "ability": this.state.ability,
          "distance": this.state.distance
        },
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
                  distance={this.state.distance}
                  ability={this.state.ability}
                  handleChange={this.handleChange}
                  updateDistance={this.updateDistance}
              />
            </div>
            <p>{this.state.ability} - {this.state.age_group} - {this.state.distance}</p>
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
