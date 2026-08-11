import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <div className="products animate-fade-in section">
      <div className="container">
        <h1 className="text-center gradient-text" style={{ marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>ჩვენი პროდუქცია</h1>
        
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image">
              <img src="/product_board.jpg" alt="მაღალი ძაბვის ტრანსფორმატორი" />
            </div>
            <div className="product-info">
              <h3>Nexus-9 ტრანსფორმატორი</h3>
              <p>ინდუსტრიული სტანდარტის მაღალი ძაბვის სისტემა, იდეალურია დიდი ქარხნებისთვის.</p>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>დეტალურად</button>
            </div>
          </div>

          {/* Placeholder cards to show layout */}
          <div className="product-card">
            <div className="product-image" style={{ background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>ფოტო მალე დაემატება</span>
            </div>
            <div className="product-info">
              <h3>ავტომატიზაციის პანელი</h3>
              <p>ჭკვიანი მართვის სისტემა სრული მონიტორინგით.</p>
              <button className="btn" style={{ width: '100%', marginTop: '1rem' }}>დეტალურად</button>
            </div>
          </div>
          
          <div className="product-card">
             <div className="product-image" style={{ background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>ფოტო მალე დაემატება</span>
            </div>
            <div className="product-info">
              <h3>ინდუსტრიული კაბელები</h3>
              <p>მაღალი გამტარობის და თერმო-მდგრადი კაბელები ნებისმიერი გარემოსთვის.</p>
              <button className="btn" style={{ width: '100%', marginTop: '1rem' }}>დეტალურად</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
