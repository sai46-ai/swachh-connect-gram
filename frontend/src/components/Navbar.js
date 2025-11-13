import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaExclamationTriangle, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaUser, FaUserShield, FaTachometerAlt, FaHandsWash } from 'react-icons/fa';
import { isAuthenticated, logout, getCurrentUser } from '../services/authService';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';
import LanguageToggle from './LanguageToggle';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = isAuthenticated();
  const currentUser = getCurrentUser();
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const handleLogout = () => {
    logout();
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FaExclamationTriangle className="logo-icon" />
          <span>Swachh Connect Gram</span>
        </Link>
        <ul className="navbar-menu">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">
              <FaHome /> {t('navbar.home')}
            </Link>
          </li>
          
          {currentUser?.role === 'admin' && (
            <li className={location.pathname === '/admin' ? 'active' : ''}>
              <Link to="/admin">
                <FaUserShield /> {t('navbar.admin')}
              </Link>
            </li>
          )}

          {currentUser?.role === 'resident' && (
            <>
              <li className={location.pathname === '/resident-dashboard' ? 'active' : ''}>
                <Link to="/resident-dashboard">
                  <FaTachometerAlt /> {t('navbar.resident')}
                </Link>
              </li>
              <li className={location.pathname === '/hygiene-awareness' ? 'active' : ''}>
                <Link to="/hygiene-awareness">
                  <FaHandsWash /> {t('navbar.awareness')}
                </Link>
              </li>
              <li className={location.pathname === '/report' ? 'active' : ''}>
                <Link to="/report">
                  <FaExclamationTriangle /> {t('navbar.report')}
                </Link>
              </li>
            </>
          )}
        </ul>
        
        <div className="navbar-auth">
          <LanguageToggle />
          {isLoggedIn ? (
            <>
              <span className="user-greeting">
                <FaUser /> {currentUser?.name} 
                <span className="user-role">({currentUser?.role})</span>
              </span>
              <button onClick={handleLogout} className="auth-btn logout-btn">
                <FaSignOutAlt /> {t('navbar.logout')}
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="auth-btn login-btn">
                <FaSignInAlt /> {t('navbar.login')}
              </Link>
              <Link to="/register" className="auth-btn register-btn">
                <FaUserPlus /> {t('navbar.register')}
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
