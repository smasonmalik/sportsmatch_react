import React from 'react'
import { Link } from "react-router-dom"
import styles from './css/SingleResult.module.css'


class SingleResult extends React.Component {
  constructor(props) {
    super(props)
    this.result = this.result.bind(this);
  }

  result() {
    if (this.props.winner_id === parseInt(localStorage.getItem('user_id'))) {
      return (
        <div className={styles.resultWin}>
          <div>
            <div className='row'>
              <div className={`col-4 ${styles.col}`}>
                <p className={styles.player}>{this.props.organiser_name}</p>
              </div>
              <div className={`col-4 ${styles.col}`}>
                <p style={{fontSize: '12px', fontWeight: 'bold'}}>VS.</p>
              </div>
              <div className={`col-4 ${styles.col}`}>
                <p className={styles.player}>{this.props.opponent_name}</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-6'>
                <p><strong>You Won!</strong></p>
              </div>
              <div className='col-6'>
                <p className={styles.gameDate}>Game Date: {this.props.game_date}</p>
              </div>
            </div>
          </div>
        </div>

      )
    } else if (this.props.loser_id === parseInt(localStorage.getItem('user_id'))) {
      return (
        <div className={styles.resultLose}>
          <div>
            <div className='row'>
              <div className={`col-4 ${styles.col}`}>
                <p className={styles.player}>{this.props.organiser_name}</p>
              </div>
              <div className={`col-4 ${styles.col}`}>
                <p style={{fontSize: '12px', fontWeight: 'bold'}}>VS.</p>
              </div>
              <div className={`col-4 ${styles.col}`}>
                <p className={styles.player}>{this.props.opponent_name}</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-6'>
                <p><strong>You Lost!</strong></p>
              </div>
              <div className='col-6'>
                <p className={styles.gameDate}>Game Date: {this.props.game_date}</p>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={styles.resultUndecided}>
          <div>
          <div className='row'>
            <div className={`col-4 ${styles.col}`}>
              <p className={styles.player}>{this.props.organiser_name}</p>
            </div>
            <div className={`col-4 ${styles.col}`}>
              <p style={{fontSize: '12px', fontWeight: 'bold'}}>VS.</p>
            </div>
            <div className={`col-4 ${styles.col}`}>
              <p className={styles.player}>{this.props.opponent_name}</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <p><strong>Confirmation pending...</strong></p>
            </div>
            <div className='col-6'>
              <p className={styles.gameDate}>Game Date: {this.props.game_date}</p>
            </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    if ((parseInt(localStorage.getItem('user_id')) === this.props.organiser_id) && (this.props.loser_id == null)) {
      return (
        <div className={styles.resultUndecided}>
          <div>
          <div className='row'>
            <div className={`col-4 ${styles.col}`}>
              <p className={styles.player}>{this.props.organiser_name}</p>
            </div>
            <div className={`col-4 ${styles.col}`}>
              <p style={{fontSize: '12px', fontWeight: 'bold'}}>VS.</p>
            </div>
            <div className={`col-4 ${styles.col}`}>
              <p className={styles.player}>{this.props.opponent_name}</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
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
            <div className='col-6'>
              <p className={styles.gameDate}>Game Date: {this.props.game_date}</p>
            </div>
            </div>
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
