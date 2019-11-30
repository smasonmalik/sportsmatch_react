import React from 'react'
import axios from 'axios'
import SingleResult from './SingleResult'

class Results extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      resultEdit: false
    }
    this.getRequest = this.getRequest.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount() {
    this.getRequest()
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.resultEdit !== prevState.resultEdit) {
      this.getRequest()
    }
  }

  getRequest() {
    let self = this;
    axios({
      url: "/api/v1/results/",
      headers: {
        "Content-Type": "application/json",
        "api-token": localStorage.getItem('jwtToken')
      }
    })
      .then(function(response) {
        self.setState({
          results: response.data
        })
        console.log(response.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  handleEdit() {
    this.setState(prevState => {
      return {resultEdit: !prevState.resultEdit}
    })
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.state.results.map(result => (
          <SingleResult
            key={result.id}
            id={result.id}
            game_id={result.game_id}
            winner_id={result.winner_id}
            loser_id={result.loser_id}
            confirmed={result.confirmed}
            handleEdit={this.handleEdit}
          />
        ))}
      </ul>
    )
  }
}

export default Results
