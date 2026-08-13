import React from 'react';
import { useTranslation } from 'react-i18next';
import './PageStyles.css';

const Projects = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page-wrapper animate-fade-in section bg-secondary">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
           <h1 className="headline">{t('projects.title')}</h1>
           <p className="subheadline">{t('projects.subtitle')}</p>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '4rem'}}>
           <div style={{background: 'var(--bg-primary)', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
             <img src="/project_windfarm.jpg" alt="" style={{flex: '1 1 400px', objectFit: 'cover', minHeight: '300px'}} />
             <div style={{flex: '1 1 400px', padding: '4rem'}}>
                <h2 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>{t('projects.proj1_title')}</h2>
                <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6'}}>{t('projects.proj1_desc')}</p>
             </div>
           </div>

           <div style={{background: 'var(--bg-primary)', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', flexDirection: 'row-reverse', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
             <div style={{flex: '1 1 400px', background: 'var(--border-color)', minHeight: '300px'}}></div>
             <div style={{flex: '1 1 400px', padding: '4rem'}}>
                <h2 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>{t('projects.proj2_title')}</h2>
                <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6'}}>{t('projects.proj2_desc')}</p>
             </div>
           </div>

           <div style={{background: 'var(--bg-primary)', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
             <div style={{flex: '1 1 400px', background: 'var(--border-color)', minHeight: '300px'}}></div>
             <div style={{flex: '1 1 400px', padding: '4rem'}}>
                <h2 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>{t('projects.proj3_title')}</h2>
                <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6'}}>{t('projects.proj3_desc')}</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
