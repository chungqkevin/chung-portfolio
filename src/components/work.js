import React from 'react';
import Line from './line';
import { Carousel as Carousel1 } from './carousel';
import { Carousel as Carousel2 } from './carousel2';
import '../styles/work.css';

function Work() {
  return (
    <div className="work-container">
      <h2>Works</h2>
      <Line />
      <div className="work-item">
        <h3 className="work-title">Denim Database and Search Engine</h3>
        <p className="work-description">
          Created a database/search-algorithm matching measurements to a dynamic list of denim styles.
          <br /><br />
          Stack: JavaScript, Node.js, SQL, Express, CSS, Liquid and MongoDB
        </p>
        <a href="https://www.blueowl.us/pages/measurement-search" target="_blank" rel="noopener noreferrer">
          <img src="/images/denim-database-search.jpg" alt="Denim Search Engine" className="work-image" />
        </a>
      </div>
      <div className="work-item">
        <h3 className="work-title">Blue Owl Website</h3>
        <p className="work-description">
          Built web applications, API development, and UX/UI maintenance. Works ranged from custom pagination, slideshow carousels, SEO optimization, navigation, customer databases, page templates, and more.
          <br /><br />
          Stack: JavaScript, Node.js, Express, HTML, Liquid, CSS, Git and MongoDB
        </p>
        <Carousel1 />
      </div>
      <div className="work-item">
        <h3 className="work-title">Muok Boxing</h3>
        <p className="work-description">
          Full website redesign/overhaul for local Muay Thai boxing gym.
          <br /><br />
          Stack: HTML, CSS, and JavaScript
        </p>
        <a href="https://www.muokboxing.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/muok-home.jpg" alt="boxing homepage" className="work-image" />
        </a>
      </div>
      <div className="work-item">
        <h3 className="work-title">Windthrow Store</h3>
        <p className="work-description">
          Built custom navigation, page templates, and product cards/grids. Served as a consultant and developer for SEO and UX/UI improvements. 
          <br /><br />
          Stack: JavaScript, HTML, Liquid and CSS
        </p>
        <Carousel2 />
      </div>
      <div className="work-item">
        <h3 className="work-title">Papillon</h3>
        <p className="work-description">
          Webstore and side project created out of a desire to offer contemporary workwear manufactured in the USA and Japan.
          <br /><br />
          Stack: Medusa, Javascript, MongoDB, SQL, Express, React, Node.js, and CSS
        </p>
        <a href="https://papillonus.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src="/images/pap-hero.jpg" alt="Another Work Image" className="work-image" />
        </a>
      </div>
    </div>
  );
}

export default Work;
