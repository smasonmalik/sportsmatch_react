import React from 'react'
import EditResultButton from './EditResultButton'
import { Link } from "react-router-dom"
import NewResult from "./NewResult"

class SingleResult extends React.Component {

  render() {
    if (localStorage.getItem('user_id') == this.props.organiser_id) {
      return (
        <li className="list-group-item">
          <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <p className="card-text">{this.props.organiser_name} VS. {this.props.opponent_name}</p>
                <p className="card-text">Game Date: {this.props.game_date}</p>
                <p className="card-text">Game id: {this.props.id}</p>
                <p className="card-text">Winner id: {this.props.winner_id}</p>
                <p className="card-text">Loser id: {this.props.loser_id}</p>
                <p className="card-text">Organiser ID: {this.props.organiser_id}</p>
                <p className="card-text">Opponent ID: {this.props.opponent_id}</p>
                <Link to={`/results/${this.props.id}/new`} className="btn custom-button">
                Create New Result</Link>
            </div>
          </div>
        </li>
      )
    } else {
      return (
        <li className="list-group-item">
          <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <p className="card-text">{this.props.organiser_name} VS. {this.props.opponent_name}</p>
                <p className="card-text">Game Date: {this.props.game_date}</p>
                <p className="card-text">Game id: {this.props.id}</p>
                <p className="card-text">Winner id: {this.props.winner_id}</p>
                <p className="card-text">Loser id: {this.props.loser_id}</p>
                <p className="card-text">Organiser ID: {this.props.organiser_id}</p>
                <p className="card-text">Opponent ID: {this.props.opponent_id}</p>
            </div>
          </div>
        </li>
      )
    }
  }
}
export default SingleResult
