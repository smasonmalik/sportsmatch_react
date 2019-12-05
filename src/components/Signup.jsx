import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";
import styles from './css/SignupForm.module.css'
import FlashMessage from './FlashMessage'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedUp: false,
      errorMessage: '',
    }
    this.handleSignup = this.handleSignup.bind(this);
    this.dobValidation = this.dobValidation.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
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
        .then(this.props.handleLoggedInState())
        .catch(function(error) {
          self.setState({
            errorMessage: error.response.data.error
          });
          setTimeout(() => {
            self.setState({
              errorMessage: ''
            })
          }, 3000)
        });
      } else {
        alert('Passwords don\'t match')
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
    }
  }

  validateEmail(e) {
    var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    var element = document.getElementById("email-input");
    if (!(e.target.value).match(mailformat)) {
      element.classList.add("form-control-error")
    }
    else { element.classList.remove("form-control-error");
    }
  }

  handlePasswordConfirm(e){
    let password = document.getElementById("password-input").value
    var element = document.getElementById("password-confirm-input");
    if (password !== e.target.value) {
      element.classList.add("form-control-error");
    } else {
      element.classList.remove("form-control-error")
    }
  }

  render () {
    if (localStorage.getItem('jwtToken')) {
      return <Redirect to="/profile" />;
    }
    else {
      return (
      <div className={`container ${styles.myContainer}`}>
        <div className="form-container">
            <h5 className={styles.heading}>Welcome to SportsMatch, Create Your Account Here </h5>
            <form
              onSubmit={e => {e.preventDefault();}}
              className="form-signup"
            >
              <div>
                <label>first name</label><br />
                <input
                  id="first-name-input"
                  name="first-name"
                  type="text"
                  required="required"
                  className={styles.inputField}
                ></input>
              </div>
              <div>
                <label>last name</label><br />
                <input
                  id="last-name-input"
                  name="last-name"
                  type="text"
                  required="required"
                  className={styles.inputField}
                ></input>
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  id="dob-input"
                  name="dob"
                  type="date"
                  max="2003-12-06"
                  required="required"
                  className="form-control"
                  onChange={e => this.dobValidation(e)}
                ></input>
              </div>
              <div className="form-group">
                <label>sport</label><br />
                <select
                  id="sport-input"
                  name="sport"
                  placeholder="Sport"
                  type="text"
                  required="required"
                  className="form-control"
                >
                  <option value="Tennis">-----select sport-----</option>
                  <option value="Tennis">Tennis</option>
                  <option value="TableTennis">TableTennis</option>
                  <option value="Squash">Squash</option>
                  <option value="Badminton">Badminton</option>
                </select>
              </div>
              <div className="form-group">
                <label>ability</label><br />
                <select
                  id="ability-input"
                  name="ability"
                  placeholder="Ability"
                  type="select"
                  required="required"
                  className="form-control"
                >
                  <option value="Beginner">-----select ability-----</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div className="form-group">
                <label>gender</label><br />
                <select
                  id="gender-input"
                  name="gender"
                  placeholder="Gender"
                  type="text"
                  required="required"
                  className="form-control"
                >
                  <option value="male">-----select gender-----</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="not_say">Rather Not Say</option>
                </select>
              </div>
              <div>
                <label>email</label><br />
                <input
                  id="email-input"
                  name="email"
                  type="email"
                  required="required"
                  className={styles.inputField}
                  onChange={e => this.validateEmail(e)}
                ></input>
              </div>
              <br/>
              <div>
                <label>postcode</label><br />
                <input
                  id="postcode-input"
                  name="postcode"
                  type="text"
                  required="required"
                  className={styles.inputField}
                ></input>
              </div>
              <div>
                <label>password</label><br />
                <input
                  id="password-input"
                  name="password"
                  type="password"
                  className={`password ${styles.inputField}`}
                  required="required"
                ></input>
              </div>
              <div>
                <label>confirm password</label><br />
                <input
                  id="password-confirm-input"
                  name="password-confirm"
                  type="password"
                  className={`password ${styles.inputField}`}
                  required="required"
                  onChange={e => this.handlePasswordConfirm(e)}
                ></input>
                <div className={styles.inputField}>
                  {this.state.errorMessage ?
                    <FlashMessage
                      message={this.state.errorMessage}
                      type="error"
                    /> : null }
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className="form-group">
                    <button
                      name="signup"
                      type="submit"
                      className="signup-button"
                      onClick={this.handleSignup}>
                      Signup
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
    );
    }
  }
}

export default Signup;
