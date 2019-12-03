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
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event){
    event.preventDefault();
    const { winner_name, loser_name, result_confirmed, game_id } = this.state;

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
        winner_id: parseInt(document.getElementById("winner_name").value),
        loser_id: parseInt(document.getElementById("loser_name").value),
        result_confirmed: true,
        game_id: this.props.match.params.id
      }
    })
      .then(response => this.props.history.push(`/results`))
      .catch(function(error) {
        console.log(error)
      })
  }

  onChange(event){
    this.setState({ [event.target.name]: event.target.value })
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
                    <select className="custom-select" name="result" id="winner" onChange={this.onChange}>
                        <option value="OrganiserName">{organiser_name}</option>
                        <option value="OpponentName">{opponent_name}</option>
                    </select>
                </div>
                <div className="col">
                    <label className="label">Loser:</label>
                    <select className="custom-select" name="result" id="loser" onChange={this.onChange}>
                        <option value="OrganiserName">{organiser_name}</option>
                        <option value="OpponentName">{opponent_name}</option>
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
