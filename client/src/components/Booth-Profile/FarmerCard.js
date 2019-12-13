import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux'
import { favoriteBooth } from '../../actions/favoriteBoothActions'
import { Rating } from 'semantic-ui-react'


function FarmerCard (props) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const selectedBooth = useSelector(state => state.selectedBooth)
  const savedBooths = useSelector(state => state.auth.user.saved_booths)

  const [favoriteButtonStatus, setButtonStatus] = useState(true)



  useEffect(() => {
    if(isAuthenticated) {
      let checkBooths = savedBooths.filter(booth => (booth._id === selectedBooth._id));
      if(checkBooths.length > 0) {
        console.log('booth is already saved')
        setButtonStatus(false)
      }
    }
  }, [])

  const handleFavoriteClick = () => {
    props.favoriteBooth(selectedBooth)
  }

  const handleUnFavoriteClick = () => {
    alert('Removed from Favorites')
  }
  

  return (
    <div class="farmer-card">

      <div className="farmer-image">
        <figure class="image is-1by1">
          <img class="is-rounded" src={props.avatar} alt="avatar"></img>
        </figure>
      </div>

      {/* <div className="farmer-title"> */}
      <div className="text is-size-4">{props.boothName}</div>
      <button class="button is-success farmer-contact-button">Send Message</button>
      {favoriteButtonStatus &&
        <button onClick={handleFavoriteClick} class="button is-info farmer-contact-button">Add to Favorites</button>
      } : {
        <button onClick={handleUnFavoriteClick} class="button is-info farmer-contact-button">Remove From Favorites</button>
      }
      <div className="text">{props.boothOwnerName}</div>
      {/* </div> */}

      <div className="booth-rating-profile">
        <Rating icon='star' defaultRating={props.rating} maxRating={5} disabled />
      </div>

      <div className="farmer-location">
        <p>{props.city}, {props.state}</p>
      </div>
    </div>
  )
}

export default connect(null, { favoriteBooth })(FarmerCard)