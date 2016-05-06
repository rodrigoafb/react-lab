import React, { Component } from 'react'
import NotesList from './notes-list'
import AddNote from './add-note'

class Notes extends Component {
  render () {
    return (
    <div>
      <h3>Notes for {this.props.username}</h3>
      <AddNote username={this.props.username} addNote={this.props.addNote} />
      <NotesList notes={this.props.notes} />
    </div>
    )
  }
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
}

export default Notes
