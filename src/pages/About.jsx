import React from 'react';
import { useTranslation } from 'react-i18next';
import './PageStyles.css';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="page-wrapper animate-fade-in bg-secondary">
      <div className="container section text-center" style={{ maxWidth: '800px' }}>
        <h1 className="headline">{t('about.title')}</h1>
        <h2 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1.5rem', fontWeight: 500 }}>
          {t('about.subtitle')}
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '3rem' }}>
          {t('about.desc')}
        </p>
        
        <div className="hero-image-wrapper">
          <img src="/office_hq.jpg" alt={t('about.title')} className="hero-image" />
        </div>
      </div>

      <div className="container section text-center">
         <h2 className="headline" style={{fontSize: '2.5rem', marginBottom: '3rem'}}>{t('about.video_title') || 'Corporate Demo Video'}</h2>
         <div style={{maxWidth: '1000px', margin: '0 auto'}}>
           <video 
             width="100%" 
             autoPlay 
             loop 
             muted 
             playsInline 
             controls
             style={{borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', background: '#000'}}
           >
             <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
             Your browser does not support the video tag.
           </video>
           <p style={{marginTop: '1rem', color: 'var(--text-secondary)'}}>
             *ეს არის სატესტო (Placeholder) ვიდეო დიზაინის სადემონსტრაციოდ.
           </p>
         </div>
      </div>

      <div className="container section text-center">
        <h2 className="headline" style={{fontSize: '2.5rem', marginBottom: '3rem'}}>{t('about.leadership_title')}</h2>
        <div style={{display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap'}}>
           <div style={{textAlign: 'center'}}>
             <img src="/leader_ceo.jpg" alt={t('about.leader_1_name')} style={{width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem'}} />
             <h3>{t('about.leader_1_name')}</h3>
             <p style={{color: 'var(--text-secondary)'}}>{t('about.leader_1_role')}</p>
           </div>
           <div style={{textAlign: 'center'}}>
             <img src="/leader_cto.jpg" alt={t('about.leader_2_name')} style={{width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem'}} />
             <h3>{t('about.leader_2_name')}</h3>
             <p style={{color: 'var(--text-secondary)'}}>{t('about.leader_2_role')}</p>
           </div>
        </div>
      </div>

      <div className="container section">
         <h2 className="headline text-center" style={{fontSize: '2.5rem', marginBottom: '4rem'}}>{t('about.timeline_title')}</h2>
         <div style={{maxWidth: '600px', margin: '0 auto'}}>
            <div style={{display: 'flex', gap: '2rem', marginBottom: '2rem'}}>
               <h3 style={{color: 'var(--accent-blue)', minWidth: '80px', fontSize: '1.5rem'}}>{t('about.time_1_year')}</h3>
               <p style={{fontSize: '1.2rem', color: 'var(--text-secondary)'}}>{t('about.time_1_txt')}</p>
            </div>
            <div style={{display: 'flex', gap: '2rem', marginBottom: '2rem'}}>
               <h3 style={{color: 'var(--accent-blue)', minWidth: '80px', fontSize: '1.5rem'}}>{t('about.time_2_year')}</h3>
               <p style={{fontSize: '1.2rem', color: 'var(--text-secondary)'}}>{t('about.time_2_txt')}</p>
            </div>
            <div style={{display: 'flex', gap: '2rem'}}>
               <h3 style={{color: 'var(--accent-blue)', minWidth: '80px', fontSize: '1.5rem'}}>{t('about.time_3_year')}</h3>
               <p style={{fontSize: '1.2rem', color: 'var(--text-secondary)'}}>{t('about.time_3_txt')}</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default About;
