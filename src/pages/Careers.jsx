import React from 'react';
import { useTranslation } from 'react-i18next';
import './PageStyles.css';

const Careers = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page-wrapper animate-fade-in">
      <div className="container text-center section">
        <h1 className="headline">{t('careers.title')}</h1>
        <p className="subheadline">{t('careers.subtitle')}</p>
        
        <div className="hero-image-wrapper">
          <img src="/careers_team.jpg" alt={t('careers.title')} className="hero-image" />
        </div>
      </div>

      <div className="bg-secondary section">
        <div className="container text-center">
           <h2 className="headline" style={{fontSize: '2.5rem', marginBottom: '3rem'}}>{t('careers.benefits_title')}</h2>
           <div className="grid-3">
              <div className="info-card">
                <h3 style={{fontSize: '1.5rem', fontWeight: 500}}>{t('careers.ben_1')}</h3>
              </div>
              <div className="info-card">
                <h3 style={{fontSize: '1.5rem', fontWeight: 500}}>{t('careers.ben_2')}</h3>
              </div>
              <div className="info-card">
                <h3 style={{fontSize: '1.5rem', fontWeight: 500}}>{t('careers.ben_3')}</h3>
              </div>
           </div>
        </div>
      </div>

      <div className="container section">
         <h2 className="headline text-center" style={{fontSize: '2.5rem', marginBottom: '3rem'}}>{t('careers.positions_title')}</h2>
         <div style={{maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div style={{padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
               <div>
                  <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>{t('careers.pos_1_title')}</h3>
                  <p style={{color: 'var(--text-secondary)'}}>{t('careers.pos_1_loc')}</p>
               </div>
               <button className="btn btn-primary">Apply</button>
            </div>
            <div style={{padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
               <div>
                  <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>{t('careers.pos_2_title')}</h3>
                  <p style={{color: 'var(--text-secondary)'}}>{t('careers.pos_2_loc')}</p>
               </div>
               <button className="btn btn-primary">Apply</button>
            </div>
            <div style={{padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
               <div>
                  <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>{t('careers.pos_3_title')}</h3>
                  <p style={{color: 'var(--text-secondary)'}}>{t('careers.pos_3_loc')}</p>
               </div>
               <button className="btn btn-primary">Apply</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Careers;
