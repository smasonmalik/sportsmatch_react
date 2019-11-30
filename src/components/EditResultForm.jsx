import React from 'react'
import axios from 'axios'

class EditResultForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentResult: { },
      resultEdit: false

    }
    this.handleClick = this.handleClick.bind(this)
  }

// Attempt to pass in winner/loser id data from database to return as placeholder for edit form.
//   componentDidMount() {
//     let self = this;
//     axios({
//       method: 'get',
//       url: `/api/v1/results/${this.props.match.params.id}`,
//       headers: {
//         "Content-Type": "application/json",
//         "api-token": localStorage.getItem('jwtToken')
//       }
//     })
//     .then(response => this.setState({ currentResult: response.data }))
//     .catch(function(error) {
//       console.log(error)
//     })
// }

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
        console.log(this.state.resultEdit)
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
            placeholder="Winner ID"
            // defaultValue={this.state.currentResult.winner_id}
            className="form-control"
          ></input>
          </div>
          <div className="form-group">
          <input
            id="loserid-input"
            name="loserid"
            type="text"
            required="required"
            placeholder="Loser ID"
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
