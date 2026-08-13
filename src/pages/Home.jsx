import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './PageStyles.css';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page-wrapper animate-fade-in">
      <section className="section text-center" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <h1 className="headline">{t('home.title')}</h1>
          <p className="subheadline">{t('home.subtitle')}</p>
          
          <div className="home-actions" style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/products" className="btn btn-primary">{t('home.btn_products')}</Link>
            <Link to="/contact" className="btn">{t('home.btn_contact')}</Link>
          </div>

          <div className="hero-image-wrapper">
            <img src="/hero_bg_light.jpg" alt={t('home.title')} className="hero-image" />
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container text-center">
          <h2 className="headline" style={{fontSize: '2rem', marginBottom: '3rem'}}>{t('home.metrics_title')}</h2>
          <div className="grid-3">
            <div>
              <h3 style={{fontSize: '3.5rem', color: 'var(--accent-blue)', marginBottom: '0.5rem', fontWeight: 700}}>{t('home.metrics_1_num')}</h3>
              <p className="subheadline">{t('home.metrics_1_txt')}</p>
            </div>
            <div>
              <h3 style={{fontSize: '3.5rem', color: 'var(--accent-blue)', marginBottom: '0.5rem', fontWeight: 700}}>{t('home.metrics_2_num')}</h3>
              <p className="subheadline">{t('home.metrics_2_txt')}</p>
            </div>
            <div>
              <h3 style={{fontSize: '3.5rem', color: 'var(--accent-blue)', marginBottom: '0.5rem', fontWeight: 700}}>{t('home.metrics_3_num')}</h3>
              <p className="subheadline">{t('home.metrics_3_txt')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="headline" style={{fontSize: '2rem', marginBottom: '3rem'}}>{t('home.testimonials_title')}</h2>
          <div className="grid-2" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            <div className="info-card bg-secondary" style={{borderRadius: '20px', padding: '3rem 2rem'}}>
              <p style={{fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-secondary)'}}>"{t('home.test_1_quote')}"</p>
              <p style={{fontWeight: 'bold'}}>{t('home.test_1_author')}</p>
            </div>
            <div className="info-card bg-secondary" style={{borderRadius: '20px', padding: '3rem 2rem'}}>
              <p style={{fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-secondary)'}}>"{t('home.test_2_quote')}"</p>
              <p style={{fontWeight: 'bold'}}>{t('home.test_2_author')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
