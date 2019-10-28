import React from 'react'
import MarketContainer from '../components/MarketContainer'



function Market() {
  return (
    <section class="section is-small">
      <div class="market-section">
        <div class="container">
          <h1 class="title">Marketplace</h1>
          <h2 class="subtitle">
            Search through farmers booths to discover goods in your area.
            </h2>
          <MarketContainer />
        </div>
      </div>
    </section>
  )
}

export default Market;
