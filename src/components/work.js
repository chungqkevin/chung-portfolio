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
          Designed and implemented a database/search engine matching measurements to a dynamic list of denim styles.
          <br /><br />
          Stack: Liquid, Node.js, Express, and MongoDB
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
          Stack: Liquid, JavaScript, Node.js, Express, HTML, CSS, Git, and MongoDB
        </p>
        <Carousel1 />
      </div>
      <div className="work-item">
        <h3 className="work-title">Windthrow Store</h3>
        <p className="work-description">
          Built custom navigation, page templates, and product grids. Served as a consultant and engineer for SEO imporovements and UX/UI design/implementations. 
          <br /><br />
          Stack: Liquid, JavaScript, HTML, and CSS
        </p>
        <Carousel2 />
      </div>
      <div className="work-item">
        <h3 className="work-title">Papillon</h3>
        <p className="work-description">
          Webstore and side project created out of a desire to offer contemporary workwear manufactured in the USA and Japan.
          <br /><br />
          Stack: MongoDB, Express, React, Node.js, HTML, CSS, JavaScript
        </p>
        <a href="https://papillonus.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src="/images/pap-hero.jpg" alt="Another Work Image" className="work-image" />
        </a>
      </div>
    </div>
  );
}

export default Work;
