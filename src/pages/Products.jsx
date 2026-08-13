import React from 'react';
import { useTranslation } from 'react-i18next';
import './PageStyles.css';
import './Products.css';

const Products = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page-wrapper animate-fade-in section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
           <h1 className="headline">{t('products.title')}</h1>
           <p className="subheadline">{t('products.subtitle')}</p>
        </div>
        
        {/* Transformers */}
        <h2 style={{fontSize: '2rem', marginBottom: '2rem', marginTop: '4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem'}}>{t('products.cat_transformers')}</h2>
        <div className="apple-grid">
          <div className="apple-card">
            <div className="apple-card-info">
              <h3>{t('products.p_nex9_title')}</h3>
              <p>{t('products.p_nex9_desc')}</p>
            </div>
            <img src="/product_board.jpg" alt={t('products.p_nex9_title')} className="apple-card-img" />
          </div>
          <div className="apple-card bg-secondary">
            <div className="apple-card-info">
              <h3>{t('products.p_nex7_title')}</h3>
              <p>{t('products.p_nex7_desc')}</p>
            </div>
          </div>
          <div className="apple-card bg-secondary">
            <div className="apple-card-info">
              <h3>{t('products.p_nex5_title')}</h3>
              <p>{t('products.p_nex5_desc')}</p>
            </div>
          </div>
        </div>

        {/* Automation */}
        <h2 style={{fontSize: '2rem', marginBottom: '2rem', marginTop: '6rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem'}}>{t('products.cat_automation')}</h2>
        <div className="apple-grid">
          <div className="apple-card">
            <div className="apple-card-info">
              <h3>{t('products.p_auto_omni_title')}</h3>
              <p>{t('products.p_auto_omni_desc')}</p>
            </div>
            <img src="/product_automation.jpg" alt={t('products.p_auto_omni_title')} className="apple-card-img" />
          </div>
          <div className="apple-card bg-secondary">
            <div className="apple-card-info">
              <h3>{t('products.p_auto_edge_title')}</h3>
              <p>{t('products.p_auto_edge_desc')}</p>
            </div>
          </div>
          <div className="apple-card bg-secondary">
            <div className="apple-card-info">
              <h3>{t('products.p_auto_vision_title')}</h3>
              <p>{t('products.p_auto_vision_desc')}</p>
            </div>
          </div>
        </div>

        {/* Cables */}
        <h2 style={{fontSize: '2rem', marginBottom: '2rem', marginTop: '6rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem'}}>{t('products.cat_cables')}</h2>
        <div className="apple-grid">
          <div className="apple-card">
            <div className="apple-card-info">
              <h3>{t('products.p_cab_titan_title')}</h3>
              <p>{t('products.p_cab_titan_desc')}</p>
            </div>
            <img src="/product_cable.jpg" alt={t('products.p_cab_titan_title')} className="apple-card-img" />
          </div>
          <div className="apple-card bg-secondary">
            <div className="apple-card-info">
              <h3>{t('products.p_cab_flex_title')}</h3>
              <p>{t('products.p_cab_flex_desc')}</p>
            </div>
          </div>
          <div className="apple-card bg-secondary">
            <div className="apple-card-info">
              <h3>{t('products.p_cab_fire_title')}</h3>
              <p>{t('products.p_cab_fire_desc')}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;
