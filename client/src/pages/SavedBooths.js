import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import BoothList from "../components/BoothList";

function SavedBooths() {
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  if(isAuthenticated) {
    if (user.saved_booths.length > 0) {
      return (
        <section className="section is-small">
          <div className="market-section">
            <div className="container">
              <h1 className="title">Saved Booths</h1>
              <h2 className="subtitle">
                Add booths to your saved list to get easy access to your favorite farmers!
              </h2>
              <BoothList booths={user.saved_booths} />
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="section is-small">
          <div className="market-section">
            <div className="container">
              <h1 className="title">Saved Booths</h1>
              <h2 className="subtitle">
                Add booths to your saved list to get easy access to your favorite farmers!
              </h2>
              <p>No Favorite Booths added yet...</p>
            </div>
          </div>
        </section>
      );
    }
  } else {
    return (<Redirect to="/login" />)
  }
}

export default SavedBooths;
