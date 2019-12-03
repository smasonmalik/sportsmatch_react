import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

class NewResult extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      winner_id: "",
      loser_id: "",
      result_confirmed: false,
      game_id: props.id
    }
    this.onChangeWinner = this.onChangeWinner.bind(this)
    this.onChangeLoser = this.onChangeLoser.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event){
    event.preventDefault();
    console.log(event.target.loser_id)
    const { winner_id, loser_id, result_confirmed, game_id } = this.state;

    let self = this;
    axios({
      method: 'post',
      url: `/api/v1/results/${this.props.match.params.id}/new`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      },
      data:
      {
        winner_id: parseInt(this.state.winner_id),
        loser_id: parseInt(this.state.loser_id),
        result_confirmed: true,
        game_id: this.props.match.params.id
      }
    })
      .then(response => this.props.history.push(`/results`))
      .catch(function(error) {
        console.log(error)
      })
  }

  onChangeWinner(event){
    this.setState({ winner_id: event.target.value })
    console.log(event.target.value)
  }

  onChangeLoser(event){
    this.setState({ loser_id: event.target.value })
  }

  render() {
    const { organiser_name, opponent_name, organiser_id, opponent_id } = this.props.location.state
      return (

      <div>
        <h2 align="center">My Results</h2>
        {this.state.game_id}
        <div class="container">
          <div class="row">
            <h3>Add a new result!</h3>
              <form onSubmit={this.onSubmit}>
                <div className="col">
                    <label className="label">Winner:</label>
                    {this.state.winner_id}
                    <select className="custom-select" name="winner_result" id="winner" onChange={(event) => this.onChangeWinner(event)}>
                        <option value={organiser_id}>{organiser_name}</option>
                        <option value={opponent_id}>{opponent_name}</option>
                    </select>
                </div>
                <div className="col">
                    <label className="label">Loser:</label>
                    <select className="custom-select" name="loser_result" id="loser" onChange={(event) => this.onChangeLoser(event)}>
                        <option value={organiser_id}>{organiser_name}</option>
                        <option value={opponent_name}>{opponent_name}</option>
                    </select>
                </div>
            <button type="submit" className="btn custom-button mt-3">
              Add Result
            </button>
            <Link to="/results" className="btn btn-link mt-3">
              Back to Results
            </Link>
            </form>
          </div>
        </div>
      </div>
    )
    }
  }


export default NewResult
