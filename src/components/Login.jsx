import { useState } from 'react';
import PropTypes from 'prop-types';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';
import './scss/Login.scss';

function Login({ onLogin }) {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      onLogin(result.user);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="charging-icon">⚡</div>
          <h1>Charging Station</h1>
          <p>Analytics Dashboard</p>
        </div>
        
        <button 
          className="google-login-btn"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </button>
      </div>
    </div>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login; 