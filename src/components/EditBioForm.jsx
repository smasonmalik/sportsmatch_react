import React from 'react'
import axios from 'axios'

class EditBioForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleEditForm = this.handleEditForm.bind(this)
  }

  handleEditForm() {
    let self = this;
    axios({
      method: 'patch',
      url: `/api/v1/players/my_profile`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      },
      data:
      {
        bio: document.getElementById("bio-input").value,
      }})
      .then(function() {
        self.props.handleEditBio(document.getElementById("bio-input").value)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="form-container">
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
          className="form-game-request"
        >
          <div className="form-group">
          <input
            id="bio-input"
            name="bio"
            placeholder="Write a small description about yourself here..."
            type="bio"
            required="required"
            className="form-control"
          ></input>
          </div>
          <div className='row'>
            <div className='col'>
            <div className="form-group">
            <button
              name="requestGame"
              type="submit"
              className="request-button btn btn-outline-primary"
              onClick={this.handleEditForm}>
              Save
            </button>
          </div>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

export default EditBioForm
