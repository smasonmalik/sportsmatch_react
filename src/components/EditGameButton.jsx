import React from 'react'
import EditGameForm from './EditGameForm'

class EditGameButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayForm: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {displayForm: !prevState.displayForm}
    })
  }

  render() {
    if (this.state.displayForm) {
      return (
        <div>
          <button className="btn btn-primary" onClick={this.handleClick}>Hide Form</button>
          <EditGameForm id={this.props.id} handleEdit={this.props.handleEdit}/>
        </div>
      )
    } else {
      return (
        <div>
          <button className="btn btn-primary" onClick={this.handleClick}>Edit Game</button>
        </div>
      )
    }
  }
}

export default EditGameButton
