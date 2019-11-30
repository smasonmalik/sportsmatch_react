import React from 'react'
import { NavLink } from 'react-router-dom'

class Player extends React.Component {
  render() {
    return (
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{this.props.firstName}</h5>
          <p className="card-text">{this.props.ability}</p>
          <p className="card-text">{this.props.gender}</p>
          <NavLink className="view-profile btn btn-primary" to={`/player/${this.props.id}`}>View Profile</NavLink>
        </div>
      </div>
    )
  }
}
export default Player
