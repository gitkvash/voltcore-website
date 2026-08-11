import React from 'react';
import { useTranslation } from 'react-i18next';
import './PageStyles.css';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="page-wrapper animate-fade-in bg-secondary">
      <div className="container section text-center" style={{ maxWidth: '800px' }}>
        <h1 className="headline">{t('about.title')}</h1>
        <h2 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1.5rem', fontWeight: 500 }}>
          {t('about.subtitle')}
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '3rem' }}>
          {t('about.desc')}
        </p>
        
        <div className="hero-image-wrapper">
          <img src="/factory_floor.jpg" alt={t('about.title')} className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
