import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'semantic-ui-react';
import StarRatingComponent from 'react-star-rating-component';
import ImageCarousel from './Booth-Profile/ImageCarousel';

const MapPopup = props => {
  const image =
    'http://ecotalk.org/wp-content/uploads/2015/04/elite-vegetable-gardening-vegetable-garden.jpg';

  const carouselStyle = {
    height: '8rem'
  };

  return props.id ? (
    <div className='map-popup'>
      <div style={carouselStyle}>
        <ImageCarousel boothImages={props.boothImages} />
      </div>
      <Link to={`booth/${props.id}`}>
        {props.booth.booth_name}
        <StarRatingComponent
          name='rate1'
          starCount={5}
          starColor={'#e80000'}
          emptyStarColor={'rgba(0, 0, 0, 0.15)'}
          value={props.rating}
          editing={false}
        />
      </Link>
    </div>
  ) : null;
};

export default MapPopup;
