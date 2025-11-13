import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaGlobe } from 'react-icons/fa';
import './LanguageToggle.css';

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage}
      title={language === 'en' ? 'Switch to Telugu' : 'Switch to English'}
    >
      <FaGlobe className="language-icon" />
      <span className="language-text">
        {language === 'en' ? 'తెలుగు' : 'English'}
      </span>
    </button>
  );
}

export default LanguageToggle;
