import React from "react";
import Review from "./Review";
import AddReview from "./AddReview";

const ReviewList = (props) => {
  return (
    <React.Fragment>
      <div className="review-list">
      {props.reviews.map(review => (
        <Review 
          avatar={review.reviewer_avatar}
          review={review.message}
          name={review.reviewer_name}
        />
      ))}
      </div>
      <div className="add-review-form">
        <AddReview booth_id={props.booth_id}/>
      </div>
    </React.Fragment>
  );
};

export default ReviewList;
