import React from 'react';
import { Carousel } from './carousel';
import '../styles/work.css';
function Work() {
  return (
    <div className="work-container">
      <h2>Works</h2>
      <div className="work-item">
        <h3 className="work-title">Denim Database and Search Engine</h3>
        <p className="work-description">Designed and implemented a proprietary search engine and database matching measurements to a dynamic list of denim styles.<br/><br/>Stack: Liquid, Node.js, Express, and MongoDB</p>
        <a href="https://www.blueowl.us/pages/measurement-search" target="_blank" rel="noopener noreferrer">
          <img src="/images/denim-database-search.jpg" alt="Denim Search Engine" className="work-image" />
        </a>
      </div>
      <div className="work-item">
        <h3 className="work-title">Blue Owl Website</h3>
        <p className="work-description">Built web applications, API development, and maintenance. Works ranged from custom pagination, slideshow carousels, SEO optimization, navigation, customer databases, and page templates.<br/><br/>Stack: Liquid, JavaScript, NodeJs, Express, HTML, CSS, Git, and MongoDB</p>
          <Carousel></Carousel>
      </div>
      <div className="work-item">
        <h3 className="work-title">Papillon</h3>
        <p className="work-description">Webstore and side project created out of a desire to offer contemporary workwear manufactured in the USA and Japan.<br/><br/>Stack: MongoDB, Express, React, NodeJS, HTML, CSS, Javascript<br/>Currently Under Construction</p>
        <a href="https://chungqkevin.github.io/papillon/" target="_blank" rel="noopener noreferrer">
          <img src="/images/sassafras.jpg" alt="Another Work Image" className="work-image" />
        </a>
      </div>
    </div>
  );
}

export default Work;
