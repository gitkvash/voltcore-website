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
         <h2 className="headline" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{t('sustainability.section_title')}</h2>
         <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '4rem' }}>
            {t('sustainability.section_desc')}
         </p>
         
         <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{t('sustainability.roadmap_title')}</h3>
         <ul style={{textAlign: 'left', fontSize: '1.2rem', lineHeight: '2', color: 'var(--text-secondary)', display: 'inline-block'}}>
            <li>🟢 {t('sustainability.roadmap_1')}</li>
            <li>🟡 {t('sustainability.roadmap_2')}</li>
            <li>⚪ {t('sustainability.roadmap_3')}</li>
         </ul>

         <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', marginTop: '4rem' }}>{t('sustainability.cert_title')}</h3>
         <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>{t('sustainability.cert_desc')}</p>
      </div>
    </div>
  );
};

export default Sustainability;
