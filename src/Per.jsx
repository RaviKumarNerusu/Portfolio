import React from 'react';
import './Per.css';
import profilePic from './assets/IMG_1751.JPG'; // Adjust path if needed

const Per = () => {
  return (
    <div className="portfolio-container">
      <div className="profile-section">
        <img src={profilePic} alt="Ravi Kumar Nerusu" className="profile-image" />
        <h1 className="name-title">Ravi Kumar Nerusu</h1>
        <div className="contact-info">
          <p>Email: <a href="mailto:ravi.nerusu43@gmail.com">ravi.nerusu443@gmail.com</a></p>
          <p>Phone: +91 9866493858</p>
          <p>GitHub: <a href="https://github.com/ravi.nerusu" target="_blank" rel="noopener noreferrer">github.com/ravi.nerusu</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/ravi-nerusu-078183331" target="_blank" rel="noopener noreferrer">linkedin.com/in/ravi-nerusu-078183331</a></p>
        </div>
      </div>

      <div className="summary-section">
        <h2>Summary</h2>
        <p>B.Tech CSE student at KL University with a strong interest in full stack development and problem-solving skills in modern web technologies and backend frameworks including Spring Boot. Eager to apply and expand skills through real-world applications.</p>
      </div>

      <div className="certifications-section">
        <h2>Certifications</h2>
        <ul className="cert-list">
          <li><a href="https://www.linkedin.com/posts/ravi-nerusu-074813331_24hours-uiux-design-activity-7352916620475867139-OlYA" target="_blank" rel="noopener noreferrer">24-hour UI/UX Design Hackathon - Participation Certificate</a></li>
          <li><a href="https://www.linkedin.com/posts/ravi-nerusu-074813331_multicloud-network-associate-activity-7351569408823029762-ldwF" target="_blank" rel="noopener noreferrer">Aviatrix ACE Certification</a></li>
          <li><a href="https://www.linkedin.com/posts/ravi-nerusu-074813331_sales-force-certified-activity-7303316840422780928-Am1f" target="_blank" rel="noopener noreferrer">Salesforce Certified AI Associate</a></li>
        </ul>
      </div>

      <div className="internships-section">
        <h2>Internships</h2>
        <ul className="intern-list">
          <li><a href="https://www.linkedin.com/posts/ravi-nerusu-074813331_summer-internship-activity-7341739153329414144-g-eJ" target="_blank" rel="noopener noreferrer">Summer Internship - K L University</a></li>
          <li><a href="https://www.linkedin.com/posts/ravi-nerusu-074813331_prodigy-activity-7312720626090139649-9RJG" target="_blank" rel="noopener noreferrer">Prodigy Internship - Virtual Full Stack</a></li>
        </ul>
      </div>

      <div className="projects-section">
        <h2>Projects</h2>
        <ul className="proj-list">
          <li><a href="https://www.linkedin.com/posts/ravi-nerusu-074813331_im-happy-to-share-this-movie-booking-system-activity-7337380358604161025-5zJE" target="_blank" rel="noopener noreferrer">Movie Booking System (Node.js, Spring Boot & MySQL)</a></li>
          <li><a href="https://www.linkedin.com/posts/ravi-nerusu-074813331_im-happy-to-share-this-sample-calculator-activity-7352589769853337601-tJcO" target="_blank" rel="noopener noreferrer">Calculator Project (React Native & Expo Go)</a></li>
        </ul>
      </div>

      <div className="hobbies-section">
        <h2>Skills</h2>
        <ul className="hobbies-list">
          <li>c</li>
          <li>java,python</li>
          <li>Full Stack</li>
        </ul>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Ravi Kumar Nerusu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Per;