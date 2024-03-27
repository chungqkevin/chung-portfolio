// Contact.js
import React from 'react';
import '../styles/contact.css'; // Import the CSS file

function Contact() {
  return (
    <div className="contact-container"> {/* Apply the container class */}
      <h2>Leave a message: </h2>
      <form className="contact-form"> {/* Apply the form class */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="textbox">Text:</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
