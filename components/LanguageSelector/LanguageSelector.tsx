import { useState } from 'react';
import styles from './LanguageSelector.module.scss';

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Հայ');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.languageSelector}>
      <div className={styles.selectedLanguage} onClick={toggleMenu}>
        {selectedLanguage}
      </div>
      <div className={styles.languageMenuButton} onClick={toggleMenu}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 6.44444H14.6667M10.3333 5V6.44444M11.0904 13.3056C9.98727 12.1628 9.09164 10.8185 8.46412 9.33333M12.8611 15.8333H17.9167M11.7778 18L15.3889 10.7778L19 18M13.0425 6.44444C12.3433 10.6118 9.66145 14.1069 6 15.9265"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {isMenuOpen && (
        <ul className={styles.languageMenu}>
          <li onClick={() => selectLanguage('EN')} className={styles.languageOption} data-lang="en">
            EN
          </li>
          <li onClick={() => selectLanguage('RU')} className={styles.languageOption} data-lang="ru">
            RU
          </li>
          <li onClick={() => selectLanguage('AM')} className={styles.languageOption} data-lang="am">
            AM
          </li>
        </ul>
     
    )}
    </div>
  );
};

export default LanguageSelector;
