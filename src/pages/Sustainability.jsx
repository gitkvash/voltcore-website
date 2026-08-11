import React from 'react';
import './PageStyles.css';

const Sustainability = () => {
  return (
    <div className="page-wrapper animate-fade-in">
      <div className="container text-center section">
        <h1 className="headline">ჩვენი პლანეტა. ჩვენი მომავალი.</h1>
        <p className="subheadline">ვქმნით ტექნოლოგიებს, რომლებიც იცავენ გარემოს.</p>
        
        <div className="hero-image-wrapper">
          <img src="/eco_img.jpg" alt="მწვანე ენერგია" className="hero-image" />
        </div>
      </div>

      <div className="container section text-center" style={{ maxWidth: '800px' }}>
         <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>ნულოვანი ემისიისკენ</h2>
         <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            VoltCore-ის ყველა ახალი ქარხანა 100%-ით განახლებად ენერგიაზე მუშაობს. 
            ჩვენი პროდუქცია შექმნილია იმისთვის, რომ მინიმუმამდე დაიყვანოს ენერგიის დანაკარგი 
            და შეამციროს ინდუსტრიული ნახშირბადის კვალი.
         </p>
      </div>
    </div>
  );
};

export default Sustainability;
