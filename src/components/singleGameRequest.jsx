import React from 'react'
import { NavLink } from 'react-router-dom'
import ConfirmGameButton from './ConfirmGameButton'
import EditGameButton from './EditGameButton'

class Request extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="list-group-item">
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
              <p className="card-text">Organiser id: {this.props.organiser_id}</p>
              <p className="card-text">Opponent id: {this.props.opponent_id}</p>
              <p className="card-text">Game Date: {this.props.game_date}</p>
              <p className="card-text">Game Time: {this.props.game_time}</p>
              <ConfirmGameButton
                id={this.props.id}
                confirmed={this.props.confirmed}
                organiser_id={this.props.organiser_id}
              />
              <EditGameButton />
          </div>
        </div>
      </li>
    )
  }
}
export default Request

// {this.props.confirmed ? "Confirmed" : "Unconfirmed"}
