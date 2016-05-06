import React, { Component } from 'react'
import Router from 'react-router'
import Repos from './github/repos'
import UserProfile from './github/user-profile'
import Notes from './notes/notes'
import Rebase from 're-base'

const base = Rebase.createClass('https://github-note-taker.firebaseio.com/')

class Profile extends Component {

  constructor (props) {
    super(props)

    this.state = {
      notes: [],
      bio: {
        name: ''
      },
      repos: []
    }
  }

  init () {
    this.ref = base.syncState(this.props.params.username, {
      context: this,
      asArray: true,
      state: 'notes'
    })
  }

  handleAddNote (note) {
     this.setState({
      notes: this.state.notes.push(note)
    })
  }

  componentDidMount () {
    this.init()
  }

  componentWillUnmout () {
    this.unbind('notes')
  }

  render () {
    return (
    <div className="row">
      <div className="col-md-4">
        <UserProfile username={this.props.params.username} bio={this.state.bio} />
      </div>
      <div className="col-md-4">
        <Repos username={this.props.params.username} repos={this.state.repos} />
      </div>
      <div className="col-md-4">
        <Notes username={this.props.params.username} notes={this.state.notes} addNote={() => this.handleAddNote()}/>
      </div>
    </div>
    )
  }
}

export default Profile
