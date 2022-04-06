import { ReactComponent as User } from '../../images/user-icon.svg';
import { ReactComponent as Training } from '../../images/training-icon.svg';
import { ReactComponent as Home } from '../../images/home-icon.svg';
import s from './UserMenu.module.scss';
import { NavLink } from 'react-router-dom';
import LogOut from 'components/LogOut/LogOut';

const UserMenu = () => {
  return (
    <>
      {/* знизу потрібно ім'я юзера для брейкпоінта 768 и 1280 */}
      <User className={s.firstUser} width="33" height="38" />
      <NavLink to="/training" activeClassName={s.activeTraining}>
        <Training className={s.training} width="33" height="33" />
      </NavLink>
      <NavLink to="/library" activeClassName={s.activeHome}>
        <Home className={s.home} width="32" height="20" />
      </NavLink>
      <User className={s.user} width="33" height="38" />
      <LogOut />
    </>
  );
};

export default UserMenu;
