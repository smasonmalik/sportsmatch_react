import React from 'react'
import ConfirmGameButton from './ConfirmGameButton'
import EditGameButton from './EditGameButton'
import DeclineGameButton from './DeclineGameButton'

class Request extends React.Component {

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
              <DeclineGameButton
                organiser_id={this.props.organiser_id}
                handleDecline={this.props.handleDecline}
                id={this.props.id}
              />
              <EditGameButton id={this.props.id} handleEdit={this.props.handleEdit}/>
          </div>
        </div>
      </li>
    )
  }
}
export default Request

// {this.props.confirmed ? "Confirmed" : "Unconfirmed"}
