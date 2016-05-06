import React, { Component } from 'react'
import { RouteHandler } from 'react-router'
import SearchGitHub from './search-github'

class Main extends Component {
  render () {
    return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: '15px'}}>
          <SearchGitHub />
        </div>
      </nav>
      <div className="container">
        <RouteHandler {...this.props} />
      </div>
    </div>
    )
  }
}

export default Main
