import React, { useState } from 'react';
import './assets/css/login.css';

const RegisterAccount = () => {
  // State for login and signup forms
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Handle form submissions
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login data submitted:', loginData);
    // Perform login action here, such as calling API
    // Redirect to dashboard upon success (/diary)
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup data submitted:', signupData);
    // Perform signup action here, such as calling API
  };

  // Handle input change for both forms
  const handleInputChange = (e, formType) => {
    const { id, value } = e.target;

    if (formType === 'login') {
      setLoginData({ ...loginData, [id]: value });
    } else if (formType === 'signup') {
      setSignupData({ ...signupData, [id]: value });
    }
  };

  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4">
            Mental Health Tracker <span role="img" aria-label="Memo">💚</span>
          </h1>
          <p className="lead">Your journey to a better mental state</p>
          <hr className="my-4" />
        </div>
      </div>

      <div className="main-content">
        <div className="login">
          {/* Log in form */}
          <form id="login-submit" onSubmit={handleLoginSubmit}>
            <div className="login-container">
              <div className="form-group">
                <h3>Log in</h3>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={loginData.email}
                  onChange={(e) => handleInputChange(e, 'login')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, 'login')}
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>

        <div className="main-img">
          <img src="./assets/images/login_picture.png" alt="Login picture" />
        </div>

        <div className="signup">
          {/* Signup form */}
          <form id="signup-submit" onSubmit={handleSignupSubmit}>
            <div className="signup-container">
              <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Full Name"
                  value={signupData.name}
                  onChange={(e) => handleInputChange(e, 'signup')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="signup-email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="signup-email"
                  placeholder="Enter email"
                  value={signupData.email}
                  onChange={(e) => handleInputChange(e, 'signup')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="signup-password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={(e) => handleInputChange(e, 'signup')}
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterAccount;
