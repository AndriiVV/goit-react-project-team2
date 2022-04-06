import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsAuth } from 'redux/auth/authSelectors';
import NavLogo from '../NavLogo/NavLogo';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.scss';

const AppBar = () => {
  // const isLoggedIn = useSelector(getIsAuth);
  return (
    <header className={s.header}>
      <nav className={s.headerNav}>
        <Link to="/">
          <NavLogo />
        </Link>
        {/* <NavLink className="">{isLoggedIn && <UserMenu />}</NavLink> */}
        <UserMenu />
      </nav>
    </header>
  );
};

export default AppBar;