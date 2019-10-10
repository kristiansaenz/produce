import React from 'react'
import BoothList from '../components/BoothList'


function Market() {
    return(
        <section class="section is-small">
            <div class="container">
            <h1 class="title">Marketplace</h1>
            <h2 class="subtitle">
                Search through farmers booths to discover goods in your area.
            </h2>
            <BoothList />
            </div>
        </section>
    )
}

export default Market

//Components boothlist will be called here