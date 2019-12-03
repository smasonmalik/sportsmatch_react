import React from 'react'
import axios from 'axios'

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
        <form>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Message..."
              id="content-input"
              name="content" />
            <button onClick={this.handleSend}>Send</button>
          </div>
        </form>
    )
  }
}
export default CreateMessage;
