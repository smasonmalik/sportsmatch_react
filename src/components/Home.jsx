import React, { Component } from "react";
import axios from "axios";
import FilterBar from './FilterBar';
import Player from './Player';
import Login from './Login'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      distance: 5,
      ability: '',
      sport: ''
    };
    this.getPlayers = this.getPlayers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateDistance = this.updateDistance.bind(this);
  }

  componentDidMount() {
    this.getLoggedInPlayerInfo()
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.ability !== prevState.ability ||
      this.state.distance !== prevState.distance
    ) {
      this.getPlayers()
    }
  };
    handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
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
          ability: response.data.ability,
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
          "distance": this.state.distance,
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
            <div>
              {this.state.players.map(player => (
                <Player
                  key={player.id}
                  id={player.id}
                  firstName={player.first_name}
                  ability={player.ability}
                  rank_points={player.rank_points}
                  gender={player.gender}
                  bio={player.bio}
                />
              ))}
            </div>
          </div>
        )
      } else {
        return(
          <div>
            <Login handleLogIn={this.props.handleLoggedInState}/>
          </div>
        )
      }
  }

}
export default Home;
