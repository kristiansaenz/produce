/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Farmer from "../images/produce-display.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div class="homepage">
      <section class="section is-small">
        <div className="container home-intro">
          <h1 class="title is-home-title">Welcome!</h1>
          <h2 class="subtitle is-home-subtitle">
            Visit the market to view local booths in your area
          </h2>
          <Link to="/market">
            <div className="button to-market">
              <strong>Go to Market</strong>
            </div>
          </Link>
        </div>
      </section>

      {/* <div class="homepage-image">
                    <section class = "section is-small">
                        <div class="container">
                            <figure class="image is-5x3">
                                <img src={Farmer}></img>  
                            </figure>  
                        </div>
                    </section>
                </div> */}
    </div>
  );
}

export default Home;
