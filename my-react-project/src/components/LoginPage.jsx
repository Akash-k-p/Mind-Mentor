// import React, { useState } from 'react';
// import axios from 'axios'; // Add axios for HTTP requests
// import '../assets/css/login.css';
// import loginPicture from '../assets/images/login_picture.png';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import SERVER_URL from '../express_url';
// import {ReactSession} from 'react-client-session'

// /**
//    @todo: notify when login password or username is wrong , or if the registration is successful
// **/
// const LoginPage = () => {
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');

//   const [signupName, setSignupName] = useState('');
//   const [signupEmail, setSignupEmail] = useState('');
//   const [signupPassword, setSignupPassword] = useState('');
//   ReactSession.setStoreType("sessionStorage");


//   const navigate = useNavigate(); // Initialize useNavigate

//   // Login form submission
//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send POST request to the Express server's login route
//       const response = await axios.post(SERVER_URL+'/api/login', {
//         email: loginEmail,
//         password: loginPassword,
//       });

//       // Handle successful login (save token, redirect, etc.)
//       console.log('Login successful:', response.data);
//       localStorage.setItem('token', response.data.token); // Example with JWT token
//       ReactSession.set("user_id",response.data.user.id);
//       console.log("user_id at login: ", ReactSession.get("user_id"));
//        navigate('/dashboard'); // Programmatic navigation to Dashboard component
//     } catch (error) {
//       // Handle error
//       console.error('Login failed:', error.response?.data || error.message);
//     }
//   };

//   // Signup form submission
//   const handleSignupSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send POST request to the Express server's signup route
//       const response = await axios.post(SERVER_URL+'/api/signup', {
//         name: signupName,
//         email: signupEmail,
//         password: signupPassword,
//       });

//       // Handle successful signup
//       console.log('Signup successful:', response.data);
//       // Optionally login the user or redirect
//     } catch (error) {
//       // Handle error
//       console.error('Signup failed:', error.response?.data || error.message);
//     }
//   };

//   return (
//     <div className="video-container loginpage">
//        <video autoplay muted loop id="background-video">
//             <source src=".\videp.mp4" type="video/mp4"/>
//             Your browser does not support the video tag.
//         </video>
//       {/* <div className="jumbotron jumbotron-fluid text-center">
//         <div className="container">
//           <h1 className="display-4">Mental Health Tracker <span role="img" aria-label="Memo">💚</span></h1>
//           <p className="lead">Your journey to a better mental state</p>
//           <hr className="my-4" />
//         </div>
//       </div> */}
//        <div class="heading">
//             <center>
//                 <h1>
//                     Mind Mentor <span role="img" aria-label="Memo">💚</span>
//                 </h1>
//                 <p>Your journey to a better mental state</p>
//             </center>
//         </div>

//       <div className="main-content">
//         <div className="login">
//           <form id="login-submit" onSubmit={handleLoginSubmit}>
//             <div className="login-container">
//               <div className="form-group">
//                 <h3>Log in</h3>
//                 <label htmlFor="email">Email address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   placeholder="Enter email"
//                   value={loginEmail}
//                   onChange={(e) => setLoginEmail(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="Password"
//                   value={loginPassword}
//                   onChange={(e) => setLoginPassword(e.target.value)}
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </div>
//           </form>
//         </div>

//         <div className="main-img">
//           <img src={loginPicture} alt="Login" />
//         </div>

//         <div className="signup">
//           <form id="signup-submit" onSubmit={handleSignupSubmit}>
//             <div className="signup-container">
//               <div className="form-group">
//                 <label htmlFor="name">Full name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   placeholder="Full Name"
//                   value={signupName}
//                   onChange={(e) => setSignupName(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="signup-email">Email address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="signup-email"
//                   placeholder="Enter email"
//                   value={signupEmail}
//                   onChange={(e) => setSignupEmail(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="signup-password">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="signup-password"
//                   placeholder="Password"
//                   value={signupPassword}
//                   onChange={(e) => setSignupPassword(e.target.value)}
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState } from 'react';
import axios from 'axios'; // Add axios for HTTP requests
import '../assets/css/login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SERVER_URL from '../express_url';
import { ReactSession } from 'react-client-session';

/**
   @todo: notify when login password or username is wrong , or if the registration is successful
**/
const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState(''); // Track error message
  ReactSession.setStoreType("sessionStorage");

  const navigate = useNavigate(); // Initialize useNavigate

  // Login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the Express server's login route
      const response = await axios.post(SERVER_URL + '/api/login', {
        email: loginEmail,
        password: loginPassword,
      });

      // Handle successful login (save token, redirect, etc.)
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token); // Example with JWT token
      ReactSession.set("user_id", response.data.user.id);
      ReactSession.set("name",response.data.user.name);
      console.log("user_id at login: ", ReactSession.get("user_id"));
      console.log("user name at login: ", ReactSession.get("name"));
      navigate('/dashboard'); // Programmatic navigation to Dashboard component
    } catch (error) {
      // Handle error
      console.error('Login failed:', error.response?.data || error.message);
      setErrorMsg(error.response?.data?.message || 'Login failed, please try again.');
    }
  };

  // Signup form submission
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      if (signupPassword.length < 8) {
        setErrorMsg('Password must be at least 8 characters long.');
        return;
      }
      // Send POST request to the Express server's signup route
      const response = await axios.post(SERVER_URL + '/api/signup', {
        name: signupName,
        email: signupEmail,
        password: signupPassword,
      });

      // Handle successful signup
      console.log('Signup successful:', response.data);
      console.log("user_id at signup: ", response.data.id);
      ReactSession.set("user_id",response.data.id);
      ReactSession.set("name",response.data.name);
      navigate('/dashboard'); // Programmatic navigation to Dashboard component
      // Optionally login the user or redirect
    } catch (error) {
     // Handle error
     console.error('Signup failed:', error.response);
     if (error.response.status === 400) {
      setErrorMsg('Email already exists, please login.');
     } else {

     setErrorMsg(error.response?.data?.message || 'Signup failed, please try again.');
    }
  }
  };

  return (
    <div className="video-container loginpage">
      <video autoPlay muted loop id="background-video">
        <source src="./videp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="heading">
        <center>
          <h1>
            Mind Mentor <span role="img" aria-label="Memo">💚</span>
          </h1>
          <p>Your journey to a better mental state</p>
        </center>
      
      </div>

      <div className="container">
        <div className="column">
          <div className="form-container">
            {/* Login Box */}
            <div className="login-box">
              <p>Login</p>
              <form id="login-submit" onSubmit={handleLoginSubmit}>
                <div className="user-box">
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="user-box">
                  <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <button type="submit" className="btn-submit">
                  <span></span><span></span><span></span><span></span>
                  Submit 
                </button>
                
              </form>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="form-container">
            {/* Signup Box */}
            <div className="signup-box">
              <form id="signup-submit" onSubmit={handleSignupSubmit}>
                <p>Sign Up</p>
                <div className="user-box">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                  />
                  <label htmlFor="name">Full Name</label>
                </div>
                <div className="user-box">
                  <input
                    type="email"
                    id="signup-email"
                    name="email"
                    required
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                  <label htmlFor="signup-email">Email Address</label>
                </div>
                <div className="user-box">
                  <input
                    type="password"
                    id="signup-password"
                    name="password"
                    required
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                  <label htmlFor="signup-password">Password</label>
                </div>
                <button type="submit" className="btn-submit">
                  <span></span><span></span><span></span><span></span>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Display error message if any */}
      <div className="errorMsg">
        <span>{errorMsg}</span>
      </div>
    </div>
  );
};

export default LoginPage;

