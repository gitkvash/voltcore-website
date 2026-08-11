import React from 'react';
import './PageStyles.css'; // We'll create a shared CSS for Apple style pages

const Services = () => {
  return (
    <div className="page-wrapper animate-fade-in">
      <div className="container text-center section">
        <h1 className="headline">უმაღლესი დონის სერვისი.</h1>
        <p className="subheadline">მონტაჟი, მხარდაჭერა და კონსულტაცია თქვენი წარმატებისთვის.</p>
        
        <div className="hero-image-wrapper">
          <img src="/services_img.jpg" alt="ჩვენი სერვისები" className="hero-image" />
        </div>
      </div>

      <div className="bg-secondary section">
        <div className="container">
           <div className="grid-3">
              <div className="info-card">
                <h3>პროფესიონალური მონტაჟი</h3>
                <p>ჩვენი სერტიფიცირებული ინჟინრები უზრუნველყოფენ მოწყობილობების უსაფრთხო და სწრაფ ინსტალაციას.</p>
              </div>
              <div className="info-card">
                <h3>ტექნიკური მხარდაჭერა</h3>
                <p>24/7 ტექნიკური დახმარება და მონიტორინგი შეფერხებების თავიდან ასაცილებლად.</p>
              </div>
              <div className="info-card">
                <h3>აუდიტი და კონსულტაცია</h3>
                <p>ენერგოეფექტურობის აუდიტი და ოპტიმიზაციის სტრატეგიები თქვენი ბიზნესისთვის.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
