import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about animate-fade-in">
      <div className="container section">
        <div className="about-grid">
          <div className="about-content">
            <h1 className="gradient-text">ჩვენ შესახებ</h1>
            <h2>ინოვაცია ელექტრონულ ინდუსტრიაში</h2>
            <p>
              VoltCore Industries არის წამყვანი კომპანია, რომელიც სპეციალიზდება უმაღლესი ხარისხის 
              ელექტრო მოწყობილობების, ტრანსფორმატორებისა და ავტომატიზაციის სისტემების წარმოებაში.
            </p>
            <p>
              ჩვენი მისიაა შევქმნათ ენერგოეფექტური და საიმედო პროდუქცია, რომელიც ხელს შეუწყობს 
              ბიზნესის უსაფრთხო და სტაბილურ განვითარებას. ჩვენ ვამაყობთ ჩვენი პროფესიონალთა გუნდით 
              და უახლესი საწარმოო ხაზით.
            </p>
          </div>
          <div className="about-image">
            <img src="/factory_floor.jpg" alt="ჩვენი საწარმო" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
