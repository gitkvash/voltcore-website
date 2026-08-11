import React from 'react';
import './PageStyles.css';

const About = () => {
  return (
    <div className="page-wrapper animate-fade-in bg-secondary">
      <div className="container section text-center" style={{ maxWidth: '800px' }}>
        <h1 className="headline">ჩვენ შესახებ.</h1>
        <h2 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1.5rem', fontWeight: 500 }}>
          ინოვაცია ელექტრონულ ინდუსტრიაში.
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '3rem' }}>
          VoltCore Industries არის წამყვანი კომპანია, რომელიც სპეციალიზდება უმაღლესი ხარისხის 
          ელექტრო მოწყობილობების, ტრანსფორმატორებისა და ავტომატიზაციის სისტემების წარმოებაში.
          ჩვენი მისიაა შევქმნათ ენერგოეფექტური და საიმედო პროდუქცია.
        </p>
        
        <div className="hero-image-wrapper">
          <img src="/factory_floor.jpg" alt="ჩვენი საწარმო" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
