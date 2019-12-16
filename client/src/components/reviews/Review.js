import React from "react";

const Review = (props) => {
  return (
    <article class="media">
      <figure class="media-left review-pic">
        <p class="image is-64x64">
          {/* <img src="https://bulma.io/images/placeholders/128x128.png"></img> */}
          <img src={props.avatar}></img>
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            {/* <strong>John Smith</strong> <small>@johnsmith</small>{" "} */}
            {/* <strong>John Smith</strong>{"  "} */}
            {/* <small>Today at 5:42PM</small> */}
            <strong>{props.name}</strong>{"  "}
            <small></small>
            <br />
            {props.review}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small">
                <i class="fas fa-reply"></i>
              </span>
            </a>
            <a class="level-item">
              <span class="icon is-small">
                <i class="fas fa-retweet"></i>
              </span>
            </a>
            <a class="level-item">
              <span class="icon is-small">
                <i class="fas fa-heart"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  );
}

export default Review;
