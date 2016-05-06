import React, { Component } from 'react'
import NotesList from './notes-list'

class Notes extends Component {
  render () {
    return (
    <div>
      <h3>Notes for {this.props.username}</h3>
      <NotesList notes={this.props.notes} />
    </div>
    )
  }
}

export default Notes
