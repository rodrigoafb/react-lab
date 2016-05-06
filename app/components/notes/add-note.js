import React, { Component, PropTypes } from 'react'

class AddNote extends Component {

  handleSubmit () {
    var newNote = this.refs.note.value
    this.refs.note.value = ''
    this.props.addNote(newNote)
  }

  render () {
    return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Adicione uma nova nota"
        ref="note" />
      <span className="input-group-btn">
        <button className="btn btn-primary" type="button" onClick={() => this.handleSubmit()}> Adicionar </button>
      </span>
    </div>
    )
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
}

export default AddNote
