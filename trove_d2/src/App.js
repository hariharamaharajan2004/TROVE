import React, { useState } from 'react';
import Welcome from "./Components/page_welcome/Welcome";
import Login from "./Components/page_login/Login";
import Signin from "./Components/page_signin/Signin";

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');

  const navigateToLogin = () => {
    setCurrentPage('login');
  };

  const navigateToSignin = () => {
    setCurrentPage('signin');
  };

 

  return (
    <div className="App">
      {currentPage === 'welcome' && <Welcome onLoginClick={navigateToLogin} onSignupClick={navigateToSignin} />}
      {currentPage === 'login' && <Login onSignupClick={navigateToSignin} />}
      {currentPage === 'signin' && <Signin onLoginClick={navigateToLogin} />}
      {/* Add other components as needed */}
      {/* {currentPage === 'landing' && <Landing />} */}
    </div>
  );
}

export default App;
