import LanguageSwitcher from 'components/common/LanguageSwitcher/LanguageSwitcher';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuth } from '../../redux/auth/authSelectors';
import NavLogo from '../NavLogo/NavLogo';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.scss';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsAuth);
  // console.log(isLoggedIn);

  return (
    <header className={s.header}>
      <nav className={s.headerNav}>
        <div className={s.secWrap}>
          <NavLink to={isLoggedIn ? '/library' : '/login'}>
            <NavLogo />
          </NavLink>
          <Suspense fallback="loading">
            <LanguageSwitcher className={s.lang} />
          </Suspense>
        </div>
        {isLoggedIn && <UserMenu />}
      </nav>
    </header>
  );
};

export default AppBar;
