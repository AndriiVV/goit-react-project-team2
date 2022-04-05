import { ReactComponent as User } from '../../images/user-icon.svg';
import { ReactComponent as Training } from '../../images/training-icon.svg';
import { ReactComponent as Home } from '../../images/home-icon.svg';
import s from './UserMenu.module.scss';

const UserMenu = () => {
  return (
    <>
      <Training className={s.training} width="33" height="33" />
      <Home className={s.home} width="32" height="20" />
      <User className={s.user} width="33" height="38" />
      <button className={s.button} type="button">
        Вихід
      </button>
    </>
  );
};

export default UserMenu;
