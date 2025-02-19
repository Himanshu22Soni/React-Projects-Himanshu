import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us using the form below.</p>

      <form className="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Message:</label>
        <textarea placeholder="Write your message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
        <Link to="/" className="home-button home-btn">
          Go Back Home
        </Link>
      </form>
    </div>
  );
};

export default Contact;
