import React from "react";

import "./style.css";

function TweetItem(props) {
  return (
    <article className="tweet-item">
      <header>
        <div>
          <img src={props.photo} alt={props.user} />
          <strong>{props.user}</strong>
          <span>•</span>
          <span>{props.created_at}</span>
        </div>
      </header>
      <p>{props.text}</p>
    </article>
  );
}

export default TweetItem;
