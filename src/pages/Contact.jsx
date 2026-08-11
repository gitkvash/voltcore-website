import React from 'react';
import './PageStyles.css';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-wrapper animate-fade-in section bg-secondary">
      <div className="container text-center" style={{ maxWidth: '600px' }}>
        <h1 className="headline" style={{ marginBottom: '1rem' }}>დაგვიკავშირდით.</h1>
        <p className="subheadline" style={{ marginBottom: '4rem' }}>მზად ვართ გიპასუხოთ ნებისმიერ შეკითხვაზე.</p>
        
        <div className="contact-form-apple">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="სახელი" className="apple-input" />
            <input type="email" placeholder="ელ. ფოსტა" className="apple-input" />
            <textarea rows="5" placeholder="შეტყობინება" className="apple-input"></textarea>
            <button className="btn btn-primary" type="submit" style={{ width: '100%', marginTop: '1rem' }}>გაგზავნა</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
