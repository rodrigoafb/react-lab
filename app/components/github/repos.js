import React, {Component} from 'react';

class Repos extends Component {
    render() {
        return (
            <div>
                <p>REPOS</p>
                REPOS: {this.props.repos}
            </div>
        );
    }
}

Repos.propTypes = {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
};

export default Repos;