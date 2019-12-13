import React from "react";
import { useSelector } from "react-redux";
import BoothList from "../components/BoothList";

function SavedBooths() {
  const savedBooths = useSelector(state => state.auth.user.saved_booths)
  console.log('SAVED BOOTHS: ', savedBooths)

  if(savedBooths) {
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
              <BoothList booths={savedBooths} />
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default SavedBooths;
