import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';
import { getCurrentUser } from '../services/authService';
import { useTranslation } from '../hooks/useTranslation';
import './Home.css';

const Home = () => {
  const currentUser = getCurrentUser();
  const isAdmin = currentUser && currentUser.role === 'admin';
  const { t } = useTranslation();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>{t('home.title')}</h1>
          <p>{t('home.subtitle')}</p>
          <div className="hero-buttons">
            {!isAdmin && (
              <Link to="/report" className="btn btn-primary">
                <FaExclamationTriangle /> {t('home.reportButton')}
              </Link>
            )}
            <Link to="/hygiene-awareness" className="btn btn-secondary">
              <FaLightbulb /> {t('home.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>{t('home.featuresTitle')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FaExclamationTriangle className="feature-icon" />
              <h3>{t('home.feature1Title')}</h3>
              <p>{t('home.feature1Desc')}</p>
            </div>
            <div className="feature-card">
              <FaUsers className="feature-icon" />
              <h3>{t('home.feature2Title')}</h3>
              <p>{t('home.feature2Desc')}</p>
            </div>
            <div className="feature-card">
              <FaLightbulb className="feature-icon" />
              <h3>{t('home.feature3Title')}</h3>
              <p>{t('home.feature3Desc')}</p>
            </div>
            <div className="feature-card">
              <FaChartLine className="feature-icon" />
              <h3>{t('home.feature4Title')}</h3>
              <p>{t('home.feature4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="container">
          <h2>{t('home.statsTitle')}</h2>
          <p className="impact-text">
            {t('home.description')}
          </p>
          <div className="stats">
            <div className="stat-item">
              <h3>{t('home.stat1')}</h3>
              <p>{t('home.stat2')}</p>
            </div>
            <div className="stat-item">
              <h3>{t('home.stat3')}</h3>
              <p>{t('home.stat4')}</p>
            </div>
            <div className="stat-item">
              <h3>Community</h3>
              <p>Improve quality of life</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>{t('home.ctaTitle')}</h2>
          <p>{t('home.ctaDesc')}</p>
          {!isAdmin && (
            <Link to="/report" className="btn btn-large">
              {t('home.getStarted')}
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
