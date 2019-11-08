import React from "react";
import GitIcon from "../images/github-icon.svg";

function Footer() {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
        {/* <p>
            Where food brings community together :)
          </p> */}
        {/* <div className="columns is-centered">
          <p>
            <strong className="footer-strong">Where food brings community <i>together</i></strong>
            <br />
            Created by us, your's truly ~
          </p>
          </div> */}
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="columns is-mobile">
              <div className="column">
                <a href="https://github.com/RyanJalufka"><img src={GitIcon} class="git-icon"></img></a>
                <p>
                  <strong className="footer-strong">Ryan Jalufka</strong>
                  <br />
                  Software Engineer
                </p>
                {/* <div className="button">Portfolio</div> */}
              </div>
              <div className="column">
                <a href="https://github.com/kristiansaenz"><img src={GitIcon} class="git-icon"></img></a>
                <p>
                  <strong className="footer-strong">Kristian Saenz</strong>
                  <br />
                  Software Engineer & Designer
                </p>
                {/* <div className="button">Portfolio</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
