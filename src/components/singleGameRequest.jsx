import React from 'react'
import { NavLink } from 'react-router-dom'

class Request extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
            <p className="card-text">Opponent: {this.props.opponent_id}</p>
            <p className="card-text">Game Date: {this.props.game_date}</p>
            <p className="card-text">Game Time: {this.props.game_time}</p>
            <p className="card-text">{this.props.confirmed ? "Confirmed" : "Unconfirmed"}</p>
          </div>
        </div>
    )
  }
}
export default Request
