import React from 'react';
import { useTranslation } from 'react-i18next';
import './PageStyles.css';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="page-wrapper animate-fade-in section bg-secondary">
      <div className="container text-center" style={{ maxWidth: '600px' }}>
        <h1 className="headline" style={{ marginBottom: '1rem' }}>{t('contact.title')}</h1>
        <p className="subheadline" style={{ marginBottom: '4rem' }}>{t('contact.subtitle')}</p>
        
        <div className="contact-form-apple">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder={t('contact.placeholder_name')} className="apple-input" />
            <input type="email" placeholder={t('contact.placeholder_email')} className="apple-input" />
            <textarea rows="5" placeholder={t('contact.placeholder_msg')} className="apple-input"></textarea>
            <button className="btn btn-primary" type="submit" style={{ width: '100%', marginTop: '1rem' }}>{t('contact.btn_send')}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
