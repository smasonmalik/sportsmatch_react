import React from 'react'
import { Link } from "react-router-dom"

class SingleResult extends React.Component {
  constructor(props) {
    super(props)
    this.winnerName = this.winnerName.bind(this);
    this.loserName = this.loserName.bind(this);
  }

  winnerName() {
    if (this.props.winner_id === this.props.organiser_id) {
      return (<p className="card-text">Winner: {this.props.organiser_name}</p>)
    }
    if (this.props.winner_id === this.props.opponent_id) {
      return (<p className="card-text">Winner: {this.props.opponent_name}</p>)
    }
  }

  loserName() {
    if (this.props.loser_id === this.props.organiser_id) {
      return (<p className="card-text">Loser: {this.props.organiser_name}</p>)
    }
    if (this.props.loser_id === this.props.opponent_id) {
      return (<p className="card-text">Loser: {this.props.opponent_name}</p>)
    }
  }

  render() {
    if ((localStorage.getItem('user_id') === this.props.organiser_id) && (this.props.loser_id == null) ) {
      return (
        <li className="list-group-item">
          <div className="card" style={{width: '18rem'}}>
            <div className="card-body">

                <p className="card-text">{this.props.organiser_name} VS. {this.props.opponent_name}</p>
                <p className="card-text">Game Date: {this.props.game_date}</p>
                <Link to={{
                  pathname: `/results/${this.props.id}/new`,
                  state: {
                    organiser_name: this.props.organiser_name,
                    organiser_id: this.props.organiser_id,
                    opponent_name: this.props.opponent_name,
                    opponent_id: this.props.opponent_id
                  }
                }} className="btn custom-button">
                Add Game Result</Link>
            </div>
          </div>
        </li>
      )
    } else {
      return (
        <li className="list-group-item">
          <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <p className="card-text">{this.props.organiser_name} VS. {this.props.opponent_name}</p>
                <p className="card-text">Game Date: {this.props.game_date}</p>
                {this.winnerName()}
                {this.loserName()}
            </div>
          </div>
        </li>
      )
    }
  }
}
export default SingleResult
