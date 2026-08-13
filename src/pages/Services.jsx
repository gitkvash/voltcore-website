import React from 'react';
import { useTranslation } from 'react-i18next';
import './PageStyles.css';

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="page-wrapper animate-fade-in">
      <div className="container text-center section">
        <h1 className="headline">{t('services.title')}</h1>
        <p className="subheadline">{t('services.subtitle')}</p>
        
        <div className="hero-image-wrapper">
          <img src="/services_img.jpg" alt={t('services.title')} className="hero-image" />
        </div>
      </div>

      <div className="bg-secondary section">
        <div className="container">
           <div className="grid-3" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
              <div className="info-card">
                <h3>{t('services.serv1_title')}</h3>
                <p>{t('services.serv1_desc')}</p>
              </div>
              <div className="info-card">
                <h3>{t('services.serv2_title')}</h3>
                <p>{t('services.serv2_desc')}</p>
              </div>
              <div className="info-card">
                <h3>{t('services.serv3_title')}</h3>
                <p>{t('services.serv3_desc')}</p>
              </div>
              <div className="info-card">
                <h3>{t('services.serv4_title')}</h3>
                <p>{t('services.serv4_desc')}</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
