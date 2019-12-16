import React from "react";
import Booth from "../components/Booth";
import { Loader } from 'semantic-ui-react';

function BoothList(props) {
  if (props.booths.length === 0) {
    return (
      <div className="boothlist-area">
        <section className="section is-large">
          <Loader active inline='centered' />
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <div className="columns is-mobile booth-list">
          {props.booths.map(booth => (
            <Booth
              booth={booth}
              id={booth._id}
              address={booth.address}
              rating={booth.rating || 0}
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
