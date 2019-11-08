import React from "react";
import Booth from "../components/Booth";

function BoothList(props) {
  if (props.farmers.length === 0) {
    return (
      <div className="boothlist-area">
        <h1>Hmm... There aren't any booths here :(</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div className="columns is-mobile booth-list">
          {props.farmers.map(farmer => (
            <Booth
              id={farmer._id}
              name={farmer.name}
              email={farmer.email}
              address={farmer.address}
              avatar={farmer.avatar}
              booth_name={farmer.booth.booth_name}
              booth_description={farmer.booth.description}
              booth_images={farmer.booth.images}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BoothList;
