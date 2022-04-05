import s from './NavLogo.module.scss';
import { ReactComponent as Logo } from '../../images/logo-icon.svg';

const NavLogo = () => {
  return <Logo className={s.logo} width="28" height="27" />;
};

export default NavLogo;
