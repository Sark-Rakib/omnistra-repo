import React from 'react';

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <h2>About Us</h2>
        <p>
          Welcome to our platform. We are dedicated to providing the best
          experience and solutions for our users.
        </p>
        <div className="about-content">
          <div className="about-item">
            <h3>Our Mission</h3>
            <p>To deliver innovative and reliable solutions.</p>
          </div>
          <div className="about-item">
            <h3>Our Vision</h3>
            <p>To be the leading platform in our industry.</p>
          </div>
          <div className="about-item">
            <h3>Our Values</h3>
            <p>Quality, integrity, and customer satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
}