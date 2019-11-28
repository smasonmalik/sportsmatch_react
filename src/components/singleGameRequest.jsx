import React from 'react'
import { NavLink } from 'react-router-dom'
import ConfirmGameButton from './ConfirmGameButton'

class Request extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
            <p className="card-text">Organiser id: {this.props.organiser_id}</p>
            <p className="card-text">Opponent id: {this.props.opponent_id}</p>
            <p className="card-text">Game Date: {this.props.game_date}</p>
            <p className="card-text">Game Time: {this.props.game_time}</p>
            <p className="card-text"><ConfirmGameButton id={this.props.id} confirmed={this.props.confirmed} handleGameRefresh={this.props.handleGameRefresh}/></p>
          </div>
        </div>
    )
  }
}
export default Request

// {this.props.confirmed ? "Confirmed" : "Unconfirmed"}
