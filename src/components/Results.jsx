import React from 'react'
import axios from 'axios'
import SingleResult from './SingleResult'
import './css/Results.css'

class Results extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opponentResults: [],
      organiserResults: [],
      resultEdit: false
    }
    this.getOpponentResultsRequest = this.getOpponentResultsRequest.bind(this)
    this.getOrganiserResultsRequest = this.getOrganiserResultsRequest.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount() {
    this.getOpponentResultsRequest()
    this.getOrganiserResultsRequest()
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.resultEdit !== prevState.resultEdit) {
      this.getRequest()
    }
  }

  getOpponentResultsRequest() {
    let self = this;
    axios({
      url: "/api/v1/results/opponent",
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
      .then(function(response) {
        self.setState({
          opponentResults: response.data
        })
        console.log(response.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  getOrganiserResultsRequest() {
    let self = this;
    axios({
      url: "/api/v1/results/organiser",
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
      .then(function(response) {
        self.setState({
          organiserResults: response.data
        })
        console.log(response.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  handleEdit() {
    this.setState(prevState => {
      return {resultEdit: !prevState.resultEdit}
    })
  }

  render() {
      return (
      <div>
        <h2 align="center">My Results</h2>
        <div class="container">
          <div class="row">
            <div class="col-sm">
            <h3>I'm the organiser</h3>
            <ul className="list-group list-group-flush">
              {this.state.organiserResults.map(result => (
              <SingleResult
                key={result.id}
                id={result.id}
                game_id={result.game_id}
                winner_id={result.winner_id}
                loser_id={result.loser_id}
                confirmed={result.confirmed}
                handleEdit={this.handleEdit}
              />
              ))}
            </ul>
            </div>
            <div class="col-sm">
            <h3>I'm the opponent</h3>
              <ul className="list-group list-group-flush">
                {this.state.opponentResults.map(result => (
                  <SingleResult
                    key={result.id}
                    id={result.id}
                    game_id={result.game_id}
                    winner_id={result.winner_id}
                    loser_id={result.loser_id}
                    confirmed={result.confirmed}
                    handleEdit={this.handleEdit}
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


export default Results
