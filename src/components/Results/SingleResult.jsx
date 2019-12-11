import React from 'react'
import { Link } from "react-router-dom"
import styles from './css/SingleResult.module.css'
import NewResult from './NewResult'


class SingleResult extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAddResult: true,
      winner_id: this.props.winner_id,
      loser_id: this.props.loser_id
    }
    this.result = this.result.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(winner, loser) {
    this.setState({
      winner_id: winner,
      loser_id: loser
    })
  }

  result() {
    console.log(12345)
    if (this.state.winner_id === parseInt(localStorage.getItem('user_id'))) {
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
    } else if (this.state.loser_id === parseInt(localStorage.getItem('user_id'))) {
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
    if ((parseInt(localStorage.getItem('user_id')) === this.props.organiser_id) && (this.state.loser_id == null)) {
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
              <p className={styles.gameDate}>Game Date: {this.props.game_date}</p>
            </div>
            </div>
            {this.state.showAddResult ?
              <NewResult
                id={this.props.id}
                organiser_name={this.props.organiser_name}
                organiser_id={this.props.organiser_id}
                opponent_name={this.props.opponent_name}
                opponent_id={this.props.opponent_id}
                handleClick={this.handleClick}
              /> :
              null}
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
