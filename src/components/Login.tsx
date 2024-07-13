import React from 'react';
import { loginUrl } from '../api/spotify';

const Login: React.FC = () => {
  return (
    <div className="loggingIn">
      <h1>Discover the tomorrow of music through today!</h1>
      <a href={loginUrl} className="btn btn-primary">Log in with Spotify</a>
    </div>
  );
};

export default Login;
