import React from 'react'
import axios from 'axios'

class PlayerProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: null
    }
    this.getPlayer = this.getPlayer.bind(this)
  }

  componentDidMount() {
    this.getPlayer()
  };

  getPlayer() {
    let self = this;
    axios({
      url: `/api/v1/players/${this.props.match.params.id}`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
      .then(function(response) {
        console.log(response.data)
        self.setState({
          player: response.data
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return (
        <h1></h1>
    )
  }
}

export default PlayerProfile
