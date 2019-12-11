import React from 'react'
import axios from 'axios'
import styles from '../css/CreateMessage.module.css'

class CreateMessage extends React.Component {
  constructor(props) {
    super(props)
    this.handleSend = this.handleSend.bind(this)
  }
  handleSend() {
    let self = this;
    axios({
      method: 'post',
      url: '/api/v1/messages/',
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      },
      data: {
        game_id: this.props.id,
        sender_id: localStorage.getItem('user_id'),
        content: document.getElementById("content-input").value,
        organiser_id: this.props.organiser_id,
        opponent_id: this.props.opponent_id
      }
    })
    .then(function(response) {
      console.log(response)
    })
    .then(function() {
      self.props.handleSubmitMessage()
    })
    .catch(function(error) {
      console.log(error)
    })
  }
  render() {
    return (
      <div className={styles.formDiv}>
        <hr/>
        <form>
          <div className="form-group">
            <div className='row'>
              <div className={`col-2`}>
                <button onClick={this.handleSend} className={styles.send}>Send</button>
              </div>
              <div className={`col-10 ${styles.textBox}`}>
                <input
                  className={`form-control ${styles.text}`}
                  type="text"
                  placeholder="Message..."
                  id="content-input"
                  name="content"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default CreateMessage;
