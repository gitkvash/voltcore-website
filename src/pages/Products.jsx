import React from 'react';
import './PageStyles.css';
import './Products.css';

const Products = () => {
  return (
    <div className="page-wrapper animate-fade-in section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
           <h1 className="headline">უმაღლესი ხარისხი.</h1>
           <p className="subheadline">ჩვენი პროდუქცია შექმნილია მაქსიმალური წარმადობისთვის.</p>
        </div>
        
        <div className="apple-grid">
          <div className="apple-card">
            <div className="apple-card-info">
              <h3>Nexus-9 ტრანსფორმატორი</h3>
              <p>ინდუსტრიული სტანდარტის მაღალი ძაბვის სისტემა.</p>
            </div>
            <img src="/product_board.jpg" alt="მაღალი ძაბვის ტრანსფორმატორი" className="apple-card-img" />
          </div>

          <div className="apple-card bg-secondary">
            <div className="apple-card-info">
              <h3>ავტომატიზაციის პანელი</h3>
              <p>ჭკვიანი მართვის სისტემა სრული მონიტორინგით.</p>
            </div>
            <div className="apple-card-placeholder">მალე დაემატება</div>
          </div>
          
          <div className="apple-card bg-secondary">
            <div className="apple-card-info">
              <h3>ინდუსტრიული კაბელები</h3>
              <p>მაღალი გამტარობის და თერმო-მდგრადი კაბელები.</p>
            </div>
            <div className="apple-card-placeholder">მალე დაემატება</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
