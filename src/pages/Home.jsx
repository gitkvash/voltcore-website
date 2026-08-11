import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './PageStyles.css';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page-wrapper animate-fade-in">
      <section className="section text-center" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <h1 className="headline">{t('home.title')}</h1>
          <p className="subheadline">{t('home.subtitle')}</p>
          
          <div className="home-actions" style={{ marginTop: '2.5rem' }}>
            <Link to="/products" className="btn btn-primary" style={{ marginRight: '1rem' }}>{t('home.btn_products')}</Link>
            <Link to="/contact" className="btn">{t('home.btn_contact')}</Link>
          </div>

          <div className="hero-image-wrapper">
            <img src="/hero_bg_light.jpg" alt={t('home.title')} className="hero-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
