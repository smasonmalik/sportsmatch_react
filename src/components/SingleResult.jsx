import React from 'react'
import { Link } from "react-router-dom"
import styles from './css/SingleResult.module.css'


class SingleResult extends React.Component {
  constructor(props) {
    super(props)
    this.result = this.result.bind(this);
  }

  // winnerName() {
  //   if (this.props.winner_id === this.props.organiser_id) {
  //     return (<p>Winner: {this.props.organiser_name}</p>)
  //   }
  //   if (this.props.winner_id === this.props.opponent_id) {
  //     return (<p>Winner: {this.props.opponent_name}</p>)
  //   }
  // }
  //
  // loserName() {
  //   if (this.props.loser_id === this.props.organiser_id) {
  //     return (<p>Loser: {this.props.organiser_name}</p>)
  //   }
  //   if (this.props.loser_id === this.props.opponent_id) {
  //     return (<p>Loser: {this.props.opponent_name}</p>)
  //   }
  // }

  result() {
    if (this.props.winner_id === parseInt(localStorage.getItem('user_id'))) {
      return (
        <div className={styles.resultWin}>
          <div>
            <p>{this.props.organiser_name} VS. {this.props.opponent_name}</p>
            <p>Game Date: {this.props.game_date}</p>
            <p>You Won!</p>
          </div>
        </div>
      )
    } else if (this.props.loser_id === parseInt(localStorage.getItem('user_id'))){
      return (
        <div className={styles.resultLose}>
          <div>
            <p>{this.props.organiser_name} VS. {this.props.opponent_name}</p>
            <p>Game Date: {this.props.game_date}</p>
            <p>Waiting for result confirmation...</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className={styles.resultUndecided}>
          <div>
            <p>{this.props.organiser_name} VS. {this.props.opponent_name}</p>
            <p>Game Date: {this.props.game_date}</p>
            <p>Waiting for result confirmation...</p>
          </div>
        </div>
      )
    }
  }

  render() {
    if ((parseInt(localStorage.getItem('user_id')) === this.props.organiser_id) && (this.props.loser_id == null)) {
      return (
        <div>
          <div>
            <p>{this.props.organiser_name} VS. {this.props.opponent_name}</p>
            <p>Game Date: {this.props.game_date}</p>
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
      )
    } else {
      return (
        <div>
          {this.result()}
        </div>
      )
    }
  }
}
export default SingleResult
