import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import styles from '../css/NewResult.module.css'

class NewResult extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      winner_id: "",
      loser_id: ""
    }
    this.onChangeWinner = this.onChangeWinner.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event){
    event.preventDefault();
    console.log(event.target.loser_id)

    axios({
      method: 'post',
      url: `/api/v1/results/${this.props.id}/new`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      },
      data:
      {
        winner_id: parseInt(this.state.winner_id),
        loser_id: parseInt(this.state.loser_id),
        result_confirmed: true,
        game_id: this.props.id
      }
    })
      .then(this.props.handleClick(parseInt(this.state.winner_id), parseInt(this.state.loser_id)))
      .catch(function(error) {
        console.log(error)
      })
  }

  onChangeWinner(event){
    if (parseInt(event.target.value) === this.props.organiser_id){
      this.setState({
        winner_id: event.target.value,
        loser_id: this.props.opponent_id
       })
    } else if (parseInt(event.target.value) === this.props.opponent_id) {
      this.setState({
        winner_id: event.target.value,
        loser_id: this.props.organiser_id
       })
    }
  }

  render() {
    const { organiser_name, opponent_name, organiser_id, opponent_id } = this.props
      return (
        <div style={{marginTop: '8px'}}>
          <form onSubmit={this.onSubmit}>
            <div>
              <select
                className="custom-select"
                name="winner_result"
                id="winner"
                style={{width: '90%'}}
                onChange={(event) => this.onChangeWinner(event)}>
                  <option disabled selected value>Select winner...</option>
                  <option value={organiser_id}>{organiser_name}</option>
                  <option value={opponent_id}>{opponent_name}</option>
              </select>
            </div>
        <button id="add-result" type="submit" className={`btn custom-button mt-3 ${styles.newResultButton}`} >
          Add Result
        </button>
        </form>
      </div>
    )
  }
}
export default NewResult
