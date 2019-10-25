import React from 'react'
import BoothHeader from '../components/BoothHeader'
import ItemList from '../components/ItemList'


function Booth() {
    return (
        <section class = "section is-small">
            <BoothHeader />
            <br/>

            <section class="hero">
            <div class="hero-body">
                {/* <h1 class="title">Your Items will appear here</h1>
                <h2 class="subtitle">
                    Buy goods here ~
                </h2> */}
                <ItemList />
            </div>
            </section>
        </section>
    )
}

export default Booth