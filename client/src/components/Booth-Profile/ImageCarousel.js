import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";

function ImageCarousel(props) {
  const [index, setIndex] = useState(0);

  return (
    <Gallery
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {props.booth_images && props.booth_images.map(image => (
        props.view === "profile" ?
            <figure class={props.image_size}>
                <GalleryImage objectFit="fit" src={image} />
            </figure>
        :
            <GalleryImage objectFit="fit" src={image} />
      ))}
    </Gallery>
  );
}

export default ImageCarousel;
