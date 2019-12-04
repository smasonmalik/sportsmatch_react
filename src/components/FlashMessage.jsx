import React from 'react'
import styles from './css/FlashMessage.module.css'
// import Bus from '../Utils/Bus'

class FlashMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: props.message,
    }
  }

  render() {
    return (
      <div className={styles.alert}>
          <span className={styles.close}><strong>X</strong></span>
          <p>{this.state.message}</p>
      </div>
    )
  }
}

export default FlashMessage
