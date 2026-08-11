import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';
import './Home.css';

const Home = () => {
  return (
    <div className="page-wrapper animate-fade-in">
      <section className="section text-center" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <h1 className="headline">შევქმნათ მომავლის ენერგია.</h1>
          <p className="subheadline">პრო. ძალა. პრო. ინოვაცია.</p>
          
          <div className="home-actions" style={{ marginTop: '2.5rem' }}>
            <Link to="/products" className="btn btn-primary" style={{ marginRight: '1rem' }}>პროდუქციის ნახვა</Link>
            <Link to="/contact" className="btn">დაგვიკავშირდით</Link>
          </div>

          <div className="hero-image-wrapper">
            <img src="/hero_bg_light.jpg" alt="მაღალი ძაბვის ტრანსფორმატორი" className="hero-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
