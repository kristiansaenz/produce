import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PinIcon from "../images/map-pin.svg";
import { Rating } from "semantic-ui-react";
import ImageCarousel from "./Booth-Profile/ImageCarousel";

function Booth(props) {
  const [images, setImages] = useState([
    "http://ecotalk.org/wp-content/uploads/2015/04/elite-vegetable-gardening-vegetable-garden.jpg",
    "https://www.sunset.com/wp-content/uploads/df0d8f0c7ec82217b5ab30810a78cff2-1200x600-c-default.jpg",
    "https://previews.123rf.com/images/sal73it/sal73it1904/sal73it190400003/125550712-lettuce-in-a-home-vegetable-garden.jpg",
  ]);

  return (
    <div class="column is-half-mobile is-one-quarter-tablet is-one-fifth-desktop">
        <div class="card is-equal-height">

          {/* Card Image */}
          <div class="card-image">
            {props.boothImages && props.boothImages.length ?
            <ImageCarousel image_size="image" boothImages={props.boothImages} view="list" />
            :
            <ImageCarousel image_size="image" boothImages={images} view="list" />
            }
          </div>

          {/* Card Content */}
          <Link to={`booth/${props.id}`}>
          <div class="card-content">
            <div class="content">
              <div class="subtitle">
                {" "}
                {props.booth_name}
                <div className="booth-rating">
                  <Rating
                    icon="star"
                    defaultRating={props.rating}
                    maxRating={5}
                    disabled
                  />
                </div>
              </div>
              {/* <p class="card-description"> {props.booth_description} </p> */}
              {props.booth_description}
            </div>
          </div>

          {/* Card Footer */}
          <footer class="card-footer">
            <div class="card-footer-item">
              <img src={PinIcon} className="pin" />
              {props.address.city}, {props.address.state}
            </div>
          </footer>
          </Link>
        </div>
    </div>
  );
}

export default Booth;
