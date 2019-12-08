import React from "react";
import Review from "./Review";
import AddReview from "./AddReview";

const ReviewList = () => {
  return (
    <React.Fragment>
      <div className="review-list">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
      <div className="add-review-form">
        <AddReview />
      </div>
    </React.Fragment>
  );
};

export default ReviewList;
