import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import styles from './css/SignupForm.module.css'
import FlashMessage from './FlashMessage'

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: {},
      isProfileEdited: false,
      bio: ''
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
        player: response.data,
        bio: response.data.bio
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
      <div className={styles.topDiv}>
        <div className={`container ${styles.myContainer}`}>
        <div className="form-container">
          <h4>Edit Profile</h4>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
            className="form-signup"
             >
             <div className="row">
               <div className='col-6'>
                 <label>First name</label><br />
                 <input
                   id="first-name-input"
                   name="first-name"
                   placeholder="First name"
                   type="text"
                   required="required"
                   className={styles.inputField}
                 ></input>
               </div>
               <div className='col-6'>
                 <label>Last name</label><br />
                 <input
                   id="last-name-input"
                   name="last-name"
                   placeholder="Last name"
                   type="text"
                   required="required"
                   className={styles.inputField}
                 ></input>
               </div>
             </div>
             <div className='row'>
               <div className="col-12">
                 <label> Bio </label>
                 <input
                   id="bio-name-input"
                   name="bio"
                   value={this.state.bio}
                   onChange={(e)=>{this.setState({bio: e.target.value})}}
                   type="text"
                   className="form-control"
                   onChange={this.handleChange}
                 ></input>
               </div>
             </div>
             <div className="row">
               <div className="col-12">
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
             </div>
             <div className='row'>
               <div className="col-4">
                 <label>Sport</label><br />
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
               <div className="col-4">
                 <label>Ability</label><br />
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
               <div className="col-4">
                 <label>Gender</label><br />
                 <select
                   id="gender-input"
                   name="gender"
                   placeholder="Gender"
                   type="text"
                   required="required"
                   className="form-control"
                 >
                   <option value="Male">-----select gender-----</option>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
                   <option value="not_say">Rather Not Say</option>
                 </select>
               </div>
             </div>
             <div className='row'>
               <div className='col-6'>
                 <label>Email</label><br />
                 <input
                   id="email-input"
                   name="email"
                   type="email"
                   placeholder="Email"
                   required="required"
                   className={styles.inputField}
                   onChange={e => this.validateEmail(e)}
                 ></input>
               </div>
               <br/>
               <div className='col-6'>
                 <label>Postcode</label><br />
                 <input
                   id="postcode-input"
                   name="postcode"
                   placeholder="Postcode"
                   type="text"
                   required="required"
                   className={styles.inputField}
                 ></input>
               </div>
             </div>
             <div className='row'>
               <div className='col-12'>
                 <label>Password</label><br />
                 <input
                   id="password-input"
                   name="password"
                   placeholder="Password"
                   type="password"
                   className={`password ${styles.inputField}`}
                   required="required"
                 ></input>
               </div>
            </div>
            <div className='row'>
               <div className='col-12'>
                 <label>Confirm password</label><br />
                 <input
                   id="password-confirm-input"
                   name="password-confirm"
                   placeholder="Confirm Password"
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
            </div>
            <div className='row'>
              <div className='col'></div>
              <div className='col'>
                <div className="form-group">
                  <button
                    name="edit"
                    type="submit"
                    className={styles.signupButton}
                    onClick={this.handleEdit}
                    style={{width: '100%'}}>
                    Edit
                  </button>
                </div>
              </div>
              <div className='col'></div>
            </div>
          </form>
        </div>
      </div>
    </div>
      )
    }
  }
}

export default EditProfileForm
