import React from 'react'

class SinglePastGame extends React.Component {

  render() {
    return (
      <li className="list-group-item">
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
              <p className="card-text">Game id: {this.props.game_id}</p>
              <p className="card-text">Organiser id: {this.props.organiser_id}</p>
              <p className="card-text">Opponent id: {this.props.opponent_id}</p>
              <p className="card-text">Game Date: {this.props.game_date}</p>
              <p className="card-text">Game Time: {this.props.game_time}</p>
          </div>
        </div>
      </li>
    )
  }
}

export default SinglePastGame;