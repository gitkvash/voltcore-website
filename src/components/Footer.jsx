import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2rem 0', textAlign: 'center', marginTop: 'auto' }}>
      <p style={{ color: 'var(--text-secondary)' }}>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
    </footer>
  );
};

export default Footer;
