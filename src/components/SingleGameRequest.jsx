import React from 'react'
import { NavLink } from 'react-router-dom'
import GameStatusButton from './GameStatusButton'
import EditGameButton from './EditGameButton'
import styles from './css/SingleGameRequest.module.css'
import { IoIosMail } from 'react-icons/io'

class SingleGameRequest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: this.props.status,
      game_date: this.props.game_date,
      game_time: this.props.game_time
    }
    this.editGame = this.editGame.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.updateStatus = this.updateStatus.bind(this)
  }

  updateStatus(value) {
    this.setState({
      status: value
    })
  }

  handleEdit(date, time) {
    this.setState({
      game_date: date,
      game_time: time
    })
  }

  editGame(){
    if (this.state.status === "confirmed" || this.state.status === "pending"){
      return(
        <div className={styles.editGameButton}>
          <EditGameButton
            id={this.props.id}
            handleEdit={this.handleEdit}
          />
        </div>
        
      )
    }
  }

  render() {
    return (
      <li className="list-group-item" >
        <div className={`${styles.gameCardOutline}`}>
          <div className={` ${styles.gameCard}`}>
              <p className={styles.player}><strong>Opponent:</strong> {this.props.opponent_name}</p>
              <p className={styles.gameDate}><strong>Game Date:</strong> {this.state.game_date}</p>
              <p className={styles.gameDate}><strong>Game Time:</strong> {this.state.game_time}</p>
              <p className={styles.gameDate}><strong>Game Status:</strong> {this.state.status.charAt(0).toUpperCase() + this.state.status.slice(1)}</p>
              <div className={styles.gameButtons}>
                <GameStatusButton
                  id={this.props.id}
                  status={this.props.status}
                  organiser_id={this.props.organiser_id}
                  opponent_id={this.props.opponent_id}
                  updateStatus={this.updateStatus}
                />
              </div>
              {this.editGame()}
              <NavLink
                to={`/game/${this.props.id}/messages/${this.props.organiser_id}/${this.props.opponent_id}`}>
                <IoIosMail />  View Messages
              </NavLink>
          </div>
        </div>
      </li>
    )
  }
}
export default SingleGameRequest
