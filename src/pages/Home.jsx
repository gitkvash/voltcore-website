import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Shield, Zap } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home animate-fade-in">
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: 'url(/hero_bg.jpg)' }}></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>შევქმნათ მომავლის <span className="gradient-text">ენერგია</span></h1>
          <p>
            ჩვენ ვართ ლიდერები ინდუსტრიული ელექტრო მოწყობილობების წარმოებაში.
            უმაღლესი ხარისხი, საიმედოობა და ინოვაციური ტექნოლოგიები თქვენი ბიზნესისთვის.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">პროდუქციის ნახვა</Link>
            <Link to="/contact" className="btn">დაგვიკავშირდით</Link>
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <Cpu className="feature-icon" />
              <h3>უახლესი ტექნოლოგიები</h3>
              <p>ჩვენ ვიყენებთ თანამედროვე მიკროპროცესორებსა და ავტომატიზაციის სისტემებს მაქსიმალური ეფექტურობისთვის.</p>
            </div>
            <div className="feature-card">
              <Shield className="feature-icon" />
              <h3>საიმედოობა და უსაფრთხოება</h3>
              <p>თითოეული დეტალი გადის მკაცრ ხარისხის კონტროლს, რათა უზრუნველყოს უსაფრთხო ექსპლუატაცია.</p>
            </div>
            <div className="feature-card">
              <Zap className="feature-icon" />
              <h3>ენერგოეფექტურობა</h3>
              <p>ჩვენი პროდუქცია შექმნილია იმისთვის, რომ შეამციროს ენერგიის დანაკარგი და გაზარდოს წარმადობა.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
