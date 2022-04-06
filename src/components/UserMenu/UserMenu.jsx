import { ReactComponent as User } from '../../images/user-icon.svg';
import { ReactComponent as Training } from '../../images/training-icon.svg';
import { ReactComponent as Home } from '../../images/home-icon.svg';
import s from './UserMenu.module.scss';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <>
      {/* знизу потрібно ім'я юзера для брейкпоінта 768 и 1280 */}
      <User className={s.firstUser} width="33" height="38" />
      <NavLink to="/training">
        <Training className={s.training} width="33" height="33" />
      </NavLink>
      <NavLink to="/library">
        <Home className={s.home} width="32" height="20" />
      </NavLink>
      <User className={s.user} width="33" height="38" />
      <button className={s.button} type="button">
        Вихід
      </button>
    </>
  );
};

export default UserMenu;
