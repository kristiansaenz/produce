import React, { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";

function BoothImages(props) {
  const [images, setImages] = useState([
    "http://ecotalk.org/wp-content/uploads/2015/04/elite-vegetable-gardening-vegetable-garden.jpg",
    "https://www.sunset.com/wp-content/uploads/df0d8f0c7ec82217b5ab30810a78cff2-1200x600-c-default.jpg",
    "https://previews.123rf.com/images/sal73it/sal73it1904/sal73it190400003/125550712-lettuce-in-a-home-vegetable-garden.jpg",
    "https://i.pinimg.com/originals/4b/10/76/4b1076830d4e1c7f2dd60d7d31585254.jpg"
  ]);

  return (
    <div class="booth-images">
      {props.boothImages && props.boothImages.length ? (
        <ImageCarousel
          image_size="image is-2by1"
          boothImages={props.boothImages}
          view="profile"
        />
      ) : (
        <ImageCarousel
          image_size="image is-2by1"
          boothImages={images}
          view="profile"
        />
      )}
    </div>
  );
}

export default BoothImages;
