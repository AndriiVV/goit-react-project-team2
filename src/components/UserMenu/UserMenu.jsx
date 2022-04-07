import { ReactComponent as Training } from '../../images/training-icon.svg';
import { ReactComponent as Home } from '../../images/home-icon.svg';
import s from './UserMenu.module.scss';
import { NavLink } from 'react-router-dom';
import LogOut from 'components/LogOut/LogOut';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const userName = useSelector(state => state.auth.user.name);
  const symbol = userName.slice(0, 1).toUpperCase();
  return (
    <>
      <div className={s.symbolWrap}>
        <span className={s.symbol}>{symbol}</span>
      </div>
      <div className={s.nameWrap}>{userName}</div>
      <NavLink to="/training" activeClassName={s.activeTraining}>
        <Training className={s.training} width="33" height="33" />
      </NavLink>
      <NavLink to="/library" activeClassName={s.activeHome}>
        <Home className={s.home} width="32" height="20" />
      </NavLink>
      <div className={s.secSymbolWrap}>
        <span className={s.secSymbol}>{symbol}</span>
      </div>
      <LogOut />
    </>
  );
};

export default UserMenu;
