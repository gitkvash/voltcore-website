import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Activity, BatteryCharging, Cpu } from 'lucide-react';
import './PageStyles.css';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page-wrapper animate-fade-in">
      {/* Hero Section */}
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

      {/* NEW: Capabilities Grid */}
      <section className="section bg-secondary">
        <div className="container text-center">
          <h2 className="headline" style={{fontSize: '2rem', marginBottom: '3rem'}}>{t('home.cap_title')}</h2>
          <div className="grid-3">
             <div className="info-card" style={{padding: '3rem 2rem', border: '1px solid var(--border-color)', borderRadius: '20px', background: 'var(--bg-primary)'}}>
               <Activity size={48} color="var(--accent-blue)" style={{marginBottom: '1.5rem'}} />
               <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>{t('home.cap_1_title')}</h3>
               <p style={{color: 'var(--text-secondary)'}}>{t('home.cap_1_desc')}</p>
             </div>
             <div className="info-card" style={{padding: '3rem 2rem', border: '1px solid var(--border-color)', borderRadius: '20px', background: 'var(--bg-primary)'}}>
               <Cpu size={48} color="var(--accent-blue)" style={{marginBottom: '1.5rem'}} />
               <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>{t('home.cap_2_title')}</h3>
               <p style={{color: 'var(--text-secondary)'}}>{t('home.cap_2_desc')}</p>
             </div>
             <div className="info-card" style={{padding: '3rem 2rem', border: '1px solid var(--border-color)', borderRadius: '20px', background: 'var(--bg-primary)'}}>
               <BatteryCharging size={48} color="var(--accent-blue)" style={{marginBottom: '1.5rem'}} />
               <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>{t('home.cap_3_title')}</h3>
               <p style={{color: 'var(--text-secondary)'}}>{t('home.cap_3_desc')}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section">
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

      {/* NEW: Featured Projects */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
             <h2 className="headline" style={{fontSize: '2.5rem'}}>{t('home.feat_proj_title')}</h2>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
             <div style={{background: 'var(--bg-primary)', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
               <img src="/project_windfarm.jpg" alt={t('home.feat_proj_1_title')} style={{flex: '1 1 400px', objectFit: 'cover', minHeight: '300px'}} />
               <div style={{flex: '1 1 400px', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <h3 style={{fontSize: '2rem', marginBottom: '1rem'}}>{t('home.feat_proj_1_title')}</h3>
                  <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)'}}>{t('home.feat_proj_1_desc')}</p>
               </div>
             </div>

             <div style={{background: 'var(--bg-primary)', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', flexDirection: 'row-reverse', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
               <img src="/product_automation.jpg" alt={t('home.feat_proj_2_title')} style={{flex: '1 1 400px', objectFit: 'cover', minHeight: '300px'}} />
               <div style={{flex: '1 1 400px', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <h3 style={{fontSize: '2rem', marginBottom: '1rem'}}>{t('home.feat_proj_2_title')}</h3>
                  <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)'}}>{t('home.feat_proj_2_desc')}</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* NEW: Trusted Partners Banner */}
      <section className="section" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
         <div className="container text-center">
            <h2 style={{fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '2px'}}>{t('home.partners_title')}</h2>
            <div style={{display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.6}}>
               {/* Simple typography logos */}
               <h3 style={{fontSize: '2rem', fontWeight: 800, fontFamily: 'sans-serif', margin: 0}}>NEXAGRID</h3>
               <h3 style={{fontSize: '2rem', fontWeight: 300, fontFamily: 'serif', margin: 0}}>GlobalTech</h3>
               <h3 style={{fontSize: '2rem', fontWeight: 900, fontStyle: 'italic', fontFamily: 'sans-serif', margin: 0}}>EcoEnergy</h3>
               <h3 style={{fontSize: '2rem', fontWeight: 500, fontFamily: 'monospace', margin: 0}}>INDUSTRIES 4.0</h3>
               <h3 style={{fontSize: '2rem', fontWeight: 700, fontFamily: 'sans-serif', margin: 0}}>TITAN CORP</h3>
            </div>
         </div>
      </section>

      {/* Testimonials */}
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
