import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSession } from 'react-client-session';

const Logout = () => {
  const [loggingOut, setLoggingOut] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Unset the user_id from ReactSession\
    console.log("user_id before logout: ", ReactSession.get("user_id"));
    ReactSession.set("user_id", null);
    console.log("user_id after logout: ", ReactSession.get("user_id"));

    // Show the logging out message for 3 seconds, then redirect to LoginPage
    setTimeout(() => {
      setLoggingOut(false);
      navigate('/login'); // Assuming the path to LoginPage.jsx is '/login'
    }, 1000);
  }, [navigate]);

  return (
    <div>
      {loggingOut ? (
        <h2>Logging out...</h2>
      ) : (
        <h2>Redirecting to login page...</h2>
      )}
    </div>
  );
};

export default Logout;
