import React from 'react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2rem 0', textAlign: 'center', marginTop: 'auto' }}>
      <p style={{ color: 'var(--text-secondary)' }}>&copy; {new Date().getFullYear()} VoltCore Industries. ყველა უფლება დაცულია.</p>
    </footer>
  );
};

export default Footer;
