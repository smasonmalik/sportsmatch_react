import React from 'react'
import styles from '../css/FlashMessage.module.css'

class FlashMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: props.message,
      type: props.type
    }
  }

  render() {
    if (this.state.type === 'error') {
      return (
        <div className={styles.alert, styles.error}>
            <span className={styles.close}><strong>X</strong> {this.state.message}</span>
        </div>
      )
    } else {
      return (
        <div className={styles.alert, styles.success}>
            <span className={styles.close}><strong>X</strong> {this.state.message}</span>
        </div>
      )
    }
  }
}

export default FlashMessage
