import React from "react";
import Review from "./Review";
import { connect, useSelector } from 'react-redux'
import AddReview from "./AddReview";

const ReviewList = (props) => {

  const reviews = useSelector(state => state.selectedBooth.reviews)
  console.log("REVIEW LIST reviews: ", reviews)

  if(reviews) {
    return (
      <React.Fragment>
        <div className="review-list">
        {reviews.map(review => (
          <Review 
            avatar={review.reviewer_avatar}
            review={review.message}
            name={review.reviewer_name}
            rating={review.rating}
            created_at={review.created_at}
          />
        ))}
        </div>
        <div className="add-review-form">
          <AddReview booth_id={props.booth_id}/>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="review-list">
          <div className="add-review-form">
            <AddReview booth_id={props.booth_id}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => ({
  // reviews: state.selectedBooth.reviews,
  isLoading: state.selectedBooth.reviewsLoading
})

export default connect(mapStateToProps)(ReviewList);
