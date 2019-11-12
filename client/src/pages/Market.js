import React from "react";
import MarketContainer from "../components/MarketContainer";

function Market() {
  return (
    <section className="section is-small">
      <div className="market-section">
        <div className="container">
          <h1 className="title">Marketplace</h1>
          <h2 className="subtitle">
            Search through farmers booths to discover goods in your area.
          </h2>
          <MarketContainer />
        </div>
      </div>
    </section>
  );
}

export default Market;
