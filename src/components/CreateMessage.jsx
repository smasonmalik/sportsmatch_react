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
        organiser_id: this.props.organiser_id,
        opponent_id: this.props.opponent_id,
        sender_id: localStorage.getItem('user_id'),
        content: document.getElementById("content-input").value
      }
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
<<<<<<< HEAD
export default CreateMessage;
=======

export default CreateMessage;

>>>>>>> 23c83291375b84e32fe7b7c28a10cb0479d6dfdd
