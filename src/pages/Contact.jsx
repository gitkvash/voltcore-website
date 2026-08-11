import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact animate-fade-in section">
      <div className="container">
        <h1 className="text-center gradient-text" style={{ marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>დაგვიკავშირდით</h1>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h2>საკონტაქტო ინფორმაცია</h2>
            <p>მზად ვართ გიპასუხოთ ნებისმიერ შეკითხვაზე და დაგეხმაროთ თქვენი ბიზნესისთვის საუკეთესო გადაწყვეტილების მიღებაში.</p>
            
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h4>მისამართი</h4>
                <p>თბილისი, ინდუსტრიული ზონა, ქუჩა #12</p>
              </div>
            </div>
            
            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h4>ტელეფონი</h4>
                <p>+995 32 2 00 00 00</p>
              </div>
            </div>
            
            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <h4>ელ. ფოსტა</h4>
                <p>info@voltcore.ge</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>სახელი</label>
                <input type="text" placeholder="თქვენი სახელი" />
              </div>
              <div className="form-group">
                <label>ელ. ფოსტა</label>
                <input type="email" placeholder="თქვენი ელ. ფოსტა" />
              </div>
              <div className="form-group">
                <label>შეტყობინება</label>
                <textarea rows="5" placeholder="თქვენი შეტყობინება"></textarea>
              </div>
              <button className="btn btn-primary" type="submit">გაგზავნა</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
