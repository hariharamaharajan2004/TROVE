import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      console.log('Login successful');
    } else {
      alert('Invalid email or password');
    }
  };
  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleFormSubmit}>
            <h2>Login</h2>
            <div className="inputbox">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="">Password</label>
            </div>
            <div className="forget">
              <label htmlFor="Rememberme">
                <input type="checkbox" id="Rememberme" />
                Remember Me <br /><br />
                <Link to="/Login">Forget Password?</Link>
              </label>
            </div>
            <Link to="/Home">
            <button className="loginbutton" type="submit">Log in</button>
            </Link>
            <div className="register">
              <p>Don't have an account <Link to="/Signup">Register</Link></p>
             
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
