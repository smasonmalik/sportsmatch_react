import React from 'react'
import axios from 'axios'

class EditResultForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resultEdit: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let self = this;
    axios({
      method: 'patch',
      url: `/api/v1/results/${this.props.id}/edit`,
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      },
      data:
      {
        winner_id: document.getElementById("winnerid-input").value,
        loser_id: document.getElementById("loserid-input").value
      }})
      .then(function() {
        self.props.handleEdit()
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
          className="form-result"
          >
          <div className="form-group">
          <input
            id="winnerid-input"
            name="winnerid"
            type="text"
            required="required"
            className="form-control"
          ></input>
          </div>
          <div className="form-group">
          <input
            id="loserid-input"
            name="loserid"
            type="text"
            required="required"
            className="form-control"
          ></input>
          </div>
          <button
            name="editResult"
            type="submit"
            className="request-button btn btn-outline-primary"
            onClick={this.handleClick}>
            Submit edit
          </button>
        </form>
      </div>
    )
  }
}

export default EditResultForm
