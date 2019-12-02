import React from 'react'
import axios from 'axios'
import GameRequestForm from './GameRequestForm'


class PlayerProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: [],
      playerAge: null,
      profile_photo: process.env.PUBLIC_URL + "/avatar.png"
    }
    this.getPlayer = this.getPlayer.bind(this);
    this.getPhoto = this.getPhoto.bind(this);
  }

  componentDidMount() {
    this.getPlayer()
    this.getPhoto()
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

  getPhoto() {
    let self = this;
    axios({
      url: `/api/v1/players/${self.props.match.params.id}/image`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
    .then(function(response) {
      if (response.data.profile_image) {
        self.setState({ profile_photo: response.data.profile_image })
      }
    })
    .catch(function(error) {
      console.log(error)
    })
  }


  getAgeBracket() {
    if (this.state.playerAge > 16 && this.state.playerAge <= 19) {
      return (<p className="card-text">16 - 19 years</p>)
    } else if (this.state.playerAge > 19 && this.state.playerAge <= 29) {
      return (<p className="card-text">20 - 29 years</p>)
    } else if (this.state.playerAge > 29 && this.state.playerAge <= 39) {
      return (<p className="card-text">30 - 39 years</p>)
    } else if (this.state.playerAge > 39 && this.state.playerAge <= 49) {
      return (<p className="card-text">40 - 49 years</p>)
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
          <img className="align-self-start mr-3" className="rounded mx-auto d-block" src={this.state.profile_photo} alt="Profile" style={{width: '10rem'}}></img>
            <h5 className="card-title">{this.state.player.first_name}</h5>
            <p className="card-text">{this.state.player.ability}</p>
            <p className="card-text">{this.state.player.gender}</p>
            <p className="card-text">{this.state.player.bio}</p>
            <p className="card-text">{this.state.player.sport}</p>
            {this.getAgeBracket()}
            <GameRequestForm opponent_id={this.state.player.id} />
          </div>
        </div>
    )
  }
}

export default PlayerProfile
