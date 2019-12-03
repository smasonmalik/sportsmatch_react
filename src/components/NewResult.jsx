import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

class NewResult extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      winner_name: "",
      loser_name: "",
      result_confirmed: false
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event){
    event.preventDefault();
    const { winner_name, loser_name, result_confirmed, result_id } = this.state;
    const body = { winner_name, loser_name, result_id }

    let self = this;
    axios({
      method: 'post',
      url: `/api/v1/results/${this.props.match.params.id}/new`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      },
      // data:
      // {
      //   winner_name: document.getElementById("winner_name-input").value,
      //   loser_name: document.getElementById("loser_name-input").value
      // }
      body: JSON.stringify(body)
    })
      .then(response => {
        response.json()
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
      return (
      <div>
        <h2 align="center">My Results</h2>
        <div class="container">
          <div class="row">
            <h3>Add a new result!</h3>
              <form onSubmit={this.onSubmit}>
              <div className="form-group">
              <label htmlFor="winnerName">Winner name</label>
              <input
                type="text"
                name="winnerName"
                id="winner_name"
                className="form-control"
                required
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="loserName">Loser Name</label>
              <input
                type="text"
                name="loserName"
                id="loser_name"
                className="form-control"
                required
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn custom-button mt-3">
              Add Result
            </button>
            <Link to="/results" className="btn btn-link mt-3">
              Back to results
            </Link>
            </form>
          </div>
        </div>
      </div>
    )
    }
  }


export default NewResult
