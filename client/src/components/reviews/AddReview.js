import React, { useState } from 'react';
import { addReview } from '../../actions/selectedBoothAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Rating } from 'semantic-ui-react';

const AddReview = props => {
  const [value, setValue] = useState('');
  const [userRating, setUserRating] = useState(null);

  const handleSubmit = () => {
    if (value === '') {
      alert('Please type a review first');
    } else {
      props.addReview(
        props.user._id,
        props.user.name,
        props.user.avatar,
        userRating,
        value,
        props.booth_id
      );
      setValue('');
    }
  };

  const handleRating = (e, { rating, maxRating }) => {
    setUserRating(rating);
  };

  if (props.isAuthenticated) {
    return (
      <article class='media'>
        <figure class='media-left review-pic'>
          <p class='image is-64x64'>
            <img src={props.user.avatar} alt='avatar'></img>
            <sm>{props.user.name}</sm>
          </p>
        </figure>
        <div class='media-content'>
          Overall Rating
          <Rating
            icon='star'
            defaultRating={0}
            onRate={handleRating}
            maxRating={5}
          />
          <div class='field'>
            <p class='control'>
              <form>
                <textarea
                  class='textarea'
                  placeholder='Add a comment...'
                  value={value}
                  onChange={e => setValue(e.target.value)}
                ></textarea>
              </form>
            </p>
          </div>
          <nav class='level'>
            <div class='level-left'>
              <div class='level-item'>
                <a class='button is-success' onClick={handleSubmit}>
                  Submit
                </a>
              </div>
            </div>
          </nav>
        </div>
      </article>
    );
  } else {
    return (
      <Link to={`/login`}>
        <div>Login to Add Review!</div>
      </Link>
    );
  }
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { addReview })(AddReview);
