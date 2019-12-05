import React from 'react'
import axios from 'axios'
import SingleResult from './SingleResult'
import styles from './css/Results.module.css'

class Results extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current_username: [],
      opponentResults: [],
      organiserResults: [],
      resultEdit: false
    }
    this.getOpponentResultsRequest = this.getOpponentResultsRequest.bind(this)
    this.getOrganiserResultsRequest = this.getOrganiserResultsRequest.bind(this)
    this.getPlayer = this.getPlayer.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount() {
    this.getOpponentResultsRequest()
    this.getOrganiserResultsRequest()
    this.getPlayer()
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.resultEdit !== prevState.resultEdit) {
      this.getRequest()
    }
  }

  getOpponentResultsRequest() {
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
      url: "/api/v1/games/organiser",
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

  getPlayer() {
    let self = this;
    axios({
      url: `/api/v1/players/${localStorage.getItem('user_id')}`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
    .then(function(response) {
      self.setState({current_username: response.data.first_name})
    })
    .then(function(error) {
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
        <div class={`container ${styles.myContainer}`}>
          <div class={`row ${styles.myRow}`}>
            <div class={`col-lg-6 col-md-6 col-sm-12 ${styles.col}`}>
            <h3 className={styles.heading}>Home Games</h3><hr/>
              {this.state.organiserResults.map(game => (
              <SingleResult
                key={game.id}
                id={game.id}
                result_id={game.result_id}
                winner_id={game.winner_id}
                loser_id={game.loser_id}
                opponent_name={game.first_name}
                organiser_name={this.state.current_username}
                organiser_id={game.organiser_id}
                opponent_id={game.opponent_id}
                game_date={game.game_date}
                handleEdit={game.handleEdit}
              />
            ))}
            </div>
            <div class={`col-lg-6 col-md-6 col-sm-12 ${styles.myCol}`}>
            <h3 className={styles.heading}>Away Games</h3><hr/>
              <ul className="list-group list-group-flush">
                {this.state.opponentResults.map(game => (
                  <SingleResult
                    key={game.id}
                    id={game.id}
                    result_id={game.result_id}
                    winner_id={game.winner_id}
                    loser_id={game.loser_id}
                    organiser_name={game.first_name}
                    opponent_name={this.state.current_username}
                    organiser_id={game.organiser_id}
                    opponent_id={game.opponent_id}
                    game_date={game.game_date}
                    handleEdit={game.handleEdit}
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
