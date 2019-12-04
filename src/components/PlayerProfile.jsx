import React from 'react'
import axios from 'axios'
import GameRequestForm from './GameRequestForm'
import styles from './css/PlayerProfile.module.css'

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
      return (<p className={styles.profileText}>Age: 16 - 19 </p>)
    } else if (this.state.playerAge > 19 && this.state.playerAge <= 29) {
      return (<p className={styles.profileText}>Age: 20 - 29 </p>)
    } else if (this.state.playerAge > 29 && this.state.playerAge <= 39) {
      return (<p className={styles.profileText}>Age: 30 - 39 </p>)
    } else if (this.state.playerAge > 39 && this.state.playerAge <= 49) {
      return (<p className={styles.profileText}>Age: 40 - 49</p>)
    } else if (this.state.playerAge > 50) {
      return (<p className={styles.profileText}>Age: 50+ years</p>)
    } else {
      return <span></span>
    }
  }

  getGender() {
    if (this.state.player.gender === "Male" || this.state.player.gender === "Female")
      return (<p className={styles.profileText}>Gender: {this.state.player.gender}</p>)
      else {
        return <span></span>
      }
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className={`container col-lg-6 col-md-4 col-sm-6 ${styles.profileContainer}`}>
          <h2 className={styles.title}>Profile Page</h2>
          <h5 className={styles.profileNameText}>{this.state.player.first_name}</h5>
          <img className={styles.profilePicture} src={this.state.profile_photo} alt="Profile" ></img>
          {this.getAgeBracket()}
          <p className={styles.profileText}>Skill Level: {this.state.player.ability}</p>
          <p className={styles.profileText}>Location: {this.state.player.location}</p>
          <p className={styles.profileText}>Sport: {this.state.player.sport}</p>
          {this.getGender()}
          <p className={styles.profileText}>Bio: {this.state.player.bio}</p>
        </div>
        <div className={`col-lg-3 col-md-4 col-sm-6 ${styles.requestContainer}`}>
          <GameRequestForm opponent_id={this.state.player.id} />
        </div>
    </div>
    </div> 
    )
  }
}

export default PlayerProfile

{/* <div className="container">
  <div className="row">
    <div className="col">
      1 of 3
    </div>
    <div className="col-5">
      2 of 3 (wider)
    </div>
    <div className="col">
      3 of 3
    </div>
  </div>
</div> */}


 