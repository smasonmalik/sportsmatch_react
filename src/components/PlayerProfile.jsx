import React from 'react'
import axios from 'axios'
import GameRequestForm from './GameRequestForm'


class PlayerProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: [],
      playerAge: null
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
        let birthDate = response.data.dob
        let birthYear = birthDate.substring(0,4)
        let year = new Date().getFullYear()
        let age = year - parseInt(birthYear)
        self.setState({
          player: response.data,
          playerAge: age
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  getAgeBracket() {
    if (this.state.playerAge > 16 && this.state.playerAge <= 19) {
      return (<p className="card-text">16 - 19 years</p>)
    } else if (this.state.playerAge > 19 && this.state.playerAge <= 25) {
      return (<p className="card-text">20 - 25 years</p>)
    } else if (this.state.playerAge > 25 && this.state.playerAge <= 35) {
      return (<p className="card-text">26 - 35 years</p>)
    } else if (this.state.playerAge > 35 && this.state.playerAge <= 50) {
      return (<p className="card-text">35 - 50 years</p>)
    } else if (this.state.playerAge > 50) {
      return (<p className="card-text">50+ years</p>)
    } else {
      return <span></span>
    }
  }

  render() {
    return (
        <div className="card text-center">
          <div className="card-header">
            Player Profile
          </div>
          <div className="card-body">
            <h5 className="card-title">{this.state.player.first_name}</h5>
            <p className="card-text">{this.state.player.ability}</p>
            <p className="card-text">{this.state.player.gender}</p>
            {this.getAgeBracket()}
            <GameRequestForm opponent_id={this.state.player.id} />
          </div>
        </div>
    )
  }
}

export default PlayerProfile
