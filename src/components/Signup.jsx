import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedUp: false,
      selectedFile: ''
    }
    this.handleSignup = this.handleSignup.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
  }

  handlePasswordConfirm(e){
    let password = document.getElementById("password-input").value
    let password_confirm = document.getElementById("password-confirm-input").value
    if (password !== password_confirm) {
      console.log("passwords don't match")
    }
  }

  handleSelectedFile(event) {
    console.log(event)
    console.log(event.target.files)
    this.setState (
      {
      file: event.target.files[0]
      }
    )
  }

  handleSignup(e) {
    e.preventDefault();
    let password = document.getElementById("password-input").value
    let password_confirm = document.getElementById("password-confirm-input").value
    if (password === password_confirm) {
      let self = this;
      axios
        .post("/api/v1/players/new", {
            email: document.getElementById("email-input").value,
            password: document.getElementById("password-input").value,
            first_name: document.getElementById("first-name-input").value,
            last_name: document.getElementById("last-name-input").value,
            gender: document.getElementById("gender-input").value,
            dob: document.getElementById("dob-input").value,
            ability: document.getElementById("ability-input").value,
            postcode: document.getElementById("postcode-input").value,
            sport: document.getElementById("sport-input").value,
            bio: document.getElementById("bio-input").value,
            profile_image: self.state.selectedFile
        })
        .then(function(response) {
          localStorage.setItem('jwtToken', response.data.jwt_token)
          localStorage.setItem('user_id', parseInt(response.data.user_id))
        })
        .then(function() {
          self.setState(prevState => {
            return {isSignedUp: !prevState.isSignedUp}
          })
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    }

    fileSelectedHandler(e) {
      let file = e.target.files[0];
      console.log(e.target.files[0].size)
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.setState({
          selectedFile: reader.result
        });
      };
    }

  render () {
    if (localStorage.getItem('jwtToken')) {
      return <Redirect to="/home" />;
    }
    else {
      return (
      <div className="form-container">
          <h4>Sign Up</h4>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
            className="form-signup"
             >
            <div className="form-group">
              <input
                id="first-name-input"
                name="first-name"
                placeholder="First Name"
                type="text"
                required="required"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <input
                id="last-name-input"
                name="last-name"
                placeholder="Last Name"
                type="text"
                required="required"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <input
                id="bio-input"
                name="bio"
                placeholder="Write you bio here"
                type="text"
                required="required"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                id="dob-input"
                name="dob"
                type="date"
                required="required"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <select
                id="sport-input"
                name="sport"
                placeholder="Sport"
                type="text"
                required="required"
                className="form-control"
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
              <select
                id="ability-input"
                name="ability"
                placeholder="Ability"
                type="select"
                required="required"
                className="form-control"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div className="form-group">
              <select
                id="gender-input"
                name="gender"
                placeholder="Gender"
                type="text"
                required="required"
                className="form-control"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="not_say">Rather Not Say</option>
              </select>
            </div>
            <div className="form-group">
              <input
                id="email-input"
                name="email"
                placeholder="Email"
                type="text"
                required="required"
                className="email form-control"
              ></input>
            </div>
            <div>
              <label>Add Image</label>
              <br/>
              <input type="file" onChange={this.fileSelectedHandler} />
            </div>
            <br/>
            <div className="form-group">
              <input
                id="postcode-input"
                name="postcode"
                placeholder="Postcode"
                type="text"
                required="required"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <input
                id="password-input"
                name="password"
                placeholder="Password"
                type="password"
                className="password form-control"
                required="required"
              ></input>
            </div>
            <div className="form-group">
              <input
                id="password-confirm-input"
                name="password-confirm"
                placeholder="Confirm Password"
                type="password"
                className="password form-control"
                required="required"
                onChange={this.handlePasswordConfirm}
              ></input>
            </div>
            <div className='row'>
              <div className='col'>
                <div className="form-group">
                  <button
                    name="signup"
                    type="submit"
                    className="signup-button btn btn-primary"
                    onClick={this.handleSignup}>
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
    );
    }
  }
}

export default Signup;
