import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/authService';
import { useTranslation } from '../hooks/useTranslation';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarkerAlt, FaUserPlus, FaUserShield, FaHome, FaKey } from 'react-icons/fa';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [userType, setUserType] = useState(''); // 'resident' or 'admin'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    location: '',
    address: '',
    adminCode: '',
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

    // Validate user type selection
    if (!userType) {
      setError(t('register.selectUserType'));
      return;
    }

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError(t('register.passwordMismatch'));
      return;
    }

    // Validate admin code for admin registration
    if (userType === 'admin' && !formData.adminCode) {
      setError(t('register.adminCodeRequired'));
      return;
    }

    setLoading(true);

    try {
      const { confirmPassword, ...userData } = formData;
      const dataToSend = {
        ...userData,
        role: userType,
      };
      
      // Remove adminCode if not admin
      if (userType !== 'admin') {
        delete dataToSend.adminCode;
      }
      
      const response = await register(dataToSend);
      
      if (response.success) {
        navigate('/');
        window.location.reload(); // Reload to update navbar
      } else {
        setError(response.message || t('register.registrationFailed'));
      }
    } catch (err) {
      setError(err.response?.data?.message || t('register.registrationFailed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <FaUserPlus className="register-icon" />
          <h2>{t('register.title')}</h2>
          <p>{t('register.subtitle')}</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        {!userType ? (
          <div className="user-type-selection">
            <h3>{t('register.selectAccountType')}</h3>
            <div className="user-type-cards">
              <div 
                className="user-type-card resident-card"
                onClick={() => setUserType('resident')}
              >
                <FaHome className="type-icon" />
                <h4>{t('register.residentTitle')}</h4>
                <p>{t('register.residentDesc')}</p>
                <ul>
                  <li>{t('register.residentFeature1')}</li>
                  <li>{t('register.residentFeature2')}</li>
                  <li>{t('register.residentFeature3')}</li>
                  <li>{t('register.residentFeature4')}</li>
                </ul>
                <button type="button" className="select-btn">{t('register.residentButton')}</button>
              </div>

              <div 
                className="user-type-card admin-card"
                onClick={() => setUserType('admin')}
              >
                <FaUserShield className="type-icon" />
                <h4>{t('register.adminTitle')}</h4>
                <p>{t('register.adminDesc')}</p>
                <ul>
                  <li>{t('register.adminFeature1')}</li>
                  <li>{t('register.adminFeature2')}</li>
                  <li>{t('register.adminFeature3')}</li>
                  <li>{t('register.adminFeature4')}</li>
                </ul>
                <button type="button" className="select-btn admin-btn">{t('register.adminButton')}</button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="register-form">
            <div className="selected-type">
              <span className="back-btn" onClick={() => setUserType('')}>{t('register.backToSelection')}</span>
              <div className="type-badge">
                {userType === 'resident' ? <FaHome /> : <FaUserShield />}
                <span>{t('register.registeringAs')} {userType === 'resident' ? t('register.resident') : t('register.administrator')}</span>
              </div>
            </div>

            <div className="form-group">
              <label>
                <FaUser /> {t('register.nameLabel')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('register.namePlaceholder')}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <FaEnvelope /> {t('register.emailLabel')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('register.emailPlaceholder')}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <FaPhone /> {t('register.phoneLabel')}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('register.phonePlaceholder')}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <FaMapMarkerAlt /> {t('register.locationLabel')}
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder={t('register.locationPlaceholder')}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <FaHome /> {t('register.addressLabel')}
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={t('register.addressPlaceholder')}
                rows="2"
                required
              />
            </div>

            {userType === 'admin' && (
              <div className="form-group admin-code-group">
                <label>
                  <FaKey /> {t('register.adminCodeLabel')}
                </label>
                <input
                  type="password"
                  name="adminCode"
                  value={formData.adminCode}
                  onChange={handleChange}
                  placeholder={t('register.adminCodePlaceholder')}
                  required
                />
                <small className="form-hint">{t('register.adminCodeHint')}</small>
              </div>
            )}

            <div className="form-group">
              <label>
                <FaLock /> {t('register.passwordLabel')}
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={t('register.passwordPlaceholder')}
                required
                minLength="6"
              />
            </div>

            <div className="form-group">
              <label>
                <FaLock /> {t('register.confirmPasswordLabel')}
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder={t('register.confirmPasswordPlaceholder')}
                required
                minLength="6"
              />
            </div>

            <button type="submit" className="register-btn" disabled={loading}>
              {loading ? t('register.registering') : t('register.registerButton')}
            </button>
          </form>
        )}

        <div className="register-footer">
          <p>
            {t('register.haveAccount')} <Link to="/login">{t('register.loginLink')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
