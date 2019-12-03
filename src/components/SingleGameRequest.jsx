import React from 'react'
import { NavLink } from 'react-router-dom'
import ConfirmGameButton from './ConfirmGameButton'
import EditGameButton from './EditGameButton'
import DeclineGameButton from './DeclineGameButton'

class SingleGameRequest extends React.Component {
  constructor(props) {
    super(props)
    this.showConfirmation = this.showConfirmation.bind(this)
  }

  showConfirmation() {
    if (this.props.organiser_id === parseInt(localStorage.getItem('user_id'))) {
      return (this.props.confirmed === "confirmed" ? "Game Confirmed..." : "Confirmation Pending...")
    }
  }

  render() {
    return (
      <li className="list-group-item">
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
              <p className="card-text"><strong>Opponent:</strong> {this.props.opponent_name}</p>
              <p className="card-text"><strong>Game Date:</strong> {this.props.game_date}</p>
              <p className="card-text"><strong>Game Time:</strong> {this.props.game_time}</p>
              <ConfirmGameButton
                id={this.props.id}
                status={this.props.status}
                organiser_id={this.props.organiser_id}
                opponent_id={this.props.opponent_id}
              />
              <DeclineGameButton
                organiser_id={this.props.organiser_id}
                handleDecline={this.props.handleDecline}
                id={this.props.id}
              />
              <EditGameButton
                id={this.props.id}
                handleEdit={this.props.handleEdit}
              />
              {this.showConfirmation()}
              <NavLink
                to={`/game/${this.props.id}/messages/${this.props.organiser_id}/${this.props.opponent_id}`}>
                View Messages
              </NavLink>
          </div>
        </div>
      </li>
    )
  }
}
export default SingleGameRequest

// {this.props.confirmed ? "Confirmed" : "Unconfirmed"}
