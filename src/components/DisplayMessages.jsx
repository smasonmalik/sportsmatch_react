import React from 'react';
import CreateMessage from './CreateMessage'
import SingleMessage from './SingleMessage'
import axios from 'axios'

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game_id: props.match.params.id,
      messageSent: false,
      messageData: []
    }
  }

  componentDidMount() {
    this.getMessages()
  }

  getMessages() {
    let self = this;
    axios({
      url: `/api/v1/messages/${this.props.match.params.id}`,
      headers: {
        'Content-Type': 'application/json',
        'api-token': localStorage.getItem('jwtToken')
      }
    })
    .then(function(response) {
      console.log(response.data)
      self.setState({
        messageData: response.data
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.messageSent !== prevState.messageSent) {
      this.getMessages()
    }
  }

  handleSubmitMessage() {
    this.setState(prevState => {
      return { messageSent: !prevState.messageSent }
    })
  }

  render() {
    return (
      <div>
        {this.state.messageData.map((message) => (
          <SingleMessage
            key={message.id}
            id={message.id}
            game_id={message.game_id}
            sender_id={message.sender_id}
            receiver_id={message.receiver_id}
            content={message.content}
          />
        ))}
        <CreateMessage id={this.state.game_id}/>
      </div>
    )
  }
}

export default DisplayMessages
