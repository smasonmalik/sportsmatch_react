import React from 'react'
import { NavLink } from 'react-router-dom'
import PlayerProfile from './PlayerProfile'

class Player extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{this.props.firstName}</h5>
          <p className="card-text">{this.props.ability}</p>
          <p className="card-text">{this.props.gender}</p>
          <NavLink className="btn btn-primary" to={`/player/${this.props.id}`}>View Profile</NavLink>
        </div>
      </div>
    )
  }
}
export default Player
