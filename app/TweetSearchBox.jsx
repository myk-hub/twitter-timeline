import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

class TweetSearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
    }
  }

  render() {
    return(
      <div className="TweetSearchBox">
        <h1>
          <h2 id="header">Twitter Timeline</h2>
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<TweetSearchBox url="/search" />, document.getElementById('react-app'));
