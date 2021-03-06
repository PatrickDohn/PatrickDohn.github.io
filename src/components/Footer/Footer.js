import React from 'react';
import './footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
              <a href="https://github.com/PatrickDohn">
              <i className="devicon-github-plain dev-footer"></i>
              </a>
          </div>
          <div className='footer-link-items'>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />

              <a href="https://www.linkedin.com/in/patrick-dohn/">
              <i className="devicon-linkedin-plain dev-footer"></i>
              </a>
          </div>

          {/* href="https://github.com/PatrickDohn"
          "https://www.linkedin.com/in/patrick-dohn/" */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
