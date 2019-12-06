import React from 'react'
import styles from './css/SingleMessage.module.css'
import Moment from 'react-moment';

class SingleMessage extends React.Component {
  constructor(props) {
    super(props)
    this.showMessageDetails = this.showMessageDetails.bind(this)
  }

  showMessageDetails() {
    var dateTime = this.props.created_at
    
    if (this.props.sender_id === this.props.organiser_id) {
      return (
      <div className={styles.userDetails}>
        {this.props.organiser}: <Moment fromNow date={dateTime} />
      </div>
      )
      
    } else {
      return(
        <div>
          <div >{this.props.opponent}: <Moment fromNow date={dateTime} /></div>
        </div>
      ) 
    }
  }

  render() {
    if (this.props.sender_id === parseInt(localStorage.getItem('user_id'))) {
      return (
        <div className={styles.speech}>
          <div className={styles.speechBubbleUser}>
            <p>{this.props.content}</p>
          </div>
          <p className={styles.name}>{this.showMessageDetails()}</p>
        </div>
      )
    } else {
      return (
        <div className={styles.speech}>
          <div className={styles.speechBubbleOpponent}>
            <p>{this.props.content}</p>
          </div>
          <p className={styles.name}>{this.showMessageDetails()}</p>
        </div>
      )
    }
  }
}
export default SingleMessage;
