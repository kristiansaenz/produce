import React from "react";
import Booth from "../components/Booth";

function BoothList(props) {
  if (props.booths.length === 0) {
    return (
      <div className="boothlist-area">
        <h1>Hmm... There aren't any booths here :(</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div className="columns is-mobile booth-list">
          {props.booths.map(booth => (
            <Booth
              id={booth._id}
              // name={booth.name}
              // email={booth.email}
              address={booth.address}
              rating={booth.rating}
              // avatar={booth.avatar}
              booth_name={booth.booth_name}
              booth_description={booth.description}
              boothImages={booth.images}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BoothList;
