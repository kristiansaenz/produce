import React from "react";
import { Rating } from "semantic-ui-react";

const Review = (props) => {
  return (
    <article class="media">
      <figure class="media-left review-pic">
        <p class="image is-64x64">
          <img src={props.avatar} alt="avatar"></img>
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{props.name}</strong>{"  "}
            <Rating
            icon="star"
            defaultRating={props.rating}
            maxRating={5}
            size="mini"
            disabled
          />
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
