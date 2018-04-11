import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import TweetSearchForm from './TwitterSearchForm.jsx';
import TweetList from './TweetList.jsx';

require('./style.css');

class TweetSearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(username) {
    axios
      .get(`http://localhost:3000${this.props.url}/${username}`)
      .then((tweets) => {
        this.setState({ tweets: tweets.data });
        console.log(tweets + 'dsa');
      })
      .catch((err) => {
        console.log('Error in grabbing tweets for: ', username);
        this.setState({ tweets: [] });
      });
  }

  render() {
    return (
      <div className="tweetSearchBox">
        <h1>
          <p id="header">Twitter Timeline</p>
        </h1>
        <TweetSearchForm onSearchSubmit={this.handleSearchSubmit} />
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

ReactDOM.render(<TweetSearchBox url="/search" />, document.getElementById('react-app'));
