import React, { Component } from 'react'

class SearchGithub extends Component {

  handleSubmit () {
    let router = this.context.router
    let username = this.refs.usernameRef.value

    router.transitionTo('profile', {username: username})
  }

  render () {
    return (
    <div className="col-sm-12">
      <form onSubmit={() => this.handleSubmit()}>
        <div className="form-group col-sm-7">
          <input type="text" className="form-control" ref="usernameRef" />
        </div>
        <div className="form-grooup col-sm-5">
          <button type="submit" className="btn btn-block btn-default">
            Buscar
          </button>
        </div>
      </form>
    </div>
    )
  }
}

SearchGithub.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default SearchGithub
