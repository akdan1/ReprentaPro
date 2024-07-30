import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <a href="/terms" className={styles.footerLink}>
          Պայմաններ և Դրույթներ
        </a>
        <a href="/help" className={styles.footerLink}>
          Օգնություն
        </a>
        <span className={styles.footerCopyright}>
          Reprenta 2025 ©
        </span>
      </div>
    </footer>
  );
};

export default Footer;
