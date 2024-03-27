import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs library
import '../styles/contact.css'; // Import the CSS file

function Contact() {
  const form = useRef(); // Create a ref for the form element

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm(
        'service_0im8vzm', // Replace with your EmailJS service ID
        'template_6cgcuao', // Replace with your EmailJS template ID
        form.current,
        'iDySnMMFnloYthPbB', // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Thank you for your message.', result.text);
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('An error occurred. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Leave a message: </h2>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
