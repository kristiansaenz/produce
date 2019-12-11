import React from "react";
import BoothList from "../components/BoothList";

function SavedBooths() {
  return (
    <section className="section is-small">
      <section className="hero">
        <div className="hero-body">
          <div className="columns">
            <div className="form-titles">
              <h1 className="title">Here are your saved booths!</h1>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
            {/* <BoothList booths={savedBooths} */}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default SavedBooths;
