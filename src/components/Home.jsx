import React from 'react'
import { Redirect } from 'react-router-dom'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    axios
      .get("/api/v1/players")
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
      if ({this.props.authToken}) {
        return (
          <Redirect to='/' />
        )
      } else {
        return
      }
    )
  }
}
