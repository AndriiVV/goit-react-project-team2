import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuth } from '../../redux/auth/authSelectors';
import NavLogo from '../NavLogo/NavLogo';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.scss';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsAuth);

  return (
    <header className={s.header}>
      <nav className={s.headerNav}>
        <NavLink to={isLoggedIn ? '/library' : '/login'}>
          <NavLogo />
        </NavLink>
        {isLoggedIn && <UserMenu />}
      </nav>
    </header>
  );
};

export default AppBar;
