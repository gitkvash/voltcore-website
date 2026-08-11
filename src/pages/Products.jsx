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
        
        <div className="apple-grid">
          <div className="apple-card">
            <div className="apple-card-info">
              <h3>{t('products.prod1_title')}</h3>
              <p>{t('products.prod1_desc')}</p>
            </div>
            <img src="/product_board.jpg" alt={t('products.prod1_title')} className="apple-card-img" />
          </div>

          <div className="apple-card bg-secondary">
            <div className="apple-card-info">
              <h3>{t('products.prod2_title')}</h3>
              <p>{t('products.prod2_desc')}</p>
            </div>
            <div className="apple-card-placeholder">{t('products.coming_soon')}</div>
          </div>
          
          <div className="apple-card bg-secondary">
            <div className="apple-card-info">
              <h3>{t('products.prod3_title')}</h3>
              <p>{t('products.prod3_desc')}</p>
            </div>
            <div className="apple-card-placeholder">{t('products.coming_soon')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
