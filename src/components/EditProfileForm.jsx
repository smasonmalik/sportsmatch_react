import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import styles from './css/SignupForm.module.css'

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: {},
      isProfileEdited: false
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.patchRequestBody = this.patchRequestBody.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.getPlayer()
  }

  getPlayer() {
    let self = this;
    axios({
      url: `/api/v1/players/${localStorage.getItem('user_id')}`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
    .then(function(response) {
      self.setState({
        player: response.data
      })
    })
    .then(function(error) {
      console.log(error)
    })
  }

  handleEdit() {
    let password = document.getElementById("password-input").value
    let password_confirm = document.getElementById("password-confirm-input").value
    if (password === password_confirm) {
        let self = this;
        axios({
          method: 'patch',
          url: "/api/v1/players/my_profile",
          headers: {
            "Content-Type": "application/json",
            "api-token": localStorage.getItem('jwtToken')
          },
          data: this.patchRequestBody()
        })
        .then(function() {
          self.setState(prevState => {
            return {isProfileEdited: !prevState.isProfileEdited}
          })
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      alert('Passwords don\'t match')
    }
  }

  patchRequestBody(){
    return({
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        gender: this.state.gender,
        ability: this.state.ability,
        sport: this.state.sport,
        bio: this.state.bio,
        postcode: this.state.postcode,
        dob: this.state.dob,
        password: this.state.password
      }
    )
  }

  handleChange(event) {
    const { name, value } = event.target
    if (value !== "") {
      this.setState({
        [name]: value
      })
    } if (value === ""){
      this.setState({
        [name]: undefined
      })
    }
  }

  dobValidation(e) {
    let min_dob = new Date(new Date().setFullYear(new Date().getFullYear() - 16))
    var element = document.getElementById("dob-input");
    if(Date.parse(e.target.value) > min_dob) {
      alert('You must be at least 16 to register on SportsMatch')
      element.classList.add("form-control-error");
    } else {
      element.classList.remove("form-control-error");
      this.handleChange(e)
    }
  }

  validateEmail(e) {
    var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    var element = document.getElementById("email-input");
    if (!(e.target.value).match(mailformat)) {
      element.classList.add("form-control-error");
    }
    else { element.classList.remove("form-control-error");
    this.handleChange(e)
    }
  }

  handlePasswordConfirm(e){
    let password = document.getElementById("password-input").value
    var element = document.getElementById("password-confirm-input");
    if (password !== e.target.value) {
      element.classList.add("form-control-error");
    } else {
      element.classList.remove("form-control-error")
      this.handleChange(e)
    }
  }

  render() {
    if (this.state.isProfileEdited) {
      return <Redirect to="/profile" />
    } else {
    return (
      <div className="form-container">
          <h4>Edit Profile</h4>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
            className="form-signup"
             >
            <div className="form-group">
              <label>First Name</label>
              <input
                id="first-name-input"
                name="first_name"
                placeholder={this.state.player.first_name}
                type="text"
                className="form-control"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                id="last-name-input"
                name="last_name"
                placeholder={this.state.player.last_name}
                type="text"
                className="form-control"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                id="email-input"
                name="email"
                placeholder={this.state.player.email}
                type="text"
                className="email form-control"
                // onChange={this.handleChange}
                onChange={e => this.validateEmail(e)}
              ></input>
            </div>
            <div className="form-group">
              <label> Bio </label>
              <input
                id="bio-name-input"
                name="bio"
                placeholder={this.state.player.bio}
                type="text"
                className="form-control"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label> DOB </label>
              <input
                id="dob-input"
                name="dob"
                placeholder={this.state.player.dob}
                type="date"
                className="form-control"
                onChange={e => this.dobValidation(e)}
              ></input>
            </div>
            <div className="form-group">
              <label> Postcode </label>
              <input
                id="postcode-input"
                name="postcode"
                placeholder={this.state.player.postcode}
                type="text"
                className="form-control"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label>Select ability:</label>
              <select
                id="ability-input"
                name="ability"
                placeholder={this.state.player.ability}
                type="select"
                className="form-control"
                onChange={this.handleChange}
              >
                <option value={this.state.player.ability}>{this.state.player.ability}</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div className="form-group">
              <label>Select main sport:</label>
              <select
                id="sport-input"
                name="sport"
                placeholder={this.state.player.sport}
                type="text"
                required="required"
                className="form-control"
                onChange={this.handleChange}
              >
                <option value="Tennis">Tennis</option>
                <option value="TableTennis">TableTennis</option>
                <option value="Squash">Squash</option>
                <option value="Badminton">Badminton</option>
                <option value="Snooker">Snooker</option>
                <option value="Climbing">Climbing</option>
              </select>
            </div>
            <div className="form-group">
              <label>Select gender:</label>
              <select
                id="gender-input"
                name="gender"
                placeholder={this.state.player.gender}
                type="text"
                className="form-control"
                onChange={this.handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="not_say">Rather Not Say</option>
              </select>
            </div>
            <div>
                <label>Password</label><br />
                <input
                  id="password-input"
                  name="password"
                  type="password"
                  className={`password ${styles.inputField}`}
                  required="required"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div>
                <label>Confirm password</label><br />
                <input
                  id="password-confirm-input"
                  name="password-confirm"
                  type="password"
                  className={`password ${styles.inputField}`}
                  required="required"
                  onChange={e => this.handlePasswordConfirm(e)}
                ></input>
              </div>
            <div className='row'>
              <div className='col'>
                <div className="form-group">
                  <button
                    name="edit"
                    type="submit"
                    className="edit-button btn btn-primary"
                    onClick={this.handleEdit}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )
    }

  }
}

export default EditProfileForm
