import googleIcon from '../../images/google-icon.png';
import s from './GoogleSingIn.module.css';

const GoogleSingIn = () => {
  return (
    <button className={s.btn} type="button">
        <img src={googleIcon} alt="Google Logo"  className={s.googleLogo}/>
        Google
    </button>
  )
}

export default GoogleSingIn;