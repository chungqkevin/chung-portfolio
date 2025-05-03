import React from 'react';
import '../styles/base.css'
import LineSpacer from './line';

function About() {
  return (
    <section className="about-container">
      <h2>About</h2>
      <LineSpacer/>
      <p>
        <br />
        Welcome - I'm Kevin Chung, a Developer/Project Manager currently based in Seattle with backgrounds in computer science, data analytics, and e-commerce.
        <br /><br />
        From a young age, I've been fascinated by both fashion and technology—an interest that evolved into a deep appreciation for how products and stories are presented through online and digital platforms.
        <br></br>
        Having worked in fashion and e-commerce for near a decade, I have taken on various roles, spanning from building custom web applications, redesigning websites, implementing search engine optimization (SEO) strategies, to fostering relationships with designers and producing collaborative projects.
        <br /><br />
        During my time at Blue Owl, I have led a variety of technical projects which you will find detailed in my works section below. My tech stack, combined with my education in Computer Science and Data Analytics, have equipped me to make strategic decisions based on facts and metrics.
        <br /><br />
        In my projects, I aim to convey a narrative through code and design with data serving as the foundation.<br/>
        I am deeply passionate about lifelong learning and driven by progression. As an engineer learning new-technologies has always excited me as I aim to better my craft everyday. The ability to learn in both life and work has proven to keep me grounded in every step I take.
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