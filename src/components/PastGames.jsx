import React from 'react'
import axios from 'axios'
import './css/Results.css'
import SinglePastGame from './SinglePastGame'

class PastGames extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opponentGames: [],
      organiserGames: []
    }
    this.getOpponentGamesRequest = this.getOpponentGamesRequest.bind(this)
    this.getOrganiserGamesRequest = this.getOrganiserGamesRequest.bind(this)
    // this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount() {
    this.getOpponentGamesRequest()
    this.getOrganiserGamesRequest()
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.resultEdit !== prevState.resultEdit) {
  //     this.getRequest()
  //   }
  // }

  getOpponentGamesRequest() {
    let self = this;
    axios({
      url: "/api/v1/games/opponent",
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
      .then(function(response) {
        self.setState({
          opponentGames: response.data
        })
        console.log(response.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  getOrganiserGamesRequest() {
    let self = this;
    axios({
      url: "/api/v1/games/organiser",
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
      .then(function(response) {
        self.setState({
          organiserGames: response.data
        })
        console.log(response.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    
      return (
      <div>
        <h2 align="center">My Past Games</h2>
        <div class="container">
          <div class="row">
            <div class="col-sm">
            <h3>I'm the organiser</h3>
            <ul className="list-group list-group-flush">
              {this.state.organiserGames.map(result => (
              <SinglePastGame
                key={result.id}
                game_id={result.id}
                organiser_id={result.organiser_id}
                opponent_id={result.opponent_id}
                game_date={result.game_date}
                game_time={result.game_time}
              />
              ))}
            </ul>
            </div>
            <div class="col-sm">
            <h3>I'm the opponent</h3>
              <ul className="list-group list-group-flush">
                {this.state.opponentGames.map(result => (
                  <SinglePastGame
                  key={result.id}
                  game_id={result.id}
                  organiser_id={result.organiser_id}
                  opponent_id={result.opponent_id}
                  game_date={result.game_date}
                  game_time={result.game_time}
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

export default PastGames;
