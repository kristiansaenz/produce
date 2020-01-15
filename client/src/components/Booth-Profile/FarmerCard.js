import React, { useEffect, useState } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import { connect, useSelector } from 'react-redux';
import {
  favoriteBooth,
  unFavoriteBooth
} from '../../actions/favoriteBoothActions';
import { Rating } from 'semantic-ui-react';

function FarmerCard(props) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const selectedBooth = useSelector(state => state.selectedBooth);
  const user = useSelector(state => state.auth.user);
  const [favoriteButtonStatus, setButtonStatus] = useState('Add to Favorites');
  const [userRating, setUserRating] = useState(0);
  let submit;

  useEffect(() => {
    if (isAuthenticated) {
      let checkBooths = user.saved_booths.filter(
        booth => booth._id === selectedBooth._id
      );
      if (checkBooths.length > 0) {
        setButtonStatus('Remove From Favorites');
      }
    }
  }, []);

  const handleRate = (e, { rating, maxRating }) => {
    console.log('rating is: ', rating);
  };

  const handleFavoriteClick = () => {
    props.favoriteBooth(user._id, selectedBooth);
    setButtonStatus('Remove From Favorites');
  };

  const handleUnFavoriteClick = () => {
    props.unFavoriteBooth(user._id, selectedBooth);
    setButtonStatus('Add to Favorites');
  };

  if (favoriteButtonStatus === 'Add to Favorites') {
    submit = handleFavoriteClick;
  } else {
    submit = handleUnFavoriteClick;
  }

  return (
    <div class='farmer-card'>
      <div className='farmer-image'>
        <figure class='image is-1by1'>
          <img class='is-rounded' src={props.avatar} alt='avatar'></img>
        </figure>
      </div>

      {/* <div className="farmer-title"> */}
      <div className='text is-size-4'>{props.boothName}</div>
      <div className='farmer-card-button-group'>
        <Popup
          inverted
          content='Messaging coming soon!'
          trigger={
            <Button className='contact-farmer-button'>Send Message</Button>
          }
        />
        {/* <button class="button is-success farmer-contact-button">Send Message</button> */}
        {isAuthenticated && (
          <button
            onClick={submit}
            class='button is-success farmer-contact-button'
          >
            {favoriteButtonStatus}
          </button>
        )}
      </div>
      <div className='text'>{props.boothOwnerName}</div>
      {/* </div> */}

      <div className='booth-rating-profile'>
        <Rating
          icon='star'
          defaultRating={props.rating}
          maxRating={5}
          disabled
        />
      </div>

      <div className='farmer-location'>
        <p>
          {props.city}, {props.state}
        </p>
      </div>
    </div>
  );
}

export default connect(null, { favoriteBooth, unFavoriteBooth })(FarmerCard);
