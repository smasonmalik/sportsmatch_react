import React from 'react'
import styles from './css/SingleMessage.module.css'

class SingleMessage extends React.Component {
  constructor(props) {
    super(props)
    this.showName = this.showName.bind(this)
  }
  showName() {
    if (this.props.sender_id === this.props.organiser_id) {
      return this.props.organiser
    } else {
      return this.props.opponent
    }
  }
  render() {
    if (this.props.sender_id === parseInt(localStorage.getItem('user_id'))) {
      return (
        <div className={styles.speech}>
          <div className={styles.speechBubbleUser}>
            <p>{this.props.content}</p>
          </div>
          <p className={styles.userName}>{this.showName()}</p>
        </div>
      )
    } else {
      return (
        <div className={styles.speech}>
          <div className={styles.speechBubbleOpponent}>
            <p>{this.props.content}</p>
          </div>
          <div>
          <p className={styles.opponentName}>{this.showName()}</p>
          </div>
        </div>
      )
    }
  }
}
export default SingleMessage;
