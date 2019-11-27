import React from 'react'
import axios from 'axios'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: []
    }
  }

  componentDidMount() {
    this.getPlayer()
  }

  getPlayer() {
    let self = this;
    axios({
      url: `/api/v1/players/${this.props.user_id}`,
      headers: {
        "Content-Type": "application/json",
        "api-token": self.props.authToken
      }
    })
    .then(function(response) {
      console.log(response.data)
      self.setState({player: response.data})
    })
    .then(function(error) {
      console.log(error)
    })
  }

  render() {
    return (
      <div class="card" style={{width: '18rem'}}>
        <div class="card-body">
          <h5 class="card-title">{this.state.player.first_name}</h5>
          <p class="card-text">{this.state.player.ability}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{this.state.player.gender}</li>
          <li class="list-group-item">{this.state.player.dob}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    )
  }
}

export default Profile
