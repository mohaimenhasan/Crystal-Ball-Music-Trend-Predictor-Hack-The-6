import React from 'react';
import { loginUrl } from '../api/spotify';
import './Login.css';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Discover the Tomorrow of Music Today!</h1>
        <a href={loginUrl} className="btn-login">
          Log in with Spotify
        </a>
      </div>
    </div>
  );
};

export default Login;
