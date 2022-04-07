import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import s from './Header.module.css';
import logo from '../../../images/logo-icon.svg'
import { Suspense } from 'react';

const Header = () => {
  return (
    <div className={s.header}>
        <img className={s.logo}src={logo} alt="App Logo" />
        <Suspense fallback="loading">
          <LanguageSwitcher/>
        </Suspense>    
    </div>
  )
}

export default Header;