import React from 'react'
import EditResultButton from './EditResultButton'
import { Link } from "react-router-dom"

class SingleResult extends React.Component {

  render() {
    return (
      <li className="list-group-item">
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
              <p className="card-text">Game id: {this.props.id}</p>
              <p className="card-text">Result id: {this.props.result_id}</p>
              <p className="card-text">Winner id: {this.props.winner_id}</p>
              <p className="card-text">Loser id: {this.props.loser_id}</p>
              <p className="card-text">Organiser ID: {this.props.organiser_id}</p>
              <p className="card-text">Opponent ID: {this.props.opponent_id}</p>
              <p className="card-text">Game Date: {this.props.game_date}</p>

              <Link to={`/results/${this.props.id}/new`} className="btn custom-button">
              Create New Results</Link>
          </div>
        </div>
      </li>
    )
  }
}
export default SingleResult

// <EditResultButton
// id={this.props.id}
// handleEdit={this.props.handleEdit}
// />
