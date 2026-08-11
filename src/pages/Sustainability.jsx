import React from 'react';
import { useTranslation } from 'react-i18next';
import './PageStyles.css';

const Sustainability = () => {
  const { t } = useTranslation();
  return (
    <div className="page-wrapper animate-fade-in">
      <div className="container text-center section">
        <h1 className="headline">{t('sustainability.title')}</h1>
        <p className="subheadline">{t('sustainability.subtitle')}</p>
        
        <div className="hero-image-wrapper">
          <img src="/eco_img.jpg" alt={t('sustainability.title')} className="hero-image" />
        </div>
      </div>

      <div className="container section text-center" style={{ maxWidth: '800px' }}>
         <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{t('sustainability.section_title')}</h2>
         <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {t('sustainability.section_desc')}
         </p>
      </div>
    </div>
  );
};

export default Sustainability;
