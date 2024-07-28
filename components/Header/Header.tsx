import Logo from '@/components/Logo/Logo';
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Logo />
      </div>
      <LanguageSelector />
    </header>
  );
};

export default Header;
