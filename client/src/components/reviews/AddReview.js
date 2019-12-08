import React from "react";

const AddReview = () => {
  return (
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png"></img>
        </p>
      </figure>
      <div class="media-content">
        <div class="field">
          <p class="control">
            <textarea
              class="textarea"
              placeholder="Add a comment..."
            ></textarea>
          </p>
        </div>
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <a class="button is-info">Submit</a>
            </div>
          </div>
        </nav>
      </div>
    </article>
  );
};

export default AddReview;
