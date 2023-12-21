import React, { useState } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <section className={`showcase ${isActive ? 'active' : ''}`}>
        <header>
          <h2 className="logo">TROVE</h2>
          <div className={`toggle ${isActive ? 'active' : ''}`} onClick={handleToggle}></div>
        </header>
        <div className="overlay"></div>
        <div className="text">
          <h2>Never Stop To </h2>
          <h3>Exploring The World</h3>
          <p>
          Welcome to our content oasis! Dive into a world of endless discovery with our app. From trending articles to captivating videos, explore personalized recommendations tailored just for you. Embrace the excitement of new discoveries every day. Let the journey begin!
          </p>
          <Link to="/Signup">Explore</Link>
        </div>
        
      </section>
      <div className={`menu ${isActive ? 'active' : ''}`}>
        <ul>
          <li><Link to="/Signup">Sign up</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="#">News</Link></li>
          <li><Link to="#">Blog</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Welcome;
