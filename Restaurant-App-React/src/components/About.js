import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our platform! We are a team of passionate individuals
        dedicated to providing top-notch services. Our mission is to deliver
        quality and excellence in everything we do.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>To revolutionize the industry with innovation and creativity.</p>
          <p>Mailto: sonihimanshu2210@gmail.com</p>
        </div>
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To provide high-quality products and services to our customers
            worldwide.
          </p>
          <p>Contact: +91-6386333099</p>
        </div>
        <div className="about-card">
          <h3>Our Values</h3>
          <p>Integrity, Excellence, and Customer Satisfaction.</p>
          <p>Author: Himanshu Soni</p>
        </div>
      </div>
      <Link to="/" className="home-button">
        Go Back Home
      </Link>
    </div>
  );
};

export default About;
