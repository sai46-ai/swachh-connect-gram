import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHandsWash, FaHome, FaUsers, FaArrowLeft } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';
import './HygieneAwareness.css';

const HygieneAwareness = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('personal');

  const categories = [
    {
      id: 'personal',
      title: t('awareness.personalHygiene'),
      icon: '🧼',
    },
    {
      id: 'home',
      title: t('awareness.homeSurroundings'),
      icon: '🏠',
    },
    {
      id: 'community',
      title: t('awareness.communityHygiene'),
      icon: '👥',
    }
  ];

  const content = {
    personal: {
      title: t('awareness.personalHygiene'),
      subtitle: t('awareness.stayCleanHealthy'),
      items: [
        {
          icon: '🧴',
          title: t('awareness.handwashing'),
          videoId: 'LdQuPGVcceg',
          tips: [
            t('awareness.tip1'),
            t('awareness.tip2'),
            t('awareness.tip3')
          ]
        },
        {
          icon: '🚿',
          title: t('awareness.dailyBathing'),
          videoId: 'CSlJKzBCGIg',
          tips: [
            t('awareness.tip4'),
            t('awareness.tip5'),
            t('awareness.tip6')
          ]
        },
        {
          icon: '🪥',
          title: t('awareness.brushTeeth'),
          videoId: 'DaetXZMh8vg',
          tips: [
            t('awareness.tip7'),
            t('awareness.tip8'),
            t('awareness.tip9')
          ]
        }
      ]
    },
    home: {
      title: t('awareness.homeSurroundings'),
      subtitle: t('awareness.keepEnvironmentClean'),
      items: [
        {
          icon: '🗑️',
          title: t('awareness.wasteManagement'),
          videoId: 'qERlvSLTc3g',
          tips: [
            t('awareness.tip10'),
            t('awareness.tip11'),
            t('awareness.tip12')
          ]
        },
        {
          icon: '🧹',
          title: t('awareness.cleanHome'),
          videoId: '3jN5DYRIOwg',
          tips: [
            t('awareness.tip13'),
            t('awareness.tip14'),
            t('awareness.tip15')
          ]
        },
        {
          icon: '💧',
          title: t('awareness.safeWater'),
          videoId: 'Pzkhvj7NpmM',
          tips: [
            t('awareness.tip16'),
            t('awareness.tip17'),
            t('awareness.tip18')
          ]
        }
      ]
    },
    community: {
      title: t('awareness.communityHygiene'),
      subtitle: t('awareness.workTogether'),
      items: [
        {
          icon: '🚽',
          title: t('awareness.useToilets'),
          videoId: 'BU2EUfinwHo',
          tips: [
            t('awareness.tip19'),
            t('awareness.tip20'),
            t('awareness.tip21')
          ]
        },
        {
          icon: '💦',
          title: t('awareness.cleanWaterSources'),
          videoId: 'VkLdFJHY5Ug',
          tips: [
            t('awareness.tip22'),
            t('awareness.tip23'),
            t('awareness.tip24')
          ]
        },
        {
          icon: '🌳',
          title: t('awareness.cleanCommunity'),
          videoId: 'X5j1MRm-4dc',
          tips: [
            t('awareness.tip25'),
            t('awareness.tip26'),
            t('awareness.tip27')
          ]
        }
      ]
    }
  };

  const activeContent = content[activeCategory];

  return (
    <div className="hygiene-awareness-container">
      {/* Simple Header */}
      <div className="hygiene-header">
        <button className="back-button" onClick={() => navigate('/resident-dashboard')}>
          <FaArrowLeft /> {t('awareness.back')}
        </button>
        <h1>🌟 {t('awareness.title')} 🌟</h1>
        <p className="header-subtitle">{t('awareness.subtitle')}</p>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className="category-emoji">{category.icon}</span>
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h2>{activeContent.title}</h2>
        <p className="subtitle">{activeContent.subtitle}</p>

        <div className="items-grid">
          {activeContent.items.map((item, index) => (
            <div key={index} className="hygiene-item">
              <div className="item-header">
                <span className="item-icon">{item.icon}</span>
                <h3>{item.title}</h3>
              </div>

              {/* Video */}
              <div className="video-container">
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  title={item.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Simple Tips */}
              <div className="tips-box">
                <h4>{t('awareness.quickTips')}</h4>
                <ul>
                  {item.tips.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Call to Action */}
      <div className="action-section">
        <h3>{t('awareness.remember')}</h3>
        <p>{t('awareness.practiceDaily')}</p>
        <button className="report-button" onClick={() => navigate('/report')}>
          {t('awareness.reportIssue')}
        </button>
      </div>
    </div>
  );
};

export default HygieneAwareness;
