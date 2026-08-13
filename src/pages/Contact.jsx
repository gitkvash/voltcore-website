import React from 'react';
import { useTranslation } from 'react-i18next';
import './PageStyles.css';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="page-wrapper animate-fade-in section bg-secondary">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="text-center" style={{marginBottom: '4rem'}}>
           <h1 className="headline" style={{ marginBottom: '1rem' }}>{t('contact.title')}</h1>
           <p className="subheadline">{t('contact.subtitle')}</p>
        </div>
        
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'center'}}>
           <div style={{flex: '1 1 400px'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '2rem'}}>{t('contact.offices_title')}</h2>
              <div style={{marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-secondary)'}}>
                 <p style={{marginBottom: '0.5rem'}}>📍 {t('contact.off_hq')}</p>
                 <p style={{marginBottom: '0.5rem'}}>📍 {t('contact.off_eu')}</p>
                 <p style={{marginBottom: '0.5rem'}}>📍 {t('contact.off_as')}</p>
              </div>
              
              <h2 style={{fontSize: '2rem', marginBottom: '2rem', marginTop: '3rem'}}>{t('contact.faq_title')}</h2>
              <div style={{marginBottom: '1.5rem'}}>
                 <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>{t('contact.faq_1_q')}</h3>
                 <p style={{color: 'var(--text-secondary)'}}>{t('contact.faq_1_a')}</p>
              </div>
              <div>
                 <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>{t('contact.faq_2_q')}</h3>
                 <p style={{color: 'var(--text-secondary)'}}>{t('contact.faq_2_a')}</p>
              </div>
           </div>

           <div style={{flex: '1 1 400px'}} className="contact-form-apple">
             <div style={{background: 'var(--bg-primary)', padding: '3rem', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
               <form onSubmit={(e) => e.preventDefault()}>
                 <input type="text" placeholder={t('contact.placeholder_name')} className="apple-input" />
                 <input type="email" placeholder={t('contact.placeholder_email')} className="apple-input" />
                 <textarea rows="6" placeholder={t('contact.placeholder_msg')} className="apple-input"></textarea>
                 <button className="btn btn-primary" type="submit" style={{ width: '100%', marginTop: '1rem' }}>{t('contact.btn_send')}</button>
               </form>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
