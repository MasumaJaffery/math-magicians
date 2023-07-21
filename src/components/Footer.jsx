/* eslint-disable linebreak-style */

import React from 'react';
import './style.css';

const Footer = () => (
  <>
    <footer>
      <h6>
        Math Magicians by
        {' '}
        <a href="https://github.com/MasumaJaffery" data-testid="author-link">
          Masuma Jaffery
        </a>
        {' '}
        |
        {' '}
        <span data-testid="year">2023</span>
      </h6>
    </footer>
  </>
);

export default Footer;
