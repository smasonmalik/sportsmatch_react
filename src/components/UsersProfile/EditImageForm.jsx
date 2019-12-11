import React from 'react'
import axios from 'axios'

class EditBioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: ''
    }
    this.handleEditForm = this.handleEditForm.bind(this)
    this.handleFileSelect = this.handleFileSelect.bind(this)
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
        profile_image: self.state.selectedFile,
      }})
      .then(function() {
        self.props.handleEditImage(self.state.selectedFile)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  handleFileSelect(e) {
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
            <label>Update Image</label>
            <br/>
            <input type="file" onChange={this.handleFileSelect} required="required"/>
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
