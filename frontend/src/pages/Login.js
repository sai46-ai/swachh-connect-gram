import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login, getCurrentUser } from '../services/authService';
import { useTranslation } from '../hooks/useTranslation';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await login(formData);
      if (response.success) {
        // Get user info to determine redirect
        const user = getCurrentUser();
        
        // Redirect based on user role
        if (user.role === 'admin') {
          navigate('/admin');
        } else if (user.role === 'resident') {
          navigate('/resident-dashboard');
        } else {
          navigate('/');
        }
        
        window.location.reload(); // Reload to update navbar
      } else {
        setError(response.message || t('login.error'));
      }
    } catch (err) {
      setError(err.response?.data?.message || t('login.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <FaSignInAlt className="login-icon" />
          <h2>{t('login.title')}</h2>
          <p>{t('login.subtitle')}</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>
              <FaEnvelope /> {t('login.emailLabel')}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('login.emailPlaceholder')}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <FaLock /> {t('login.passwordLabel')}
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={t('login.passwordPlaceholder')}
              required
              minLength="6"
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? t('login.loggingIn') : t('login.loginButton')}
          </button>
        </form>

        <div className="login-footer">
          <p>
            {t('login.noAccount')} <Link to="/register">{t('login.registerLink')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
