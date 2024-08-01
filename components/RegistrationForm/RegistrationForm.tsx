import React, { useState } from 'react';
import styles from './RegistrationForm.module.scss';

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [acceptRules, setAcceptRules] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className={styles.registrationForm}>
      <div className={styles.registrationForm__wrapper}>
        <h2 className={styles.registrationForm__title}>Գրանցում</h2>
        <div className={styles.signupWithGoogleButton}>
          <div className={styles.googleLogo}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_8114_3033)">
                <path d="M15.9884 8.14554C15.9884 7.49003 15.934 7.01168 15.8162 6.51562H8.15625V9.47426H12.6525C12.5619 10.2095 12.0723 11.3168 10.9845 12.0609L10.9693 12.1599L13.3912 13.9934L13.559 14.0097C15.1 12.619 15.9884 10.5727 15.9884 8.14554Z" fill="#4285F4" />
                <path d="M8.16331 15.9426C10.3661 15.9426 12.2153 15.2339 13.5661 14.0115L10.9916 12.0626C10.3027 12.5321 9.378 12.8598 8.16331 12.8598C6.00585 12.8598 4.17472 11.4691 3.52198 9.54688L3.4263 9.55481L0.907934 11.4594L0.875 11.5488C2.21661 14.1531 4.97239 15.9426 8.16331 15.9426Z" fill="#34A853" />
                <path d="M3.5172 9.55372C3.34497 9.05767 3.24529 8.52613 3.24529 7.97694C3.24529 7.42769 3.34497 6.89621 3.50814 6.40016L3.50358 6.29451L0.953652 4.35938L0.870223 4.39815C0.31728 5.47888 0 6.69249 0 7.97694C0 9.26139 0.31728 10.4749 0.870223 11.5557L3.5172 9.55372Z" fill="#FBBC05" />
                <path d="M8.16331 3.08267C9.69528 3.08267 10.7287 3.72932 11.3179 4.26971L13.6204 2.07284C12.2063 0.788392 10.3661 0 8.16331 0C4.97239 0 2.21661 1.78936 0.875 4.39368L3.51292 6.39569C4.17472 4.47344 6.00585 3.08267 8.16331 3.08267Z" fill="#EB4335" />
              </g>
              <defs>
                <clipPath id="clip0_8114_3033">
                  <rect width="16" height="15.9999" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p>Գրանցվել Google-ի միջոցով</p>
        </div>
        <span className={styles.orTitle}>Կամ</span>
        <form onSubmit={handleSubmit} className={styles.registrationForm__inputs}>
          <div className={styles.inputEmail}>
            <label htmlFor="email">էլ. հասցե</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={styles.inputPassword}>
            <label htmlFor="password">Ստեղծել գաղտնաբառ</label> 
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
          </div>
          <div className={styles.repeatPassword}>
            <label htmlFor="repeatPassword">Կրկնել գաղտնաբառը</label>
            <input type="password" id="repeatPassword" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
          </div>
          <div className={styles.registrationForm__rules}>
            <input type="checkbox" id="acceptRules" checked={acceptRules} onChange={(e) => setAcceptRules(e.target.checked)} />
            <label htmlFor="acceptRules">
              Ես ընդունում եմ օգտագործման <br />
              <a href="#">Պայմաններ և Դրույթներ-ը</a>
            </label>
          </div>
          <div className={styles.registrationForm__buttons}>
            <div className={styles.formCheckButton}>
              <button type="submit">Շարունակել</button>
            </div>
            <div className={styles.loginButton}>
              Մուտք գործել
            </div>
          </div>
          <footer className={styles.footer}>
      <a href="#">Պայմաններ և դրույթներ</a> • 
      <a href="#">Օգնություն</a> • Reprenta 2025 ©
            </footer>
        </form>
      </div>
    </main>
  );
};

export default RegistrationForm;
