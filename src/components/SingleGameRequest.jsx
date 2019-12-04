import React from 'react'
import { NavLink } from 'react-router-dom'
import GameStatusButton from './GameStatusButton'
import EditGameButton from './EditGameButton'

class SingleGameRequest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: this.props.status
    }
    this.editGame = this.editGame.bind(this)
    this.updateStatus = this.updateStatus.bind(this)
  }

  updateStatus(value) {
    this.setState({
      status: value
    })
  }

  editGame(){
    if (this.state.status === "confirmed" || this.state.status === "pending"){
      return(  
        <EditGameButton
            id={this.props.id}
            handleEdit={this.props.handleEdit}
        />
      )
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
              <p className="card-text"><strong>Game Status:</strong> {this.state.status.charAt(0).toUpperCase() + this.state.status.slice(1)}</p>
              <GameStatusButton
                id={this.props.id}
                status={this.props.status}
                organiser_id={this.props.organiser_id}
                opponent_id={this.props.opponent_id}
                updateStatus={this.updateStatus}
              />
              {this.editGame()}
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

