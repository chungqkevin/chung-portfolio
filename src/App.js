// App.js
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Work from './components/work';
import About from './components/about';
import Contact from './components/contact';
import { useScrollPosition } from './hooks/use-scroll';
import './styles/base.css';

function App() {
  const { scrollPos } = useScrollPosition();
  
  return (
    <div className="main-container">
      <Header />
      <div id="about" className="section-container">
        <About />
      </div>
      <div id="work" className="section-container">
        <Work />
      </div>
      <div id="contact" className="section-container">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
