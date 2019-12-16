import React from "react";
import { useSelector } from "react-redux";
import BoothList from "../components/BoothList";

function SavedBooths() {
  const savedBooths = useSelector(state => state.auth.user.saved_booths);
  console.log("SAVED BOOTHS: ", savedBooths);

  if (savedBooths.length > 0) {
    return (
      <section className="section is-small">
        <div className="market-section">
          <div className="container">
            <h1 className="title">Saved Booths</h1>
            <h2 className="subtitle">
              Add booths to your saved list to get easy access to your favorite farmers!
            </h2>
            <BoothList booths={savedBooths} />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div>
        <p>No Favorite Booths added yet...</p>
      </div>
    );
  }
}

export default SavedBooths;
