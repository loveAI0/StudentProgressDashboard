import React, { useState } from "react";
import "./Registration.css";

const Registration = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="registration-wrapper">
      <div className="registration-container">
        <div className="info">
          <button className="login-signin" onClick={() => setLogin(true)}>
            Login
          </button>
          <button className="login-signin" onClick={() => setLogin(false)}>
            SignIn
          </button>
        </div>

        {login ? (
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
          </div>
        ) : (
          <div className="signin-form">
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
              <button type="submit">Register</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
