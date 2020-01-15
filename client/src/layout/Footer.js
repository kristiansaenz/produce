import React from 'react';
import GitIcon from '../images/github-icon.svg';

function Footer() {
  return (
    <footer class='footer'>
      <div class='content has-text-centered'>
        <div className='columns is-centered'>
          <div className='column is-half'>
            <div className='columns is-mobile'>
              <div className='column'>
                <a href='https://github.com/RyanJalufka'>
                  <img src={GitIcon} class='git-icon'></img>
                </a>
                <p className='footer-text'>
                  <strong className='footer-strong'>Ryan Jalufka</strong>
                  <br />
                  Software Engineer
                </p>
              </div>
              <div className='column'>
                <a href='https://github.com/kristiansaenz'>
                  <img src={GitIcon} class='git-icon'></img>
                </a>
                <p className='footer-text'>
                  <strong className='footer-strong'>Kristian Saenz</strong>
                  <br />
                  Software Engineer & Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
