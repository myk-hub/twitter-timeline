import React from 'react';
import PropTypes from 'prop-types';

class TweetSearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.state.username.trim();
    if (!username) return;

    this.props.onSearchSubmit(username);
    this.setState({ username: '' });
  }

  render() {
    return (
      <form className="searchForm" onSubmit={this.handleSubmit}>
        <label htmlFor="inputField">@</label>
        <input
          className="inputField"
          type="text"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
          autoFocus
        />
      <input className="button" type="submit" value="get tweets" />
      </form>
    );
  }
}

TweetSearchForm.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};

export default TweetSearchForm;
