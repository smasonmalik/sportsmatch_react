import React from 'react'

function Flash() {
  return (
    <div class="alert alert-primary" role="alert">
      {this.props.message}
    </div>
  )
}

export default Flash
