// Signup.jsx

import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validation logic for sign-up (you can replace this with your own validation rules)
    if (!firstName || !lastName || !email || !password) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!isStrongPassword(password)) {
      alert(
        'Please choose a stronger password. It should contain at least one lowercase letter, one uppercase letter, and one digit, and be at least 8 characters long.'
      );
      return;
    }

    // Store the user's credentials in localStorage (you can replace this with your own backend API call)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // Optionally, you can redirect to the login page after sign-up (use React Router for navigation)
    // For example: history.push('/login');
    console.log('Sign-up successful');
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isStrongPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleFormSubmit}>
            <h2>Sign up</h2>
            <div className="inputbox">
              {/* Assuming you have the necessary React Ionicons component */}
              {/* <IonIcon name="person-outline" /> */}
              <input
                type="text"
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <label htmlFor="">First Name</label>
            </div>
            <div className="inputbox">
              {/* <IonIcon name="person-outline" /> */}
              <input
                type="text"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <label htmlFor="">Last Name</label>
            </div>
            <div className="inputbox">
              {/* <IonIcon name="mail-outline" /> */}
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
              {/* <IonIcon name="lock-closed-outline" /> */}
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="">Password</label>
            </div>
            <div className="forget">
              <label htmlFor="">
                <input type="checkbox" id="Rememberme" />
                Remember Me <br />
              </label>
            </div>
            <Link to="/Home">
            <button className="loginbutton" type="submit">
              Sign up
            </button>
            </Link>
            <div className="register">
              <p>
                Already have an Account? <Link to="/Login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
