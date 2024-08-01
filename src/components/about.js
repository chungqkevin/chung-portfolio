import React from 'react';
import '../styles/base.css'
import LineSpacer from './line';

function About() {
  return (
    <section className="about-container">
      <h2>About</h2>
      <LineSpacer/>
      <p>
        Welcome, and thank you for viewing my portfolio. I'm Kevin Chung, a Developer/Project Manager with backgrounds in computer science, data analytics, and high volume e-commerce.
        <br /><br />
        Throughout my career, I have taken on various roles, spanning from building custom web applications, implementing search engine optimization (SEO) strategies, to fostering relationships with designers and producing collaborative projects.
        <br /><br />
        During my time at Blue Owl, I have led a variety of technical projects which you will find detailed in my works section below. My tech stack, combined with my education in CS/Data Analytics, has equipped me to make strategic decisions based on facts and metrics.
        <br /><br />
        In my projects, I aim to convey a narrative through code and design with data serving as the foundation.<br/>
        I am deeply passionate about lifelong learning and driven by progression. As an engineer learning new-technologies has always excited me as I strive to better my craft everyday. The ability to learn in both life and work has proven to keep me grounded in every step I take.
        <br /><br />
        When I'm not working on projects or coding you can find me spending time with my beautiful family and our pets Miso and Gamja.<br/>We enjoy basketball, photography, and sunny days.
        <br /><br />
        I am currently open to new opportunities, whether they are tech or fashion-aligned.
        <br /><br />
        Let's connect and innovate together!
      </p>
    </section>
  );
}

export default About;