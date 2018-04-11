import React from 'react';

const Tweet = (props) => {
  return (
    <div className="tweet">
      <div className="avatar">
        <a href={`https://twitter.com/${props.authorScreenName}`}><img src={`${props.avatar}`} /></a>
      </div>
      <div className="tweetInfo">
        <div>
          <b><a className="author" href={`https://twitter.com/${props.authorScreenName}`}>{props.author}</a></b>{' '}<br></br>
          <a className="author" href={`https://twitter.com/${props.authorScreenName}`}>@{props.authorScreenName}</a> | {props.date}
        </div>
        <p>{props.tweet}</p>
        <p>
          <b>Likes:</b> {props.likes} | <b>Retweets:</b> {props.retweets}
          </p>
      </div>
    </div>
  );
};

export default Tweet;
